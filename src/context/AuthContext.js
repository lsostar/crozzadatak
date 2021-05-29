import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [addedFavourite, setAddedFavourite] = useState([]);
  const [Image, setImage] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isOpened,
        setIsOpened,
        addedFavourite,
        setAddedFavourite,
        Image,
        setImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };