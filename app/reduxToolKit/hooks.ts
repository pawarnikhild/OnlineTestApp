import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/";

import { rootState, AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;