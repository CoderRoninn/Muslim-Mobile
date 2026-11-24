import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Text, View } from 'react-native';
import { ANIMATION, SIZES } from '../../../const/theme';
import styles from './styles';

// Dummy user name until the real data comes from the backend
const USER_NAME = 'Doğukan Süme';

// Fades the opacity to the given value and runs the callback when the animation ends
const fadeTo = (
  opacity: Animated.Value,
  toValue: number,
  onEnd?: () => void
) => {
  Animated.timing(opacity, {
    toValue,
    duration: ANIMATION.fadeDuration,
    useNativeDriver: true,
  }).start(({ finished }) => {
    if (finished) onEnd?.();
  });
};

const Header = () => {
  const { t } = useTranslation();

  // Decides whether the user name or the subtitle text is visible
  const [showName, setShowName] = useState(true);

  // Opacity value used by the fade animation
  const opacity = useRef(new Animated.Value(1)).current;

  // Fades the text out then switches it and fades it back in on a timer
  useEffect(() => {
    const interval = setInterval(() => {
      fadeTo(opacity, 0, () => {
        setShowName((previous) => !previous);
        fadeTo(opacity, 1);
      });
    }, ANIMATION.subtitleHold + ANIMATION.fadeDuration * 2);

    // Stops the timer and the animation when the component is removed
    return () => {
      clearInterval(interval);
      opacity.stopAnimation();
    };
  }, [opacity]);

  return (
    // Avatar then texts then notification button in one row
    <View style={styles.container}>
      {/* Avatar circle */}
      <View style={styles.avatarContainer}>
        {/* User icon used as a placeholder avatar */}
        <FontAwesome6 
          name="user" 
          size={SIZES.icon.medium} 
          color="black" />
      </View>
      {/* Title and the changing subtitle */}
      <View style={styles.textContainer}>
        {/* Title text */}
        <Text style={styles.title}>{t('home.header.title')}</Text>
        {/* Subtitle that fades between the user name and the subtitle text */}
        <Animated.Text style={[styles.subtitle, { opacity }]}>
          {showName ? USER_NAME : t('home.header.subtitle')}
        </Animated.Text>
      </View>
      {/* Notification button with the unread count */}
      <View style={styles.notificationButton}>
        {/* Bell icon */}
        <MaterialCommunityIcons
          name="bell"
          size={SIZES.icon.medium}
          color="white"
        />
        {/* Badge with the unread count */}
        <View style={styles.badge}>
          {/* Dummy unread count until the real data comes from the backend */}
          <Text style={styles.badgeText} allowFontScaling={false}>
            2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
