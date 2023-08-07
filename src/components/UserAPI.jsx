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