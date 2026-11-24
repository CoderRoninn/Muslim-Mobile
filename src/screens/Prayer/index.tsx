import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import styles from './styles';

const Prayer = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('tabs.prayer')}</Text>
    </View>
  );
};

export default Prayer;
