import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [search,setSearch] = useState("Thor")
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth,search,setSearch }}>
      {children}
    </AuthContext.Provider>
  );
}
