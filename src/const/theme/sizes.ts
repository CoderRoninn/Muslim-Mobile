import { scale } from '../../utils/responsive';

// Component sizes scaled to the screen width
export const SIZES = {
  icon: {
    extraSmall: scale(16),
    small: scale(20),
    medium: scale(24),
    large: scale(48),
  },
  circle: {
    extraSmall: scale(8),
    small: scale(16),
    medium: scale(36),
    large: scale(48),
  },
  card: {
    width: scale(90),
    height: scale(80),
  },
  radius: {
    extraSmall: scale(6),
    small: scale(8),
    large: scale(20),
  },
} as const;
