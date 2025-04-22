import React, { FC } from 'react';
import Link from '@docusaurus/Link';

interface LinkCardProps {
  to?: string;
  className?: string;
}

export const LinkCard: FC<LinkCardProps> = ({ to, children, className }) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return <div className={className}>{children}</div>;
};
