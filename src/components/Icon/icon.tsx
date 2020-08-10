import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'sceondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  // icon-primary
  const { className, theme, ...restProps } = props;
  const classes = classnames('icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} { ...restProps } />
  )
}

export default Icon;