import React, { createContext,useState,useContext } from 'react'

const AuthContex = createContext();
const AuthContexDispatcher = createContext();

function AuthProviders({children}) {
    const[state,setState ] = useState(false);

  return (
    <AuthContex.Provider>
<AuthContex.Provider value={state}>
            <AuthContexDispatcher.Provider value={setState}>
                {children}
            </AuthContexDispatcher.Provider>
        </AuthContex.Provider>
    </AuthContex.Provider>
  )
}

export default AuthProviders;

export const useAuth = ()=> useContext(AuthContex);
export const useAuthAction = ()=> useContext(AuthContexDispatcher);