import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import styles from './styles';

const Discover = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    // Empty screen for now, only shows its name
    <View style={styles.container}>
      {/* Screen name */}
      <Text style={styles.title}>{t('tabs.discover')}</Text>
    </View>
  );
};

export default Discover;
