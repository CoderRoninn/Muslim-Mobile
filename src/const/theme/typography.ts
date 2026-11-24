import { moderateScale } from '../../utils/responsive';

// Text styles scaled to the screen size
export const TYPOGRAPHY = {
  title: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    fontWeight: '700',
  },
  subtitle: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    fontWeight: '400',
  },
  time: {
    fontSize: moderateScale(32),
    lineHeight: moderateScale(40),
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  label: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    fontWeight: '600',
  },
  verse: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(40),
    fontWeight: '400',
  },
  badge: {
    fontSize: moderateScale(8),
    lineHeight: moderateScale(10),
    fontWeight: '700',
  },
} as const;
