import React, { createContext, useEffect, useState } from 'react'
export const userRoleResponseContext=createContext()
function TokenAuth({children}) {
    const [userRoleResponse,setUserRoleResponse]=useState("")
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setUserRoleResponse(JSON.parse(sessionStorage.getItem('userDetails')).role)
        }
    },[userRoleResponse])
  return (
    <>
    <userRoleResponseContext.Provider value={{userRoleResponse,setUserRoleResponse}}>
    {children}
    </userRoleResponseContext.Provider>
    </>
  )
}

export default TokenAuth