
import { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);

  const login = (userData) => {
    setLoginData(userData);
  };

  const logout = () => {
    setLoginData(null);
  };

  return (
    <AuthenticationContext.Provider value={{ loginData, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthenticationContext);
};
