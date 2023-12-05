import React from 'react';
import { css } from '../../styled-system/css';
import { Box } from '../../styled-system/jsx';

export const Footer = () => {
  return (
    <footer
      className={css({
        w: '100%',
        textAlign: 'center',
        marginTop: '16px',
        p: '8px',
        borderTop: '1px solid',
        borderColor: 'slate.100'
      })}
    >
      <Box fontSize="sm">
        Made with
        <span
          role="img"
          aria-label="Love"
        >
          &nbsp;💖
        </span> by riceboyler, &copy; and All Rights Reserved
      </Box>
    </footer >
  );
};