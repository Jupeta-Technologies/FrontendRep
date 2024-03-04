import APIManager from "./APIManager";
import allprodData from '../APIs/GetAllProdLocal.json' //this is a local api response and will be deleted

export const jupetaSEO = async (data) =>{
    /* try {
        const responds = await APIManager('/User/SearchSort',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            params:data,
            withCredentials:false
        });
        return responds;
    } catch (error) {
        return error.responds;
    } */
    const response2 = allprodData;
    return response2;
}