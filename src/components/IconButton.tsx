import React from 'react';
import { styled } from 'styled-system/jsx';
import { JsxStyleProps } from 'styled-system/types';

type Props = {
  size?: string;
  icon?: React.ReactElement;
  isRound?: boolean;
  ariaLabel?: string;
  bgColor?: JsxStyleProps['backgroundColor'];
  border?: JsxStyleProps['border'];
};

export const IconButton = ({ icon, isRound, ariaLabel, size, bgColor, border }: Props) => {
  return (
    <styled.button
      aria-label={ariaLabel}
      borderRadius={isRound ? "full" : undefined}
      width={size ?? '40px'}
      height={size ?? '40px'}
      padding="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={bgColor ?? "transparent"}
      border={border ?? "none"}
      cursor="pointer"
      outline="none"
    >
      {icon}
    </styled.button>
  );
};