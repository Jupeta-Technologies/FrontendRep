import APIManager from "./APIManager";

export const jupetaSEO = async (data) =>{
    try {
        const responds = await APIManager('/User/SearchSort',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            data:data,
            withCredentials:false
        });
        return responds;
    } catch (error) {
        return error.responds;
    }
}