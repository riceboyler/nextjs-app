import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { textStyles } from "./src/styles/textStyles";
import pandaPreset from '@pandacss/preset-panda';

const globalCss = defineGlobalStyles({
  'body, p, ul, li': {
    fontFamily: 'zilla',
    fontSize: '18px',
    fontWeight: '400'
  },
  'a': {
    textDecoration: 'underline',
  },
  'a:hover': {
    color: 'orange.300'
  },
  'p': {
    marginBottom: '8px'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'zen',
    fontWeight: '700'
  },
  'em, i, [font-style=italic]': {
    fontFamily: 'permanent'
  },
  'ul': {
    listStyleType: 'disc',
    listStylePosition: 'inside'
  },
  'li': {
    marginBottom: '8px'
  }
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        fonts: {
          body: { value: 'Zilla Slab' },
          zilla: { value: 'var(--font-zilla-slab)' },
          zen: { value: 'var(--font-zen-kaku)' },
          permanent: { value: 'var(--font-permanent-marker)' }
        },
        colors: {
          background: { value: 'slate.900' }
        }
      }
    },
  },
  jsxFramework: "react",

  presets: [pandaPreset],

  // The output directory for your css system
  outdir: "styled-system",
  globalCss
});
