import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { visible: false, notification: null };

const uiSlice = createSlice({
  name: "cart",
  initialState: initialUIState,
  reducers: {
    isVisible(state) {
      state.visible = !state.visible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
