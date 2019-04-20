import { Color } from 'csstype';
import React, { ComponentType } from 'react';
import { Diff } from 'utility-types';

export interface WithColorProps {
  color: Color;
}

// export type WithColor = (
//   color: Color,
// ) => <Props extends WithColorProps>(
//   Component: ComponentType<Props>,
// ) => ComponentType<Omit<Props, 'color'>>;

// export type WithColor = (
//   color: Color,
// ) => <Props extends WithColorProps>(
//   Component: ComponentType<Props>,
// ) => ComponentType<Diff<Props, WithColor>>;

// const withColor: WithColor = color => Component => props => (
//   <Component {...props} color={color} />
// );

// const withColor = (color: Color) => <Props extends WithColorProps>(
//   Component: ComponentType<Props>,
// ) => (props: Omit<Props, 'color'>) => (
//   <Component {...props as Props} color={color} />
// );

const withColor = (color: Color) => <Props extends WithColorProps>(
  Component: ComponentType<Props>,
) => (props: Diff<Props, WithColorProps>) => (
  <Component {...props as Props} color={color} />
);

export default withColor;
