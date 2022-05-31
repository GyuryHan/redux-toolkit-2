import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { visible: false };

const uiSlice = createSlice({
  name: "cart",
  initialState: initialUIState,
  reducers: {
    isVisible(state) {
      state.visible = !state.visible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
