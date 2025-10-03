import React from 'react';
import { Stack, styled } from '../../styled-system/jsx';
import ContentBox from '../components/ContentBox';
import Link from 'next/link';
import Aside from '../components/Aside';
import { PageHeader } from '../components/Typography/PageHeader';

export default function Home() {
  return (
    <Stack gap={4}>
      <ContentBox backgroundColor="gray.700">
        <PageHeader
          fontWeight="300"
          fontSize="4xl"
        >
          Welcome to riceboyler.com!
        </PageHeader>
        <styled.p
          fontSize="xl"
          my={4}
        >
          You've reached the online home of Jason Clark (aka <Link href="/riceboyler">riceboyler</Link>) and my personal web site. I wear many different hats and have a few different titles:
          <styled.ul gap={4}>
            <li>Son (to two sets of parents)</li>
            <li>Husband (to one, only one (Zoni))</li>
            <li>Father (to three (Owen, Zander, Lauralynn))</li>
            <li>Front-End Web Lead (for{' '}
              <Link
                href="https://chatbooks.com"
              >
                Chatbooks
              </Link>
              )
            </li>
            <li>
              Occasional <Link href="https://github.com/riceboyler"> Open Source Contributor</Link>
            </li>
            <li>
              Boost Junkie (because I love turbocharged cars)
            </li>
            <li>
              Boomer. Yeah. Kids...
            </li>
          </styled.ul>
        </styled.p>
      </ContentBox>
      <ContentBox>
        <h3 >
          Plans for this site
        </h3>
        <styled.p fontSize="xl">
          Like most full-time employed web developers, my personal site always seems to come last. It was the same when I was a car audio installer, my car was always the worst looking install (though I did make it sound good!).
        </styled.p>
        <styled.p fontSize="xl">
          Initially, I'll work on the responsive side of things, as I know this isn't mobile friendly yet. Then, I'll probably only get the Resume/CV page built, because I plan to use this as a bit of a portfolio in and of itself. Eventually, I'll add a blog, a portfolio, a contact page, my car history, and the pretty crazy story of my finding my biological family.
        </styled.p>
      </ContentBox>
      <ContentBox>
        <h3>
          How It's Made &copy;
        </h3>
        <styled.p fontSize="xl">
          I used a bunch of modern technology (as of late 2021, updating in late 2023) to build this site. Here goes:
          <styled.ul gap={4}>
            <li>
              <Link href="https://nextjs.org">Next.js</Link> - a <Link href="https://reactjs.org">React</Link> based application platform that is absolutely KILLER for building websites and apps.
            </li>
            <li>
              <Link href="https://typescriptlang.org">TypeScript</Link> - I used to hate it. Now I don't know how to ever go back to plain JavaScript again!
            </li>
            <li>
              <Link href="https://panda-css.com">Panda CSS</Link> - From the creators of Chakra UI (see below), this is a utility-first CSS framework that is super easy to use and has a lot of great features. And as a huge benefit since I love Chakra, it uses a very similar syntax, but it all done via PostCSS, so it doesn't require a JS runtime. Pretty
            </li>
            <li>
              <styled.span textDecoration="line-through">
                <Link href="https://chakra-ui.com">Chakra UI</Link> - a library for building UI components with a focus on accessibility and performance.
              </styled.span>
              <Aside title="Some thoughts about UI Libraries">
                I've been going through <Link href="https://css-for-js.dev">Josh W. Comeau's absolutely phenomenal CSS for JS Devs course</Link> and while I love it, I kinda disagree that you shouldn't use a base UI component library. I understand his points about not using something like MUI or Bootstrap, but Chakra-UI is so unopinionated (and it makes it SO easy to implement CSS as props) that I'm gonna argue with him. Either way, huge props (see what I did there?) to Josh for an outstanding course!
              </Aside>
            </li>
            <li>
              <Link href="https://vercel.com">Vercel</Link> - I figure if they're good enough to create Next.js, they're good enough to be the main host for Next.js apps.
            </li>
          </styled.ul>
        </styled.p>
      </ContentBox>
    </Stack>
  );
}