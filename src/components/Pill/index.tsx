import React from 'react';

import './style.scss';

type TVariant = 'transparent' | 'blue';

interface IProps {
  variant?: TVariant;
  className?: string;
  children: any;
  [key: string]: any;
}

export const Pill: React.FC<IProps> = ({
  variant,
  className: classes,
  children,
  ...rest
}) => {
  return (
    <a
      className={
        (variant ? 'pill-' + variant : '') + ' pill ' + (classes ? classes : '')
      }
      {...rest}
    >
      {children}
    </a>
  );
};
