import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import English from "./compiled-locales/en.json";
import Arabic from "./compiled-locales/ar.json";
import { IntlProvider } from "react-intl";

const defaultLocale = process.env.DEFAULT_LOCAL || "en";

const LocalizationProvider = ({ children }) => {
  const { locale = defaultLocale } = useRouter();
  const ref = useRef();

  const messages = useMemo(() => {
    switch (locale) {
      case "ar":
        return Arabic;
      default:
        return English;
    }
  }, [locale]);

  useEffect(() => {
    switch (locale) {
      case "ar":
        ref.current.dir = "rtl";
        break;
      default:
        ref.current.dir = "ltr";
        break;
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div ref={ref}>{children}</div>
    </IntlProvider>
  );
};

export default LocalizationProvider;
