/* eslint-disable react/no-unused-prop-types */

import React, { type ReactNode } from 'react';
import cn from 'classnames';
import Link from '@docusaurus/Link';
import { findFirstCategoryLink, useDocById } from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocCard';
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { CoverImage } from '@site/src/components/DocsHeader';
import { DOC_COVERS } from '@site/shared/covers';

import styles from './styles.module.scss';

interface CardContainerProps {
  href: string;
  children: ReactNode;
  className?: string;
}

function CardContainer(props: CardContainerProps): JSX.Element {
  const { href, children, className } = props;

  return (
    <Link href={href} className={cn('card', styles.cardContainer, className)}>
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  // icon,
  title,
  description,
  className,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}): JSX.Element {
  return (
    <CardContainer href={href} className={className}>
      <div
        className={cn(styles.imageWrapper, {
          [styles.imageWrapper_withCover]: !!DOC_COVERS.get(title),
        })}
      >
        <CoverImage src={DOC_COVERS.get(title)} />
      </div>

      <h2 className={cn('text--truncate', styles.cardTitle)} title={title}>
        {title}
      </h2>

      {description && (
        <p className={cn(styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

interface CardCategoryProps {
  item: PropSidebarItemCategory;
  className?: string;
}

function CardCategory(props: CardCategoryProps): JSX.Element | null {
  const { item, className } = props;

  const href = findFirstCategoryLink(item);

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon='🗃️'
      title={item.label}
      className={className}
      description={translate(
        {
          message: '{count} items',
          id: 'theme.docs.DocCard.categoryDescription',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count: item.items.length },
      )}
    />
  );
}

interface CardLinkProps {
  item: PropSidebarItemLink;
  className?: string;
}

function CardLink(props: CardLinkProps): JSX.Element {
  const { item, className } = props;

  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout href={item.href} icon={icon} title={item.label} description={doc?.description} className={className} />
  );
}

interface DocCardProps extends Props {
  className?: string;
}

export default function DocCard(props: DocCardProps): JSX.Element {
  const { item, className } = props;

  switch (item.type) {
    case 'link':
      return <CardLink item={item} className={className} />;
    case 'category':
      return <CardCategory item={item} className={className} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
