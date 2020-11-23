import { createContext, Dispatch, SetStateAction, useState } from "react";

type setState<T> = Dispatch<SetStateAction<T>>;

interface AppContextData {
  extendedSideBar: boolean;
  setExtendedSideBar: setState<boolean>
}

const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [extendedSideBar, setExtendedSideBar] = useState(false);

  const value = { 
    extendedSideBar, 
    setExtendedSideBar 
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;