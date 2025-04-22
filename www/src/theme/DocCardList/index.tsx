/* eslint-disable @typescript-eslint/no-use-before-define, react/no-array-index-key */

import React from 'react';
import cn from 'classnames';
import { useCurrentSidebarCategory, filterDocCardListItems } from '@docusaurus/theme-common';
import DocCard from '@theme/DocCard';
import type { Props } from '@theme/DocCardList';

import { useBreakpoints } from './hooks/useBreakpoints';
import styles from './styles.module.scss';

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: Props): JSX.Element {
  const { items, className } = props;

  const colClass = useBreakpoints();

  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }

  const filteredItems = filterDocCardListItems(items);

  return (
    <section className={cn('row', styles.section, className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className={cn('col', colClass, styles.article)}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
