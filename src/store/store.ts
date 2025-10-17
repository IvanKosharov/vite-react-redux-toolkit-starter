import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import counterReducer from "./counter/slice"
import postsReducer from "./posts/slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSeletor: TypedUseSelectorHook<RootState> = useSelector // aliase the function but add types
