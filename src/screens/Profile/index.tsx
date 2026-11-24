import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import styles from './styles';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('tabs.profile')}</Text>
    </View>
  );
};

export default Profile;
