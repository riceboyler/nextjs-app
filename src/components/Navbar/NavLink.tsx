import Link from 'next/link';
import React from 'react';
import { css } from 'styled-system/css';

type Props = {
  href: string;
  children: React.ReactNode;
};

const navStyles = css({
  fontFamily: 'zen',
  fontSize: ['sm', 'xl'],
  fontWeight: 700,
  textTransform: 'uppercase',
  cursor: 'pointer',
  _hover: {
    color: 'green.500'
  },
  marginBottom: 0,
});

export const NavLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className={css({
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          color: 'green.500'
        }
      })}
    >
      <h3 className={navStyles}>{children}</h3>
    </Link>
  );
};