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
export const getMahasanskrutiProducts=async ()=> {
    try {
        const response=await instance({
            url:`/product/getall/mahasanskrutiproducts`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }

    
}

export const getModrenProducts=async ()=> {
    try {
        const response=await instance({
            url:`/product/getall/modernStyle`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }

    
}
// fetch all products by titelId wise
export const getAllProductswithTitleId=async (titleId)=> {
    try {
        const response=await instance({
            url:`/product/getall/bytitleId?titleId=${titleId}`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;   
    }
}

export const getAllProductsFilterByTitleIdAndProudctId=async (titleId,selectedCategories)=> {
    try {
        const response=await instance({
            url:`/product/getall/filterBytitleIdCatId?titleId=${titleId}`,
            method:"POST",
            data:{selectedCategories}
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;   
    }
}


// getall/mahasanskrutiproducts