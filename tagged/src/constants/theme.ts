// All the colours, fonts and spacing for the app live here.
// Change a value once and it updates everywhere.

export const Colors = {
  background: '#12002B', // deep violet
  backgroundDeep: '#08001A',
  surface: 'rgba(255, 255, 255, 0.07)', // "glass" fill
  surfaceStrong: 'rgba(255, 255, 255, 0.14)',
  border: 'rgba(255, 255, 255, 0.14)',
  text: '#FFFFFF',
  textMuted: 'rgba(255, 255, 255, 0.62)',
  pink: '#FF2E93',
  orange: '#FF7A1A',
  blue: '#3D7BFF',
  violet: '#8B3DFF',
} as const;

// Gradients are lists of colours, top-left to bottom-right.
export const Gradients = {
  hot: [Colors.pink, Colors.orange] as const,
  electric: [Colors.blue, Colors.violet, Colors.pink] as const,
  background: ['#2A0A5E', Colors.background, Colors.backgroundDeep] as const,
  cardShade: ['transparent', 'rgba(8, 0, 26, 0.92)'] as const,
};

// Font names come from the fonts we load in src/app/_layout.tsx.
export const Fonts = {
  display: 'Anton_400Regular', // big chunky magazine headlines
  body: 'Inter_400Regular',
  bodyBold: 'Inter_600SemiBold',
  heavy: 'Inter_800ExtraBold',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;
