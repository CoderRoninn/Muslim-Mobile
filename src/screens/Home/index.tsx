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
  const insets = useSafeAreaInsets();

  const { t } = useTranslation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + SPACING.large,
          paddingBottom: SPACING.large,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <PrayerCard />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {t('home.sections.quickAccess')}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickAccessList}
          contentContainerStyle={styles.quickAccessContent}
        >
          {QUICK_ACCESS_ITEMS.map((item) => (
            <QuickAccessCard
              key={item.id}
              image={item.image}
              title={t(item.titleKey)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {t('home.sections.dailyStreak')}
        </Text>

        <StreakCard />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('home.sections.dailyVerse')}</Text>

        <VerseCard />
      </View>
    </ScrollView>
  );
};

export default Home;
