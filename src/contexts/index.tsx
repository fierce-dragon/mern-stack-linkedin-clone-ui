import React from 'react';
import { I18nProvider } from './I18n';

interface IProps {
  children: JSX.Element;
}

export const AppProvider: React.FC<IProps> = ({ children }) => {
  return <I18nProvider>{children}</I18nProvider>;
};

export default AppProvider;
