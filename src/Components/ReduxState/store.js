// import { configureStore } from "@reduxjs/toolkit";
// import reducerState from "./ReduxState";

// export const store = configureStore({
//   reducer: {
//     reducerState,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./ReduxState";

// export const store = configureStore({
//   reducer: {
//     myReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
