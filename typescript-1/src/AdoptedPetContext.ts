import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[string, (adoptedPet: Pet) => void]>([
  "",
  () => {},
]);

export default AdoptedPetContext;