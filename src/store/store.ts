import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import counterReducer from "./counter-slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSeletor: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector // aliase the function but add types
