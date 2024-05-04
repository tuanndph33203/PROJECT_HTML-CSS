import { createContext } from "react";

interface IStorage {
    value: any;
    setValue: (newValue: any) => void;
    removeValue: () => void;
}
const UserContext = createContext<IStorage | null>(null);
export default UserContext;
  