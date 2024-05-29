import APIManager from "./APIManager";
//import allprodData from '../APIs/GetAllProdLocal.json'


export const GetAllProdAPI = async () =>{
try {
        const response = await APIManager('/User/GetAllProducts',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            withCredentials:false,
        });
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
    /* const response2 = allprodData;
    console.log(response2);
    return response2; */
}