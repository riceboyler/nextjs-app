import React from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import { Flex } from '../../../styled-system/jsx';
import { ScrollToLink } from './ScrollToLink';
import { Text } from '../../components/Typography';

export const BackToTopButton = () => {
  return (
    <ScrollToLink
      target="heading"
      underline={false}
    >
      <Flex
        alignItems="center"
        gap={2}
        border="solid 1px"
        borderRadius="10px"
        paddingX="10px"
        paddingY="4px"
      >
        <IoArrowUpCircle />
        <Text
          paddingTop="2px"
          fontSize="16px"
          fontFamily="zen"
          textDecoration="none"
        >Back to top
        </Text>
      </Flex>
    </ScrollToLink>
  );
};