/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react';
import { DocItemContext } from '@site/src/services/docItemContext';

import { DocsHeaderProps } from './interfaces';

export const HeaderMetaProvider = (props: DocsHeaderProps) => {
  const { setHeaderContext = () => {} } = useContext(DocItemContext);

  // не добавлять props в зависимости, приводит к бесконечному рендеру
  useEffect(() => setHeaderContext(props), [setHeaderContext]);
  return null;
};
