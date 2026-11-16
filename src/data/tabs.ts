import { SCREENS } from '../const/screens';

// Bottom bar tabs: screen name and translation key of each tab
export const TABS = [
  { id: SCREENS.HOME, titleKey: 'tabs.home' },
  { id: SCREENS.PRAYER, titleKey: 'tabs.prayer' },
  { id: SCREENS.QURAN, titleKey: 'tabs.quran' },
  { id: SCREENS.DISCOVER, titleKey: 'tabs.discover' },
  { id: SCREENS.PROFILE, titleKey: 'tabs.profile' },
] as const;
