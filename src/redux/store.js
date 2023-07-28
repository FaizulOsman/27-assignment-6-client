import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/user/userSlice";
import pcBuilderReducer from "@/redux/pcBuilderSlice/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pcBuilder: pcBuilderReducer,
  },
});
