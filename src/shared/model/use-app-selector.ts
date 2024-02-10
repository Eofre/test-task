import { RootState } from "app/store/appStore";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
