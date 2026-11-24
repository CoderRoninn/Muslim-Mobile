import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../const/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.huge,
  },
  section: {
    gap: SPACING.medium,
  },
  sectionTitle: {
    ...TYPOGRAPHY.title,
    color: COLORS.text,
  },
  quickAccessList: {
    marginHorizontal: -SPACING.extraLarge,
    flexGrow: 0,
  },
  quickAccessContent: {
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.medium,
  },
});

export default styles;
