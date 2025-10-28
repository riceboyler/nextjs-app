import { IconButton } from '@/components/IconButton';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  href: string;
  Icon: IconType;
};

export const SocialLink = ({ href, Icon }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        aria-label="Github"
        icon={<Icon />}
      />
    </Link>
  );
};