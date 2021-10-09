import { useRouter } from "next/router";
import React, { useMemo } from "react";
import English from "./compiled-locales/en.json";
import Arabic from "./compiled-locales/ar.json";
import { IntlProvider } from "react-intl";

export const DEFAULT_LOCAL = "en";

const LocalizationProvider = ({ children }) => {
  const { locale = DEFAULT_LOCAL } = useRouter();
  const messages = useMemo(() => {
    switch (locale) {
      case "ar":
        return Arabic;
      default:
        return English;
    }
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
