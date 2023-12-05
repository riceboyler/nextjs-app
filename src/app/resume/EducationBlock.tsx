import { Box, HStack, styled } from 'styled-system/jsx';
import React from 'react';
import { Education } from '../../../data/resumeData';

type Props = {
  school: Education;
};

export const EducationBlock = ({ school }: Props) => {
  return (
    <Box
      borderBottom="solid 2px"
      borderColor="gray.600"
      paddingBottom={4}
      marginBottom={6}
    >
      <HStack
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <h1>
          {school.school} - {school.location}
        </h1>
        <styled.h1
          fontSize="md"
          textAlign="right"
        >
          {school.start} - {school.end}
        </styled.h1>
      </HStack>
      <styled.p fontWeight="bold">
        {school.department} ({school.degree})
      </styled.p>
      <styled.p>
        {school.description}
      </styled.p>
    </Box>
  );
};