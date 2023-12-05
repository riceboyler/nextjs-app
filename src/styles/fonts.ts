import { Zen_Kaku_Gothic_New, Zilla_Slab, Permanent_Marker } from 'next/font/google';

export const ZenKaku = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-zen-kaku'
});

export const ZillaSlab = Zilla_Slab({
  weight: ['300', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-zilla-slab'
});

export const PermanentMarker = Permanent_Marker({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-permanent-marker'
});