import APIManager from "./APIManager";


export const UserLogin = async (data) =>{
    try {
        const responds = await APIManager('/User/Login',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            data:data
        });
        return responds;
    } catch (error) {
        return error.responds.data;
    }
}