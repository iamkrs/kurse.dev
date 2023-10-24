'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from './redux';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
};
