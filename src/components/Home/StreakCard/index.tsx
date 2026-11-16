import AntDesign from '@expo/vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Svg, { Circle, Image as SvgImage } from 'react-native-svg';
import { COLORS, SIZES, SPACING } from '../../../const/theme';
import { scale } from '../../../utils/responsive';
import styles from './styles';

// Dummy daily goals, will come from real data later
const GOALS = [
  { id: 'prayer', titleKey: 'home.streakCard.goals.prayer', done: true },
  { id: 'quran', titleKey: 'home.streakCard.goals.quran', done: true },
  { id: 'dhikr', titleKey: 'home.streakCard.goals.dhikr', done: true },
  { id: 'dua', titleKey: 'home.streakCard.goals.dua', done: false },
];

// Sizes used only for the ring
const RING_SIZE = scale(96);
const IMAGE_SIZE = scale(64);
const RING_STROKE = SPACING.small;
// Empty space between two segments
const SEGMENT_GAP = SPACING.extraSmall;
// Circle center and radius, the radius is measured to the middle of the stroke
const RING_CENTER = RING_SIZE / 2;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
// Length of the whole circle line
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const StreakCard = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  // Number of goals completed today
  const completedCount = GOALS.filter((goal) => goal.done).length;

  // Each goal gets an equal part of the circle
  const segmentLength = RING_CIRCUMFERENCE / GOALS.length;
  // Visible line length of a segment, round caps add half of the stroke on each end
  const dashLength = segmentLength - RING_STROKE - SEGMENT_GAP;

  // A segment turns gold when that many goals are done
  const getSegmentColor = (index: number) =>
    completedCount > index ? COLORS.gold : COLORS.translucentBorder;

  return (
    // Card container
    <View style={styles.container}>
      {/* Middle row: progress on the left, goals on the right */}
      <View style={styles.middleRow}>
        {/* Progress: ring with image and completed count */}
        <View style={styles.progress}>
          {/* Ring drawing */}
          <Svg width={RING_SIZE} height={RING_SIZE}>
            {/* One segment per goal */}
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
                // Draws only the visible line of the segment, the rest is empty
                strokeDasharray={`${dashLength} ${RING_CIRCUMFERENCE - dashLength}`}
                // Moves the line to its own place on the circle
                strokeDashoffset={-(
                  index * segmentLength +
                  (RING_STROKE + SEGMENT_GAP) / 2
                )}
                // A circle starts at 3 o'clock, rotated so it starts at the top
                rotation={-90}
                origin={`${RING_CENTER}, ${RING_CENTER}`}
              />
            ))}
            {/* Daily streak image in the middle of the ring */}
            <SvgImage
              href={require('../../../../assets/images/dailyStreak.webp')}
              x={(RING_SIZE - IMAGE_SIZE) / 2}
              y={(RING_SIZE - IMAGE_SIZE) / 2}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              preserveAspectRatio="xMidYMid meet"
            />
          </Svg>
          {/* Completed count out of all goals */}
          <Text style={styles.count}>
            {`${completedCount} / ${GOALS.length}`}
          </Text>
        </View>

        {/* Goals: title and list */}
        <View style={styles.goals}>
          {/* Goals title */}
          <Text style={styles.goalsTitle}>
            {t('home.streakCard.goalsTitle')}
          </Text>

          {/* Goal list */}
          <View style={styles.goalList}>
            {GOALS.map((goal) => (
              // Goal row
              <View key={goal.id} style={styles.goalRow}>
                {/* Checkbox, filled gold with a check icon when done */}
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
                {/* Goal text */}
                <Text style={styles.goalText}>{t(goal.titleKey)}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* View streak text */}
      <Text style={styles.viewStreak}>{t('home.streakCard.viewStreak')}</Text>
    </View>
  );
};

export default StreakCard;
