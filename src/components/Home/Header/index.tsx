import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, Text, View } from 'react-native';
import { ANIMATION, SIZES } from '../../../const/theme';
import styles from './styles';

const USER_NAME = 'Doğukan Süme';

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

  const [showName, setShowName] = useState(true);

  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      fadeTo(opacity, 0, () => {
        setShowName((previous) => !previous);
        fadeTo(opacity, 1);
      });
    }, ANIMATION.subtitleHold + ANIMATION.fadeDuration * 2);

    return () => {
      clearInterval(interval);
      opacity.stopAnimation();
    };
  }, [opacity]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <FontAwesome6 
          name="user" 
          size={SIZES.icon.medium} 
          color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t('home.header.title')}</Text>
        <Animated.Text style={[styles.subtitle, { opacity }]}>
          {showName ? USER_NAME : t('home.header.subtitle')}
        </Animated.Text>
      </View>
      <View style={styles.notificationButton}>
        <MaterialCommunityIcons
          name="bell"
          size={SIZES.icon.medium}
          color="white"
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText} allowFontScaling={false}>
            2
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
