import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ user, children }) => {
  console.log("usert", user);
  // console.log(userT);
  const [userT, setUserT] = useState(user);
  return (
    <ProfileContext.Provider value="user">
      {children}
    </ProfileContext.Provider>
  );
};
