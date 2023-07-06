import axios from "axios";

// 设置默认BaseURL
axios.defaults.baseURL = 'http://localhost:3001';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 登录、注册API可以不携带access_token
    if (config.url.includes('/admin/login') || config.url.includes('/admin/register')) {
        return config;
    }
    // 获取access_token，判断是否已经登录
    let access_token = sessionStorage.access_token;
    // 拥有access_token,在headers头添加access_token
    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response.data;
}, function (error) {
    // response响应对象
    let { status, data, statusText } = error.response;
    // 当前请求的API接口地址
    let { url } = error.config;

    switch (status) {
        case 401:
            // 提示用户

            // 获取当前路由地址

            // 强制跳转登录，携带redirect参数，实现重定向

            break;
        case 404:

            break;
        case 500:

            break;
        default:

            break;
    }
});

export default axios;