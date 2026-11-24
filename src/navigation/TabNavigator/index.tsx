import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { SCREENS } from '../../const/screens';
import { COLORS, SIZES, SPACING, TYPOGRAPHY } from '../../const/theme';
import Discover from '../../screens/Discover';
import Home from '../../screens/Home';
import Prayer from '../../screens/Prayer';
import Profile from '../../screens/Profile';
import Quran from '../../screens/Quran';
import { TabParamList } from '../types';

// Tab navigator that knows the screen names from TabParamList
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  // t gets the text for the current language by its key
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: COLORS.background },
        tabBarActiveTintColor: COLORS.gold,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.tabBarBackground,
          borderTopColor: COLORS.translucentBorder,
          paddingHorizontal: SPACING.extraSmall,
          borderTopLeftRadius: SIZES.radius.large,
          borderTopRightRadius: SIZES.radius.large,
        },
        tabBarLabelStyle: TYPOGRAPHY.label,
        tabBarButton: (props) => (
          <Pressable onPress={props.onPress} style={props.style}>
            {props.children}
          </Pressable>
        ),
      }}
    >
      {/* Home tab */}
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
      {/* Prayer tab */}
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
      {/* Quran tab */}
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
      {/* Discover tab */}
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
      {/* Profile tab */}
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
