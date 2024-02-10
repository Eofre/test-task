import { AppDispatch } from "app/store/appStore";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch<AppDispatch>;
