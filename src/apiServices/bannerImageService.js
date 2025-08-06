import instance from "../config/config";

export const getBannerImage=async (titleId)=> {
    console.log("bannerImg");
    try {
        const response=await instance({
            url:`BannerImage/getby?titleId=${titleId}`,
            method:"GET",
            
        })
        return response;
    } catch (error) {
        console.log("error",error)
        return error;
        
    }

    
}