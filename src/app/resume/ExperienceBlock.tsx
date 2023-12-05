import { Box, HStack, styled } from 'styled-system/jsx';
import React from 'react';
import { Experience } from '../../../data/resumeData';

type Props = {
  job: Experience;
};

export const ExperienceBlock = ({ job }: Props) => {
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
          {job.company} - {job.location}
        </h1>
        <styled.h3
          textAlign="right"
        >
          {job.start} - {job.end}
        </styled.h3>
      </HStack>
      <styled.p fontWeight="bold">
        {job.title}
      </styled.p>
      <p>
        {job.description}
      </p>
      {job.reasonForLeaving && (
        <styled.em
          fontSize="16px"
          fontWeight="300"
        >
          Reason for leaving: {job.reasonForLeaving}
        </styled.em>
      )}
      {(job.technologiesUsed?.length ?? 0) > 0 && (
        <styled.p fontSize="16px">
          <strong >Tech used:{' '}
          </strong>
          {job?.technologiesUsed?.map((tech, i) => (
            <span
              key={i}
            >
              {tech} {(job?.technologiesUsed?.length ?? 0) - 1 === i ? '' : '| '}
            </span>
          ))}
        </styled.p>
      )}
    </Box>
  );
};