import AntDesign from '@expo/vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Svg, { Circle, Image as SvgImage } from 'react-native-svg';
import { COLORS, SIZES, SPACING } from '../../../const/theme';
import { scale } from '../../../utils/responsive';
import styles from './styles';

// Dummy daily goals until the real data comes from the backend
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

  // Number of goals that are done
  const completedCount = GOALS.filter((goal) => goal.done).length;
  // Share of the ring that belongs to each goal
  const segmentLength = RING_CIRCUMFERENCE / GOALS.length;
  // Visible part of a segment after removing the stroke and the gap
  const dashLength = segmentLength - RING_STROKE - SEGMENT_GAP;
  // Gold for the completed segments and a soft border color for the rest
  const getSegmentColor = (index: number) =>
    completedCount > index ? COLORS.gold : COLORS.translucentBorder;

  return (
    <View style={styles.container}>
      {/* Ring and goal list side by side */}
      <View style={styles.middleRow}>
        {/* Ring with the streak image and the count */}
        <View style={styles.progress}>
          <Svg width={RING_SIZE} height={RING_SIZE}>
            {/* One ring segment for each goal */}
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
            {/* Streak image in the center of the ring */}
            <SvgImage
              href={require('../../../../assets/images/dailyStreak.webp')}
              x={(RING_SIZE - IMAGE_SIZE) / 2}
              y={(RING_SIZE - IMAGE_SIZE) / 2}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              preserveAspectRatio="xMidYMid meet"
            />
          </Svg>
          {/* Completed goals out of all goals */}
          <Text style={styles.count}>
            {`${completedCount} / ${GOALS.length}`}
          </Text>
        </View>

        {/* Goals title and goal list */}
        <View style={styles.goals}>
          {/* Goals title */}
          <Text style={styles.goalsTitle}>
            {t('home.streakCard.goalsTitle')}
          </Text>

          {/* One row for each goal */}
          <View style={styles.goalList}>
            {GOALS.map((goal) => (
              <View key={goal.id} style={styles.goalRow}>
                {/* Checkbox of the goal */}
                <View
                  style={[styles.checkbox, goal.done && styles.checkboxDone]}
                >
                  {/* Check icon shows only when the goal is done */}
                  {goal.done && (
                    <AntDesign
                      name="check"
                      size={SIZES.icon.extraSmall}
                      color={COLORS.background}
                    />
                  )}
                </View>
                {/* Goal name */}
                <Text style={styles.goalText}>{t(goal.titleKey)}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Link to see the full streak */}
      <Text style={styles.viewStreak}>{t('home.streakCard.viewStreak')}</Text>
    </View>
  );
};

export default StreakCard;
