import React, { FC } from 'react';
import clsx from 'clsx';
import { Details as DetailsGeneric } from '@docusaurus/theme-common/Details';
import type { Props } from '@theme/Details';

import styles from './styles.module.css';

interface DetailsProps extends Props {
  className: string;
}

// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';

const Details: FC<DetailsProps> = (props) => (
  <DetailsGeneric {...props} className={clsx(InfimaClasses, styles.details, props.className)} />
);

export default Details;
