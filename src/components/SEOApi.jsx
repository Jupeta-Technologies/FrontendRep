import APIManager from "./APIManager";

export const jupetaSEO = async (data) =>{
    try {
        const responds = await APIManager('/User/SearchSort',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            data:data
        });
        return responds;
    } catch (error) {
        return error.responds.data;
    }
}