export const BREAKPOINTS = {
  xs: 320,
  sm: 768,
  lg: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
