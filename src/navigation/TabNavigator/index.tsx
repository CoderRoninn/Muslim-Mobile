import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREENS } from '../../const/screens';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../const/theme';
import Discover from '../../screens/Discover';
import Home from '../../screens/Home';
import Prayer from '../../screens/Prayer';
import Profile from '../../screens/Profile';
import Quran from '../../screens/Quran';
import { TabParamList } from '../types';

// Tab navigator that knows the screen names from the param list
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const { t } = useTranslation();

  // Gets the safe area size of the device
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        // Screens draw their own header
        headerShown: false,
        // Same background as the app so no white flash shows between screens
        sceneStyle: { backgroundColor: COLORS.background },
        // Gold for the open tab and muted for the others
        tabBarActiveTintColor: COLORS.gold,
        tabBarInactiveTintColor: COLORS.textMuted,
        // Bar colors height side spacing and rounded top corners
        tabBarStyle: {
          // Bar height plus the bottom safe area so the content stays above it
          height: SIZES.tabBar.height + insets.bottom,
          backgroundColor: COLORS.tabBarBackground,
          borderTopColor: COLORS.translucentBorder,
          paddingHorizontal: SPACING.small,
          borderTopLeftRadius: SIZES.radius.large,
          borderTopRightRadius: SIZES.radius.large,
        },
        // Text style of the tab names
        tabBarLabelStyle: TYPOGRAPHY.label,
        // Space between the tab icon and the tab name
        tabBarIconStyle: { marginBottom: SPACING.extraSmall },
        // Plain Pressable removes the Android ripple effect of the default tab button
        tabBarButton: (props) => (
          <Pressable
            onPress={props.onPress}
            style={[props.style, { paddingTop: SPACING.extraSmall }]}
          >
            {props.children}
          </Pressable>
        ),
      }}
    >
      {/* Home tab with the house icon */}
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarLabel: t('tabs.home'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={SIZES.icon.small} color={color} />
          ),
        }}
      />
      {/* Prayer tab with the praying person icon */}
      <Tab.Screen
        name={SCREENS.PRAYER}
        component={Prayer}
        options={{
          tabBarLabel: t('tabs.prayer'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="person-praying"
              size={SIZES.icon.small}
              color={color}
            />
          ),
        }}
      />
      {/* Quran tab with the open book icon */}
      <Tab.Screen
        name={SCREENS.QURAN}
        component={Quran}
        options={{
          tabBarLabel: t('tabs.quran'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={SIZES.icon.small}
              color={color}
            />
          ),
        }}
      />
      {/* Discover tab with the compass icon */}
      <Tab.Screen
        name={SCREENS.DISCOVER}
        component={Discover}
        options={{
          tabBarLabel: t('tabs.discover'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="compass"
              size={SIZES.icon.small}
              color={color}
            />
          ),
        }}
      />
      {/* Profile tab with the user icon */}
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: t('tabs.profile'),
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user" size={SIZES.icon.small} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
