import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';

// Sets up i18n with the Turkish and English translations
i18n.use(initReactI18next).init({
  // Translation file of each language
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  // Starts with the device language and uses Turkish if it is not found
  lng: Localization.getLocales()[0]?.languageCode ?? 'tr',
  // Language used when a text is missing in the current language
  fallbackLng: 'tr',
  // React already escapes the values so extra escaping is turned off
  interpolation: { escapeValue: false },
});

export default i18n;
