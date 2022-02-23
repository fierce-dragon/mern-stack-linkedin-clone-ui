import React, { createContext } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/de';
import '@formatjs/intl-relativetimeformat/dist/locale-data/es';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';
import '@formatjs/intl-relativetimeformat/dist/locale-data/ja';
import '@formatjs/intl-relativetimeformat/dist/locale-data/zh';
import deMessages from './messages/de.json';
import enMessages from './messages/en.json';
import esMessages from './messages/es.json';
import frMessages from './messages/fr.json';
import jaMessages from './messages/ja.json';
import zhMessages from './messages/zh.json';

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || 'i18nConfig';

interface II18Context {
  selectedLang: string;
}

const initialState: II18Context = {
  selectedLang: 'en',
};

const getConfig: () => II18Context = () => {
  const ls = localStorage.getItem(I18N_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (er) {
      console.error(er);
    }
  }
  return initialState;
};

// Side effect
export const setLanguage = (lang: string) => {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
  window.location.reload();
};

const I18nContext = createContext<II18Context>(initialState);

const useLang = () => {
  return useContext<II18Context>(I18nContext).selectedLang;
};

export const I18nConsumer = I18nContext.Consumer;

export const I18nProvider = ({ children }: { children: JSX.Element }) => {
  const lang = useMemo<II18Context>(getConfig, []);

  const locale = useLang();
  const allMessages = {
    de: deMessages,
    en: enMessages,
    es: esMessages,
    fr: frMessages,
    ja: jaMessages,
    zh: zhMessages,
  };
  const messages = allMessages[locale];

  return (
    <I18nContext.Provider value={lang}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
};
