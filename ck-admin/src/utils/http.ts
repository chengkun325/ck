/*
    封装axios
*/

import axios from 'axios';
import store from "../store";

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        /*
            在发送请求之前做些什么
            如果我们的使用的接口需要配置headers请求头或者body请求，可以再改部分添加
            headers请求头:config.headers["字段名"]="字段值" + token值
        */
        if (store.state.token) {
            config.headers['token'] = store.state.token
        }
        return config;
    },
    error => {
        /*
            对请求错误做些什么
        */
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            /*
                对响应数据做点什么
                对数据进行处理,如：脱壳
            */
            return response.data;
        }
    },
    error => {
        /*
            对响应错误做点什么
        */
        return Promise.reject(error);
    }
);


//最后导出实例
export default service;
