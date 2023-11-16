import { ReduxState } from 'lib/redux';

export const selectApp = (state: ReduxState) => {
  return state.app;
};
export const selectPreventScroll = (state: ReduxState) => {
  return state.app.preventScroll;
};
export const selectShowLanguageSwitcher = (state: ReduxState) => {
  return state.app.showLanguageSwitcher;
};
