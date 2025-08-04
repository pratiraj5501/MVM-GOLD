import instance from "../config/config"

export const ShowCaseCards=async ()=> {
    try {
        const response=await instance({
            url:`/product/collection/cards`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }

    
}