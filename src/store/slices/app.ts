import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  primaryColor: string;
  headerHeight: string;
  showLanguageSwitcher: boolean;
  preventScroll: boolean;
}

const initialState: AppState = {
  primaryColor: "#EBFF00",
  headerHeight: "137px",
  showLanguageSwitcher: false,
  preventScroll: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
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
  },
});

export const { setPrimaryColor, setShowLanguageSwitcher, toggleLanguageSwitcher, setPreventScroll } = appSlice.actions;
export default appSlice.reducer;
