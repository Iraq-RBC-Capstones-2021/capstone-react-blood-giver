import { useRouter } from "next/router";

const defaultLocale = process.env.DEFAULT_LOCALE || "en";

export default function useLocaleSwitch() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  // change just the locale and maintain all other route information including href's query
  const switchLocale = (nextLocale = defaultLocale) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };
  return { switchLocale, currentLocale: locale };
}
