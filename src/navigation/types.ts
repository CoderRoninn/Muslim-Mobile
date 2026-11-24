import { SCREENS } from '../const/screens';

// Tabs of the bottom bar where undefined means the tab takes no params
export type TabParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRAYER]: undefined;
  [SCREENS.QURAN]: undefined;
  [SCREENS.DISCOVER]: undefined;
  [SCREENS.PROFILE]: undefined;
};
