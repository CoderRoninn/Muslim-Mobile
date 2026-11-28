import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Image as ExpoImage } from 'expo-image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SIZES, SPACING } from '../../const/theme';
import styles from './styles';

// Normalizes Turkish phone numbers and formats them for display
const formatPhone = (value: string): string => {
  let digits = value.replace(/\D/g, '');

  if (digits.startsWith('0')) {
    digits = digits.slice(1);
  } else if (digits.length > 10 && digits.startsWith('90')) {
    digits = digits.slice(2);
  }

  digits = digits.slice(0, 10);

  return [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 8),
    digits.slice(8, 10),
  ]
    .filter(Boolean)
    .join(' ');
};

// Sends the Google token to our backend and gets our own token back
const loginWithGoogle = async (idToken: string) => {
  // 10.0.2.2 is the computer localhost when seen from the android emulator
  const response = await fetch('http://10.0.2.2:3000/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });

  // The backend said no so we stop here
  if (!response.ok) {
    throw new Error(`Login failed with status ${response.status}`);
  }

  // The backend answer has our token and the user info
  return response.json();
};

// Starts the Google login and prints every step
const handleGoogleLogin = async () => {
  console.log('Step 0 button pressed');

  try {
    // Shows if the client id was read from the env file without printing it
    const webClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;
    console.log('Step 1 web client id exists', Boolean(webClientId));

    // Tells Google which app is asking
    GoogleSignin.configure({ webClientId });
    console.log('Step 2 configure done');

    // Checks that Google Play services is ready on the phone
    await GoogleSignin.hasPlayServices();
    console.log('Step 3 play services ready');

    // Opens the Google account screen
    console.log('Step 4 opening the account screen');
    const response = await GoogleSignin.signIn();
    console.log('Step 5 signIn finished with type', response.type);

    // The user closed the account screen
    if (response.type === 'cancelled') {
      console.log('Step 6 user cancelled');
      return;
    }

    // Prints what came back without printing the token itself
    console.log('Step 6 login worked', {
      hasIdToken: Boolean(response.data.idToken),
      idTokenLength: response.data.idToken?.length,
      email: response.data.user.email,
      name: response.data.user.name,
    });

    // Without the Google token we have nothing to send to our backend
    if (!response.data.idToken) {
      console.log('Step 7 no idToken so nothing to send');
      return;
    }

    // Sends the Google token to our backend
    console.log('Step 7 sending idToken to the backend');
    const result = await loginWithGoogle(response.data.idToken);

    // Prints our answer without printing our token itself
    console.log('Step 8 backend answered', {
      user: result.user,
      tokenLength: result.token?.length,
    });
  } catch (error) {
    // Prints the whole error so we can see the code and the message
    console.log('Step X error', JSON.stringify(error, null, 2));
    console.log('Step X error raw', error);
  }
};

const Login = () => {
  const insets = useSafeAreaInsets();

  const { t } = useTranslation();

  // Phone number kept in the input already formatted
  const [phone, setPhone] = useState('');

  return (
    // Keeps content below the status bar and the notch
    <View
      style={[styles.container, { paddingTop: insets.top + SPACING.large }]}
    >
      {/* Logo of the app */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/loginLogo.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome title with a gold divider and a short subtitle */}
      <View style={styles.titleGroup}>
        <Text style={styles.title}>{t('login.welcome')}</Text>

        {/* Gold star between two thin lines */}
        <View style={styles.divider}>
          <View style={styles.line} />
          <MaterialCommunityIcons
            name="octagram-outline"
            size={SIZES.icon.extraSmall}
            color={COLORS.gold}
          />
          <View style={styles.line} />
        </View>

        <Text style={styles.subtitle}>{t('login.subtitle')}</Text>
      </View>

      {/* Phone number field with a fixed country code */}
      <View style={styles.phoneField}>
        <MaterialCommunityIcons
          name="phone-outline"
          size={SIZES.icon.small}
          color={COLORS.text}
        />
        <Text style={styles.countryCode}>+90</Text>
        <TextInput
          style={styles.phoneInput}
          value={phone}
          onChangeText={(text) => setPhone(formatPhone(text))}
          placeholder={t('login.phone')}
          placeholderTextColor={COLORS.textMuted}
          keyboardType="phone-pad"
        />
      </View>

      {/* Button that continues with the phone number */}
      <Pressable style={styles.continueButton}>
        <Text style={styles.continueText}>{t('login.continue')}</Text>
        <MaterialCommunityIcons
          name="arrow-right"
          size={SIZES.icon.small}
          color={COLORS.background}
          style={styles.continueArrow}
        />
      </Pressable>

      {/* Text between the phone login and the social logins */}
      <View style={styles.orDivider}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>{t('login.or')}</Text>
        <View style={styles.orLine} />
      </View>

      {/* Social login buttons for Google Apple and Facebook */}
      <View style={styles.socialRow}>
        {/* Google logo from the svg file */}
        <Pressable style={styles.socialButton} onPress={handleGoogleLogin}>
          <ExpoImage
            source={require('../../../assets/icons/googleIcon.svg')}
            style={styles.socialIcon}
            contentFit="contain"
          />
        </Pressable>

        {/* Apple logo */}
        <Pressable style={styles.socialButton}>
          <FontAwesome6
            name="apple"
            brand
            size={SIZES.icon.medium}
            color={COLORS.text}
          />
        </Pressable>

        {/* Facebook logo in its brand blue */}
        <Pressable style={styles.socialButton}>
          <FontAwesome6
            name="facebook"
            brand
            size={SIZES.icon.medium}
            color="#1877F2"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
