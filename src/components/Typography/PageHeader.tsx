import React from 'react';
import { BoxProps, styled } from 'styled-system/jsx';

type Props = BoxProps & {
  children?: React.ReactNode;
};

export const PageHeader = ({ children, ...rest }: Props) => {
  return (
    <styled.h1 {...rest}>{children}</styled.h1>
  );
};