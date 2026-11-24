import { SCREENS } from '../const/screens';

// Tabs of the bottom bar, none of them needs params for now
export type TabParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRAYER]: undefined;
  [SCREENS.QURAN]: undefined;
  [SCREENS.DISCOVER]: undefined;
  [SCREENS.PROFILE]: undefined;
};
