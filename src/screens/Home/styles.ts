import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../const/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // Side padding and the distance between the sections
  content: {
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.huge,
  },
  // Keeps the title and the content at the same distance
  section: {
    gap: SPACING.medium,
  },
  sectionTitle: {
    ...TYPOGRAPHY.title,
    color: COLORS.text,
  },
  // Cancels the screen side padding so cards can scroll to the edges
  quickAccessList: {
    marginHorizontal: -SPACING.extraLarge,
    flexGrow: 0,
  },
  // Brings the first card back to the screen side padding
  quickAccessContent: {
    paddingHorizontal: SPACING.extraLarge,
    gap: SPACING.medium,
  },
});

export default styles;
