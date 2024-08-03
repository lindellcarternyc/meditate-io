import { useContext } from "react";
import {
  AffirmationsContext,
  AffirmationsContextValue,
} from "../views/Affirmations/AffirmationsContext";

export const useAffirmations = () =>
  useContext<AffirmationsContextValue>(AffirmationsContext);
