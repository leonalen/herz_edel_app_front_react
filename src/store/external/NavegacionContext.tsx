import { createContext, useContext, useState, ReactNode } from "react";

interface NavegacionContextType {
  value: string | null;
  addNavegacion: (val: string) => void;
  clearNavegacion: () => void;
}

const NavegacionContext = createContext<NavegacionContextType | undefined>(undefined);

export const NavegacionProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string | null>("inicio");

  const addNavegacion = (val: string) => setValue(val);
  const clearNavegacion = () => setValue(null);

  return (
    <NavegacionContext.Provider value={{ value, addNavegacion, clearNavegacion }}>
      {children}
    </NavegacionContext.Provider>
  );
};

export const useNavegacion = () => {
  const context = useContext(NavegacionContext);
  if (!context) throw new Error("useNavegacion debe usarse dentro de NavegacionProvider");
  return context;
};
