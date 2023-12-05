import React from 'react';
import { NavLink } from './Navbar/NavLink';
import Link from 'next/link';
import { css } from '../../styled-system/css';
import { HStack } from '../../styled-system/jsx';
import Image from 'next/image';

export const Navbar = () => {
  const isMobile = false;
  const NavLinks = () => (
    <>
      <NavLink href="/resume">Resume/CV</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/carHistory">Car History</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </>
  );

  return (
    <HStack
      maxW={1280}
      mx="auto"
      justify="space-between"
      alignItems="center"
      p={4}
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
    </HStack >
  );
};