import instance from "../config/config";

export const getAllCircularBannerImages=async ()=> {
    try {
        const response=await instance({
            url:`/circularBanner/getallActive`,
            method:"GET",
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }
}