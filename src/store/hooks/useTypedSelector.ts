import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../reducers/root_reducer";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector