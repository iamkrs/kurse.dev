'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from './redux';
import { ScrollProvider } from './scroll';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={reduxStore}>
      <ScrollProvider>{children}</ScrollProvider>
    </ReduxProvider>
  );
};
