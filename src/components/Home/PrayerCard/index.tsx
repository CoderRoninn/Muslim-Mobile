import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

const PRAYER_TIME = '19:29';

const PrayerCard = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.leftGroup}>
          <View style={styles.nowBadge}>
            <View style={styles.nowDot} />
            <Text style={styles.nowText}>{t('home.prayerCard.now')}</Text>
          </View>
          <Text style={styles.prayerName}>{t('home.prayerCard.prayerName')}</Text>
          <AntDesign name="moon" size={SIZES.icon.small} color={COLORS.gold} />
        </View>
        <View style={styles.rightGroup}>
          <Text style={styles.location}>{t('home.prayerCard.district')}</Text>
          <Text style={styles.location}>{t('home.prayerCard.country')}</Text>
        </View>
      </View>
      <Text style={styles.time}>{PRAYER_TIME}</Text>
      <Text style={styles.remaining}>{t('home.prayerCard.remaining')}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{t('home.prayerCard.viewAll')}</Text>
        <FontAwesome6 name="arrow-right" size={SIZES.icon.extraSmall} color={COLORS.gold} />
      </View>
    </View>
  );
};

export default PrayerCard;
