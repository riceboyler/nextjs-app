"use client";

import React, { useState } from 'react';
import { Box } from 'styled-system/jsx';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Aside = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      bgGradient={`linear(to-b, gray.700, pink.700)`}
      p={1}
      mx="auto"
      textAlign="center"
      cursor="pointer"
    >
      <Box
        onClick={() => setIsOpen(!isOpen)}
        fontSize="large"
        color="yellow.200"
      >
        {title} (click to {isOpen ? 'collapse' : 'expand'})
      </Box>
      {isOpen && (
        <Box
          p={4}
          mx={16}
          fontSize="large"
        >
          {children}
        </Box>
      )}
    </Box >
  );
};

export default Aside;
