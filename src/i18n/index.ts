import { defaultLocale, type Locale } from './config';
import { en } from './en';
import { es } from './es';
import type { Translation } from './types';

const translations: Record<Locale, Translation> = {
  en,
  es,
};

export function getTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations[defaultLocale];
}
