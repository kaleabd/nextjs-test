import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlices";
import cartReducer from "./slices/cartSlice";
import navbarReducer from "./slices/navbarSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    navbar: navbarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
