import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import styles from './styles';

const Discover = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('tabs.discover')}</Text>
    </View>
  );
};

export default Discover;
