import { postRequest, getRequest } from "./axios";
// import { baseUrl, baseUrl_New } from "./urlconfig";

// export const demo = (data)=>{
//     return postRequest(`${baseUrl}/xxxx`,data)
// };


export const demo = (data)=>{
    //前面是地址后缀  后面是参数
    return postRequest('/xxxx',data)
};

// api文件夹里放接口，各个页面分别管理
