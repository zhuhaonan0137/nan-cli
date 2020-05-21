import { postRequest, getRequest } from "./axios";
// import { baseUrl, baseUrl_New } from "./urlconfig";

// export const demo = (data)=>{
//     return postRequest(`${baseUrl}/xxxx`,data)
// };


export const demo = (data)=>{
    //前面是地址后缀  后面是参数
    return postRequest('/xxxx',data)
};