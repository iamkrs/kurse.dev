'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { LenisProvider } from './lenis';
import { reduxStore } from './redux';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={reduxStore}>
      <LenisProvider>{children}</LenisProvider>
    </ReduxProvider>
  );
};
