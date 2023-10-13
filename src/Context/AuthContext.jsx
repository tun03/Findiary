import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = (props) =>{

    const [auth,setAuth]=useState(false)
    const [name,setName]=useState('')
  

return(
    <>
    <AuthContext.Provider value={{auth,setAuth,name,setName}}>
    {props.children}
    </AuthContext.Provider>
    </>
)
}