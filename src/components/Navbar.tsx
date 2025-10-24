"use client";

import React from 'react';
import { NavLink } from './Navbar/NavLink';
import Link from 'next/link';
import { css } from 'styled-system/css';
import { Box, HStack } from 'styled-system/jsx';
import Image from 'next/image';
import { useIsMobile } from '../hooks/useIsMobile';

export const Navbar = () => {
  const isMobile = useIsMobile();
  const NavLinks = () => (
    <>
      <NavLink href="/resume">Resume/CV</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/carHistory">Car History</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </>
  );

  return (
    <>
      <HStack
        maxW='8xl'
        mx="auto"
        justify="space-between"
        alignItems="center"
        p={4}
        px="8"
      >
        <Link
          href="/"
          passHref
          className={css({
            textDecoration: 'none',
            color: 'inherit'
          })}
        >
          <HStack
            gap={2}
            cursor="pointer"
            alignItems="center"
          >
            <Image
              src="/bitmoji.png"
              width={50}
              height={50}
              alt="riceboyler Bitmoji"
              className={css({
                borderRadius: '50%'
              })}
            />
            <h1
              className={css({
                fontFamily: 'zen',
                fontSize: ['xl', '3xl'],
                fontWeight: 700,
                letterSpacing: 'tighter',
                color: 'blue.600',
              })}
            >
              riceboyler
            </h1>
          </HStack>
        </Link>
        {(!isMobile) && (
          <HStack gap={8}><NavLinks /></HStack>
        )}
      </HStack>
      {(isMobile) && (
        <Box
          maxW="90vw"
          mx="auto"
        >
          <HStack
            gap={2}
            justify="space-between"
            my={4}
          >
            <NavLinks />
          </HStack>
        </Box>
      )}
    </>
  );
};