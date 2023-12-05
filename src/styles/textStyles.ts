import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: 'var(--font-zilla-slab)',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h1: {
    value: {
      fontFamily: 'var(--font-zen-kaku)',
      fontWeight: '700',
      fontSize: '6xl',
      lineHeight: 'auto',
      letterSpacing: '1px',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h2: {
    value: {
      fontFamily: 'var(--font-zen-kaku)',
      fontWeight: '700',
      fontSize: '5xl',
      lineHeight: 'auto',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h3: {
    value: {
      fontFamily: 'var(--font-zen-kaku)',
      fontWeight: '700',
      fontSize: '4xl',
      lineHeight: 'auto',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  h4: {
    value: {
      fontFamily: 'var(--font-zen-kaku)',
      fontWeight: '700',
      fontSize: '3xl',
      lineHeight: 'auto',
      letterSpacing: '1px',
      textDecoration: 'None',
      textTransform: 'None'
    }
  }
});