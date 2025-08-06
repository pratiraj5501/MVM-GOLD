import instance from "../config/config";

export const getDropdownList=async (titleId)=> {
    try {
        const response=await instance({
            url:`/category/getbytitleIdwise?titleId=${titleId}`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }

    
}