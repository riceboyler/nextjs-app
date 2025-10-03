"use client";

import React from 'react';
import { styled } from 'styled-system/jsx';

type Props = {
  target: string;
  underline?: boolean;
  children: React.ReactNode;
};

export const ScrollToLink = ({ target, underline = true, children }: Props) => {
  return (
    <styled.a
      onClick={() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      cursor="pointer"
      textDecoration={underline ? 'underline' : 'none'}
    >
      {children}
    </styled.a>
  );
};