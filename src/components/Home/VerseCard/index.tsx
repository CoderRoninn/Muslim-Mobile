import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../../const/theme';
import styles from './styles';

const VERSE_ARABIC =
  'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ';

const VerseCard = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.sourceBadge}>
          <Text style={styles.sourceText}>{t('home.duaCard.source')}</Text>
        </View>
        <FontAwesome6
          name="share-nodes"
          size={SIZES.icon.extraSmall}
          color={COLORS.text}
        />
      </View>
      <Text style={styles.arabic}>{VERSE_ARABIC}</Text>
      <Text style={styles.meaning}>{t('home.duaCard.meaning')}</Text>
    </View>
  );
};

export default VerseCard;
