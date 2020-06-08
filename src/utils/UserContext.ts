import { createContext } from "react";

interface User {
  id: number;
  name: String;
  email: String;
}

export const UserContext = createContext<{ user: User | null; setUser: any }>({
  user: null,
  setUser: null,
});
