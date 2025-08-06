import axios from "axios"

export const FILE_URL="http://192.168.1.54:7000"

const instance=axios.create({
    baseURL:"http://192.168.1.54:7000",
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

export default instance;