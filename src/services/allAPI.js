import { commonAPI } from "./CommonAPI"
import { SERVER_URL } from "./serverURL"

// signUp API
export const signUpAPI =async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/signup`,reqBody,"")
}
// login
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody,"")
}
