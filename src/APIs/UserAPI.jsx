import { data } from "autoprefixer";
import APIManager from "./APIManager";


export const UserLogin = async (data) =>{
    try {
        const responds = await APIManager('/User/Login',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            data:data,
            withCredentials:false
        });
        return responds;
    } catch (error) {
        return error.responseData;
    }
}

export const UserSignUp = async (data) =>{
    try {
        const responds = await APIManager('/User/AddUser',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            data:data,
            withCredentials:false
        });
        return responds;
    } catch (error) {
        return error.responseData;
    }
}

export const GetRegistration_OTP = async (data) =>{

    try{
        const regOTP = await APIManager('/User/GenerateOTPWithEmail',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            params:data,
            withCredentials:false
        });
        return regOTP;
    } catch (error) {
        return error.responseData;
    }
}

export const VerifyReg_OTP = async (data) =>{

    try{
        const regOTP = await APIManager('/User/ValidateOTP',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            params:data,
            withCredentials:false
        });
        return regOTP;
    } catch (error) {
        return error.responseData;
    }
}


