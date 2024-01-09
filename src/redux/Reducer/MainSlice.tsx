import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  search: boolean;
}

const initialState: MainState = {
  search: false,
};

export const MainSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleInitialSearch: (state) => {
      state.search = true;
    },
  },
});

export const { handleInitialSearch } = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: MainState;
};
