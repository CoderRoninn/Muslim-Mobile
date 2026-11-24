import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy prayer time until the real data comes from the backend
const PRAYER_TIME = '19:29';

const PrayerCard = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Top row with the prayer info and the location */}
      <View style={styles.topRow}>
        {/* Current prayer badge name and icon */}
        <View style={styles.leftGroup}>
          {/* Badge that shows the prayer time has started */}
          <View style={styles.nowBadge}>
            {/* Small dot inside the badge */}
            <View style={styles.nowDot} />
            {/* Badge text */}
            <Text style={styles.nowText}>{t('home.prayerCard.now')}</Text>
          </View>
          {/* Name of the current prayer */}
          <Text style={styles.prayerName}>{t('home.prayerCard.prayerName')}</Text>
          {/* Moon icon */}
          <AntDesign name="moon" size={SIZES.icon.small} color={COLORS.gold} />
        </View>
        {/* District and country of the user */}
        <View style={styles.rightGroup}>
          <Text style={styles.location}>{t('home.prayerCard.district')}</Text>
          <Text style={styles.location}>{t('home.prayerCard.country')}</Text>
        </View>
      </View>
      {/* Time of the current prayer */}
      <Text style={styles.time}>{PRAYER_TIME}</Text>
      {/* Remaining time until the next prayer */}
      <Text style={styles.remaining}>{t('home.prayerCard.remaining')}</Text>
      {/* Footer with a link to all prayer times */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{t('home.prayerCard.viewAll')}</Text>
        {/* Arrow icon */}
        <FontAwesome6 name="arrow-right" size={SIZES.icon.extraSmall} color={COLORS.gold} />
      </View>
    </View>
  );
};

export default PrayerCard;
