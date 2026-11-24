import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../../const/theme';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    gap: SPACING.large,
    borderRadius: SIZES.radius.large,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
    backgroundColor: COLORS.translucentBackground,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sourceBadge: {
    paddingVertical: SPACING.extraSmall,
    paddingHorizontal: SPACING.small,
    borderRadius: SIZES.radius.small,
    borderWidth: 1,
    borderColor: COLORS.goldTranslucentBorder,
    backgroundColor: COLORS.goldTranslucentBackground,
  },
  sourceText: {
    ...TYPOGRAPHY.label,
    color: COLORS.gold,
  },
  arabic: {
    ...TYPOGRAPHY.verse,
    textAlign: 'center',
    // Arabic text is written from right to left
    writingDirection: 'rtl',
    color: COLORS.text,
  },
  meaning: {
    ...TYPOGRAPHY.subtitle,
    paddingTop: SPACING.medium,
    borderTopWidth: 1,
    borderTopColor: COLORS.translucentBorder,
    color: COLORS.textMuted,
  },
});

export default styles;
