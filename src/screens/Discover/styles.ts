import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../const/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    ...TYPOGRAPHY.title,
    color: COLORS.text,
  },
});

export default styles;
