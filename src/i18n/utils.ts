import { defaultLocale, locales, type Locale } from './config';

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const url = new URL(pathname, 'https://placeholder.local');
  const segments = url.pathname.split('/').filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  const localizedPath = segments.length === 1 ? `/${locale}/` : `/${segments.join('/')}`;
  return `${localizedPath}${url.search}${url.hash}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const maybeLocale = pathname.split('/').filter(Boolean)[0];
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}
