import React from 'react';
import { BoxProps, styled } from 'styled-system/jsx';

type Props = BoxProps & {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
};

export const Heading = ({ tag = 'h3', children, ...rest }: Props) => {
  const Tag = styled[tag];
  return (
    <Tag {...rest}>{children}</Tag>
  );
};