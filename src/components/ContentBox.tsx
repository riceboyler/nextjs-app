import { Box, BoxProps } from 'styled-system/jsx';
import React from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export const ContentBox = ({ children, ...rest }: Props) => {
  return (
    <Box
      {...rest}
      bgColor={rest.backgroundColor ?? rest.bgColor ?? 'gray.700'}
      p={8}
      borderRadius="xl"
    >
      {children}
    </Box>
  );
};

export default ContentBox;
