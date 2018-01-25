import * as React from "react";

declare type Props = {
  strokeWidth?: number;
  strokeColor?: string;
  trailWidth?: number;
  trailColor?: string;
  strokeLinecap?: string;
  prefixCls?: string;
  className?: string;
  style?: any;
  percent?: number;
  gapDegree?: number;
  gapPosition?: number;
};

export class Line extends React.Component<Props> {}
export class Circle extends React.Component<Props> {}
