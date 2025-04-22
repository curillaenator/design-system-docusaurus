/* eslint-disable react/prop-types, react-hooks/exhaustive-deps */
import React, { useRef, useCallback, useState } from 'react';
import cn from 'classnames';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Input, SearchButton } from '@site/src/components/Input';
import { useClickAway } from '@kit-base/uikit-utils';

import styles from './styles.module.scss';

const Search = (props) => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const history = useHistory();
  const isBrowser = useIsBrowser();
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  const [focused, setFocused] = useState(false);
  const [indexReady, setIndexReady] = useState(false);

  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
    // eslint-disable-next-line no-new
    new DocSearch({
      searchDocs,
      searchIndex,
      baseUrl,
      inputSelector: '#search_input_react',
      // Override algolia's default selection event, allowing us to do client-side
      // navigation and avoiding a full page refresh.
      handleSelected: (_input, _event, suggestion) => {
        const url = suggestion.url || '/';
        // Use an anchor tag to parse the absolute url into a relative url
        // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
        const a = document.createElement('a');
        a.href = url;
        // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
        // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.

        history.push(url);
      },
    });
  };

  const pluginData = usePluginData('docusaurus-lunr-search');

  const getSearchDoc = () =>
    process.env.NODE_ENV === 'production'
      ? // @ts-expect-error no types for pluginData
        fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then((content) => content.json())
      : Promise.resolve([]);

  const getLunrIndex = () =>
    process.env.NODE_ENV === 'production'
      ? // @ts-expect-error no types for pluginData
        fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then((content) => content.json())
      : Promise.resolve([]);

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([getSearchDoc(), getLunrIndex(), import('./DocSearch'), import('./algolia.css')]).then(
        ([searchDocs, searchIndex, { default: DocSearch }]) => {
          if (searchDocs.length === 0) {
            return;
          }
          initAlgolia(searchDocs, searchIndex, DocSearch);
          setIndexReady(true);
        },
      );
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    (e) => {
      setFocused(true);

      if (!searchBarRef.current.contains(e.target)) {
        searchBarRef.current.focus();
      }

      if (props.handleSearchBarToggle) {
        props.handleSearchBarToggle(!props.isSearchBarExpanded);
      }
    },
    [props.handleSearchBarToggle, props.isSearchBarExpanded],
  );

  useClickAway(searchBarRef, () => setFocused(false));

  if (isBrowser) {
    loadAlgolia();
  }

  return (
    <div className='navbar__search' key='search-box'>
      {/* <span
        aria-label='expand searchbar'
        role='button'
        className={cn('search-icon', {
          'search-icon-hidden': props.isSearchBarExpanded,
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      /> */}

      <Input
        ref={searchBarRef}
        id='search_input_react'
        type='search'
        placeholder='Поиск'
        aria-label='Search'
        focused={focused}
        onClick={loadAlgolia}
        onMouseOver={loadAlgolia}
        onFocus={toggleSearchIconClick}
        onBlur={toggleSearchIconClick}
        disabled={!indexReady}
        className={styles.searchBox}
        wrapperClassName={styles.searchBox}
        rightEl={
          <SearchButton
            aria-label='expand searchbar'
            role='button'
            className={cn('search-icon', styles.seacrhIconButton, {
              'search-icon-hidden': props.isSearchBarExpanded,
            })}
            onClick={toggleSearchIconClick}
            onKeyDown={toggleSearchIconClick}
            tabIndex={0}
            disabled={!indexReady}
          />
        }
        inputClassName={cn({
          'search-bar-expanded': props.isSearchBarExpanded,
          'search-bar': !props.isSearchBarExpanded,
        })}
      />
    </div>
  );
};

export default Search;
