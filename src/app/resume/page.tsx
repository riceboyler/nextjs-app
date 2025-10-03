import Link from 'next/link';
import React from 'react';
import { Stack, Grid, HStack, Flex } from 'styled-system/jsx';
import ContentBox from 'components/ContentBox';
import * as resumeData from 'data/resumeData';
import { Heading, Text } from 'components/Typography';
import { IoLogoBitbucket, IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMail, IoPhonePortrait } from 'react-icons/io5';
import { BackToTopButton, EducationBlock, ExperienceBlock, ScrollToLink, SocialLink } from './components';

const Resume = () => {
  const { userDetails, interestText, experience, freelance, education } = resumeData;

  return (
    <Stack gap={8}>
      <Heading
        fontSize="3xl"
        id="heading"
      >
        Resume/Curriculum Vitae
      </Heading>
      <ContentBox textAlign="center">
        <ScrollToLink target="fulltime">Full-Time Experience</ScrollToLink> |{' '}
        <ScrollToLink target="freelance">Freelance Experience</ScrollToLink> |{' '}
        <ScrollToLink target="education">Education</ScrollToLink>
      </ContentBox>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 3fr" }}
        gap={8}
      >
        <ContentBox
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Heading fontSize="2xl">
            Contact Info
          </Heading>
          <Text fontSize="xl">
            <address>
              {userDetails.fname} {userDetails.lname}<br />
              {userDetails.address}<br />
              {userDetails.city}, {userDetails.state} {userDetails.zip}<br />
              <HStack gap={4}>
                <IoPhonePortrait /> <Text><Link href={`tel:${userDetails.phone}`}>{userDetails.phone}</Link></Text>
              </HStack>
              <HStack gap={4}>
                <IoMail />
                <Link href={`mailto:${userDetails.email}?Subject=Resume`}>
                  {userDetails.email}
                </Link>
              </HStack>
            </address>
          </Text>
          <HStack gap={1}>
            <SocialLink
              href={`https://github.com/${userDetails.github}`}
              Icon={IoLogoGithub}
            />
            <SocialLink
              href={`https://bitbucket.org/${userDetails.bitbucket}`}
              Icon={IoLogoBitbucket}
            />
            <SocialLink
              href={`https://linkedin.com/in/${userDetails.linkedin}`}
              Icon={IoLogoLinkedin}
            />
            <SocialLink
              href={`https://facebook.com/${userDetails.facebook}`}
              Icon={IoLogoFacebook}
            />
            <SocialLink
              href={`https://twitter.com/${userDetails.twitter}`}
              Icon={IoLogoTwitter}
            />
          </HStack>
        </ContentBox>

        <ContentBox
          backgroundColor="slate.900"
        >
          <Heading fontSize="2xl">
            Introduction
          </Heading>
          <Text fontSize={{ base: 'large', md: 'xl' }}>
            {interestText}
          </Text>
        </ContentBox>
      </Grid>
      <ContentBox id="fulltime">
        <Flex justifyContent="space-between">
          <Heading fontSize="3xl">
            Full-Time Experience
          </Heading>
          <BackToTopButton />
        </Flex>
        {experience.map((job, i) => (
          <ExperienceBlock
            job={job}
            key={i}
          />
        ))}
      </ContentBox>
      <ContentBox id="freelance">
        <Flex justifyContent="space-between">
          <Heading fontSize="3xl">
            Freelance Experience
          </Heading>
          <BackToTopButton />
        </Flex>
        {freelance.map((job, i) => (
          <ExperienceBlock
            job={job}
            key={i}
          />
        ))}
      </ContentBox>
      <ContentBox id="education">
        <Flex justifyContent="space-between">
          <Heading fontSize="3xl">
            Education
          </Heading>
          <BackToTopButton />
        </Flex>
        {education.map((school, i) => (
          <EducationBlock
            school={school}
            key={i}
          />
        ))}
      </ContentBox>
    </Stack >
  );
};

export default Resume;