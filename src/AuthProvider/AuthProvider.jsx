// import React, { createContext } from 'react'

// export const AuthContext = createContext(null);
// const AuthProvider = ({children}) => {
//     const authInfo = {
//         name: "something is missing here"
//     }
//   return (
//     <div>
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     </div>
//   )
// }
// export default AuthProvider

import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;