import React from 'react';
import { BoxProps, styled } from 'styled-system/jsx';

type Props = BoxProps & {
  children: React.ReactNode;
};

export const Text = ({ children, ...rest }: Props) => {
  return (
    <styled.p {...rest}>{children}</styled.p>
  );
};