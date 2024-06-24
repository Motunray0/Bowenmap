import { useContext } from "react";
import { AppContext } from "../Contexts/App.context";

export const useAppContext = () => useContext(AppContext)