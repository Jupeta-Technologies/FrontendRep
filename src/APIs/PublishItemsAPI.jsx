import APIManager from "./APIManager";



export const PublishItems = async (data) => {
    console.log(data);
    
    try {
        const response = await APIManager('/User/AddProduct',{
            method:"POST",
            headers:{'Content-Type':'multipart/form-data'},
            data:data,
            withCredentials:false
        });
        
        return response;
    } catch (error) {
        
        return error.response
    }
}