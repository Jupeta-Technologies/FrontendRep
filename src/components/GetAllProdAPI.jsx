import APIManager from "./APIManager";


export const GetAllProdAPI = async () =>{
    try {
        const responds = await APIManager('/User/GetAllProducts',{
            method:"GET",
            headers:{'Content-Type':'application/json'},
            withCredentials:false,
        });
        return responds;
    } catch (error) {
        return error;
    }
}