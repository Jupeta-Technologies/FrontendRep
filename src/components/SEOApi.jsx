import APIManager from "./APIManager";

export const jupetaSEO = async (data) =>{
    try {
        const responds = await APIManager('/User/SearchSort',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            params:data,
            withCredentials:false
        });
        return responds;
    } catch (error) {
        return error.responds;
    }
}