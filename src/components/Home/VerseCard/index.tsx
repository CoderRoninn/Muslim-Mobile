import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy verse in Arabic, will come from real data later
const VERSE_ARABIC =
  'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ';

const VerseCard = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    // Card container
    <View style={styles.container}>
      {/* Top row */}
      <View style={styles.topRow}>
        {/* Source badge */}
        <View style={styles.sourceBadge}>
          {/* Source text */}
          <Text style={styles.sourceText}>{t('home.duaCard.source')}</Text>
        </View>
        {/* Share icon */}
        <FontAwesome6
          name="share-nodes"
          size={SIZES.icon.extraSmall}
          color={COLORS.text}
        />
      </View>
      {/* Verse in Arabic */}
      <Text style={styles.arabic}>{VERSE_ARABIC}</Text>
      {/* Verse meaning with top divider */}
      <Text style={styles.meaning}>{t('home.duaCard.meaning')}</Text>
    </View>
  );
};

export default VerseCard;
