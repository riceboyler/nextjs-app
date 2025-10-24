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
      bgGradient={'to-br'}
      gradientFrom="gray.700"
      gradientTo="pink.700"
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
      <Box
        p={4}
        mx={[4, 16]}
        fontSize="large"
        maxHeight={isOpen ? '500px' : '0'}
        opacity={isOpen ? '1' : '0'}
        transition="all 0.5s ease-in-out"
        textAlign={['left', 'center']}
      >
        {children}
      </Box>
    </Box >
  );
};

export default Aside;
