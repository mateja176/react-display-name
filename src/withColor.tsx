import { Color } from 'csstype';
import React, { ComponentType } from 'react';
import { Diff } from 'utility-types';

export interface WithColorProps {
  color: Color;
}

const withColor = (color: Color) => <Props extends WithColorProps>(
  Component: ComponentType<Props>,
) => {
  const WithColor = (props: Diff<Props, WithColorProps>) => (
    <Component {...props as Props} color={color} />
  );

  WithColor.displayName = `${withColor.name}(${Component.displayName ||
    Component.name})`;

  return WithColor;
};

export default withColor;
