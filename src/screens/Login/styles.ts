import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../const/theme';
import { scale } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.medium,
    paddingHorizontal: SPACING.extraLarge,
    backgroundColor: COLORS.background,
  },
  logoContainer: {
    width: scale(200),
    height: scale(200),
    marginTop: scale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  titleGroup: {
    alignItems: 'center',
    gap: SPACING.extraSmall,
  },
  title: {
    ...TYPOGRAPHY.time,
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
  phoneField: {
    width: '100%',
    height: scale(48),
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.medium,
    paddingHorizontal: SPACING.large,
    borderRadius: SIZES.radius.large,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
  },
  countryCode: {
    ...TYPOGRAPHY.title,
    fontWeight: '400',
    color: COLORS.text,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 0,
    ...TYPOGRAPHY.title,
    fontWeight: '400',
    color: COLORS.text,
  },
  continueButton: {
    width: '100%',
    height: scale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius.large,
    backgroundColor: COLORS.gold,
  },
  continueText: {
    ...TYPOGRAPHY.title,
    color: COLORS.background,
  },
  continueArrow: {
    position: 'absolute',
    right: SPACING.large,
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.medium,
  },
  orLine: {
    width: scale(90),
    height: 1,
    backgroundColor: COLORS.goldTranslucentBorder,
  },
  orText: {
    ...TYPOGRAPHY.subtitle,
    color: COLORS.textMuted,
  },
  socialRow: {
    flexDirection: 'row',
    gap: SPACING.large,
  },
  socialButton: {
    width: SIZES.circle.large,
    height: SIZES.circle.large,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.circle.large / 2,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
  },
  socialIcon: {
    width: SIZES.icon.medium,
    height: SIZES.icon.medium,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
  },
  line: {
    width: scale(60),
    height: 1,
    backgroundColor: COLORS.gold,
  },
});

export default styles;
