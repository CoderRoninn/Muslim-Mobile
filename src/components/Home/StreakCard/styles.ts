import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../../const/theme';
import { scale } from '../../../utils/responsive';

const CHECKBOX_SIZE = scale(20);

const styles = StyleSheet.create({
  container: {
    padding: SPACING.large,
    gap: SPACING.large,
    borderRadius: SIZES.radius.large,
    borderWidth: 1,
    borderColor: COLORS.translucentBorder,
    backgroundColor: COLORS.translucentBackground,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.large,
  },
  progress: {
    alignItems: 'center',
    gap: SPACING.small,
  },
  count: {
    ...TYPOGRAPHY.title,
    color: COLORS.gold,
  },
  goals: {
    flex: 1,
    gap: SPACING.medium,
    paddingLeft: SPACING.large,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.translucentBorder,
  },
  goalsTitle: {
    ...TYPOGRAPHY.label,
    color: COLORS.gold,
  },
  goalList: {
    gap: SPACING.medium,
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
  },
  checkbox: {
    width: CHECKBOX_SIZE,
    height: CHECKBOX_SIZE,
    borderRadius: SIZES.radius.extraSmall,
    borderWidth: 1,
    borderColor: COLORS.checkboxBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    borderColor: COLORS.gold,
    backgroundColor: COLORS.gold,
  },
  goalText: {
    ...TYPOGRAPHY.label,
    color: COLORS.text,
  },
  viewStreak: {
    ...TYPOGRAPHY.label,
    textAlign: 'center',
    color: COLORS.gold,
  },
});

export default styles;
