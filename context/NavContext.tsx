"use client";
import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface NavContextType {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
// const NavContext = createContext();
const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
