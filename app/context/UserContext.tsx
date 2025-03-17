"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextType {
  userDetails: any;
  setUserDetails: (user: any) => void;
}
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Data not available");
  }
  return context;
};
