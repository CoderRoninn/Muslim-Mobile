import AntDesign from '@expo/vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Svg, { Circle, Image as SvgImage } from 'react-native-svg';
import { COLORS, SIZES, SPACING } from '../../../const/theme';
import { scale } from '../../../utils/responsive';
import styles from './styles';

const GOALS = [
  { id: 'prayer', titleKey: 'home.streakCard.goals.prayer', done: true },
  { id: 'quran', titleKey: 'home.streakCard.goals.quran', done: true },
  { id: 'dhikr', titleKey: 'home.streakCard.goals.dhikr', done: true },
  { id: 'dua', titleKey: 'home.streakCard.goals.dua', done: false },
];

const RING_SIZE = scale(96);
const IMAGE_SIZE = scale(64);
const RING_STROKE = SPACING.small;
const SEGMENT_GAP = SPACING.extraSmall;
const RING_CENTER = RING_SIZE / 2;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const StreakCard = () => {
  const { t } = useTranslation();

  const completedCount = GOALS.filter((goal) => goal.done).length;

  const segmentLength = RING_CIRCUMFERENCE / GOALS.length;
  const dashLength = segmentLength - RING_STROKE - SEGMENT_GAP;

  const getSegmentColor = (index: number) =>
    completedCount > index ? COLORS.gold : COLORS.translucentBorder;

  return (
    <View style={styles.container}>
      <View style={styles.middleRow}>
        <View style={styles.progress}>
          <Svg width={RING_SIZE} height={RING_SIZE}>
            {GOALS.map((goal, index) => (
              <Circle
                key={goal.id}
                cx={RING_CENTER}
                cy={RING_CENTER}
                r={RING_RADIUS}
                fill="none"
                stroke={getSegmentColor(index)}
                strokeWidth={RING_STROKE}
                strokeLinecap="round"
                strokeDasharray={`${dashLength} ${RING_CIRCUMFERENCE - dashLength}`}
                strokeDashoffset={-(
                  index * segmentLength +
                  (RING_STROKE + SEGMENT_GAP) / 2
                )}
                rotation={-90}
                origin={`${RING_CENTER}, ${RING_CENTER}`}
              />
            ))}
            <SvgImage
              href={require('../../../../assets/images/dailyStreak.webp')}
              x={(RING_SIZE - IMAGE_SIZE) / 2}
              y={(RING_SIZE - IMAGE_SIZE) / 2}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              preserveAspectRatio="xMidYMid meet"
            />
          </Svg>
          <Text style={styles.count}>
            {`${completedCount} / ${GOALS.length}`}
          </Text>
        </View>

        <View style={styles.goals}>
          <Text style={styles.goalsTitle}>
            {t('home.streakCard.goalsTitle')}
          </Text>

          <View style={styles.goalList}>
            {GOALS.map((goal) => (
              <View key={goal.id} style={styles.goalRow}>
                <View
                  style={[styles.checkbox, goal.done && styles.checkboxDone]}
                >
                  {goal.done && (
                    <AntDesign
                      name="check"
                      size={SIZES.icon.extraSmall}
                      color={COLORS.background}
                    />
                  )}
                </View>
                <Text style={styles.goalText}>{t(goal.titleKey)}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Text style={styles.viewStreak}>{t('home.streakCard.viewStreak')}</Text>
    </View>
  );
};

export default StreakCard;
