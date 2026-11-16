import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import PrayerCard from '../../components/Home/PrayerCard';
import QuickAccessCard from '../../components/Home/QuickAccessCard';
import StreakCard from '../../components/Home/StreakCard';
import VerseCard from '../../components/Home/VerseCard';
import { SPACING } from '../../const/theme';
import { QUICK_ACCESS_ITEMS } from '../../data/quickAccess';
import styles from './styles';

const Home = () => {
  // Gets the safe area size of the device
  const insets = useSafeAreaInsets();

  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    // Whole screen scrolls vertically
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + SPACING.large,
          paddingBottom: insets.bottom + SPACING.large,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <PrayerCard />
      {/* Quick access section: title and list */}
      <View style={styles.section}>
        {/* Section title */}
        <Text style={styles.sectionTitle}>
          {t('home.sections.quickAccess')}
        </Text>

        {/* Horizontal quick access list, extends to the screen edges */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickAccessList}
          contentContainerStyle={styles.quickAccessContent}
        >
          {/* Cards are created from the data file */}
          {QUICK_ACCESS_ITEMS.map((item) => (
            <QuickAccessCard
              key={item.id}
              image={item.image}
              title={t(item.titleKey)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Daily worship streak section: title and card */}
      <View style={styles.section}>
        {/* Section title */}
        <Text style={styles.sectionTitle}>
          {t('home.sections.dailyStreak')}
        </Text>

        {/* Daily worship streak card */}
        <StreakCard />
      </View>

      {/* Daily verse section: title and card */}
      <View style={styles.section}>
        {/* Section title */}
        <Text style={styles.sectionTitle}>{t('home.sections.dailyVerse')}</Text>

        {/* Daily verse card */}
        <VerseCard />
      </View>
    </ScrollView>
  );
};

export default Home;
