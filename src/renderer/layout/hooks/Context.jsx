import { createContext, useContext, useState } from "react";

const Context = createContext()

export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
}

export function useContexto() {
    return  useContext(Context)
}