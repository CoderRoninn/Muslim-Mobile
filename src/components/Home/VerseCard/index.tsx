import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy Arabic verse text until the real data comes from the backend
const VERSE_ARABIC =
  'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ';

const VerseCard = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Top row with the source badge and the share icon */}
      <View style={styles.topRow}>
        {/* Source of the verse */}
        <View style={styles.sourceBadge}>
          <Text style={styles.sourceText}>{t('home.duaCard.source')}</Text>
        </View>
        {/* Share icon */}
        <FontAwesome6
          name="share-nodes"
          size={SIZES.icon.extraSmall}
          color={COLORS.text}
        />
      </View>
      {/* Arabic verse text */}
      <Text style={styles.arabic}>{VERSE_ARABIC}</Text>
      {/* Meaning of the verse */}
      <Text style={styles.meaning}>{t('home.duaCard.meaning')}</Text>
    </View>
  );
};

export default VerseCard;
