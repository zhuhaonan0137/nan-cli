// export const baseUrl = "/api-proxy"; //本地开发 接口代理

//测试 http://ecstest2018.10010.com
//生产 https://m.client.10010.com
// export const baseUrl = "http://ecstest2018.10010.com";
// export const baseUrl = "https://m.client.10010.com";

//测试 https://ecstest2018.10010.com
//生产 https://m.client.10010.com
// export const baseUrl_New = "https://m.client.10010.com";

let baseUrl = '';



if (process.env.NODE_ENV == 'development') {
    //本地切环境 在vue.config.js  target
    baseUrl='/api-proxy';


} else if (process.env.NODE_ENV == 'production') {
    // baseUrl = 'https://client.10010.com';//预发布
    baseUrl = 'http://ecstest2018.10010.com';//测试
    // baseUrl = 'https://m.client.10010.com'//生产


}
export {
    baseUrl
}