import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import uiReducer from "./ui-slice";

// store 폴더 안에 있는 리듀서 합치기
const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;