import React, { FC, useState, useContext, useRef, type MouseEvent } from 'react';
import cn from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import { Badge } from '@kit-xyz/badge';
import { Paper } from '@kit-xyz/paper';
import { ArrowsContainer, ArrowsCard } from '@kit-xyz/arrows';
import EnvelopeIcon from '@kit-xyz/icon/src/assets/duotone/EnvelopeIcon';
import CheckIcon from '@kit-xyz/icon/src/assets/duotone/CheckIcon';

import { InfoPageContext } from '../context';
import placeholder from '../assets/placeholder.jpg';

import { TEAM_SCHEMA, layoutGenerators, type CardProps } from './team.schema';
import styles from './team.module.scss';

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const Card: FC<CardProps> = (props) => {
  const { id, to, avatarURL, title, subtitle, badge, required, anchors, className } = props;
  const { colorMode } = useColorMode();
  const { smoothed, cardsBorderRadius } = useContext(InfoPageContext);

  const isEmail = EMAIL_REGEXP.test(String(badge.children));

  const [hovered, setHovered] = useState<boolean>(false);

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const email = useRef<string>(String(badge.children));

  const badgeClickHandler = (e: MouseEvent<HTMLSpanElement>, value?: string) => {
    e.stopPropagation();
    e.preventDefault();

    if (!value) return;
    if (!isEmail) return;

    navigator.clipboard.writeText(value);
    email.current = 'Адрес скопирован';
    setIsCopied(true);

    setTimeout(() => {
      email.current = value;
      setIsCopied(false);
    }, 1200);
  };

  return (
    <ArrowsCard
      id={id}
      anchors={anchors}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={title}
    >
      <Paper
        href={to}
        component='a'
        target='_blank'
        smoothedCorners={smoothed}
        fullwidth
        withBorder={!!to && hovered}
        padding='xl'
        borderRadius={cardsBorderRadius}
        borderWidth='m'
        colorMode={colorMode}
        className={cn(styles.card, styles[`card_${id}`], className, {
          [styles.card_interactive]: !!to,
          [styles.card_required]: required,
        })}
      >
        {avatarURL && (
          <div className={styles.avatar}>
            <img src={avatarURL || placeholder} alt={title} />
          </div>
        )}

        <h3 className={styles.title}>{title}</h3>

        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}

        <Badge
          {...badge}
          appearance={isCopied ? 'tertiary-solid' : badge.appearance}
          IconLeft={isEmail && EnvelopeIcon}
          IconRight={isCopied && CheckIcon}
          className={styles.badge}
          colorMode={colorMode}
          onClick={(e) => badgeClickHandler(e, String(badge.children))}
        >
          {email.current}
        </Badge>
      </Paper>
    </ArrowsCard>
  );
};

export const Team = () => {
  const { colorMode } = useColorMode();
  const { breakpoint } = useContext(InfoPageContext);

  return (
    <ArrowsContainer strokeColor='neutral' strokeShade='300' lineStyle='curve' colorMode={colorMode}>
      <div className={styles.team}>
        {TEAM_SCHEMA.map((teamCol, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={cn(styles.teamCol, styles[`${teamCol[0].id}-${breakpoint}`])} key={`teamCol-${i}`}>
            {teamCol.map((card) => {
              const arrowsLayout = layoutGenerators[card.id]
                ? layoutGenerators[card.id](breakpoint)
                : {
                    relations: undefined,
                    anchors: undefined,
                  };

              return <Card key={card.id} {...card} {...arrowsLayout} />;
            })}
          </div>
        ))}
      </div>
    </ArrowsContainer>
  );
};
