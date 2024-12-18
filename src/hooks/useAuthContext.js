import { useContext } from "react";
import { authContext } from "../../../context/authContext";

export const useAuthContext= ()=>{
    const context = useContext(authContext)
    if(!context){
        throw Error("useAuthConext must be used inside autheCntextProvider ")
    }
    return context
}