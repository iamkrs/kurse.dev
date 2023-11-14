import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SectionPadding } from 'app/types';
import { getSectionPadding } from 'app/utils';

const initialState: AppSliceState = {
  primaryColor: '#EBFF00',
  backgroundColor: '#1C1C1C',
  headerHeight: 137,
  showLanguageSwitcher: false,
  preventScroll: false,
  sectionPadding: getSectionPadding(),
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setShowLanguageSwitcher: (state, action: PayloadAction<boolean>) => {
      state.showLanguageSwitcher = action.payload;
    },
    toggleLanguageSwitcher: (state) => {
      state.showLanguageSwitcher = !state.showLanguageSwitcher;
    },
    setPreventScroll: (state, action: PayloadAction<boolean>) => {
      state.preventScroll = action.payload;
    },
    setSectionPadding: (state, action: PayloadAction<SectionPadding>) => {
      state.sectionPadding = action.payload;
    },
  },
});

export const {
  setPrimaryColor,
  setShowLanguageSwitcher,
  toggleLanguageSwitcher,
  setPreventScroll,
  setSectionPadding,
} = appSlice.actions;

export interface AppSliceState {
  primaryColor: string;
  backgroundColor: string;
  headerHeight: number;
  showLanguageSwitcher: boolean;
  preventScroll: boolean;
  sectionPadding: SectionPadding;
}
