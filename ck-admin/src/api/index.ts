/*
    我们还可以在我们的文件当中配置几个我们经常用的请求方法,如:post,get,put,delete等请求方法,
    post方法与put方法是一样的，delete方法与get方法是一样的,只需要更改方法名称就可以.
*/

//这是其中一种方法
/*
export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
 */

import service from "../utils/http";
let publicMethods = {
  /*
    post方法
*/
  post(url: any, data: any) {
    return new Promise((resolve, reject) => {
      //这里的service与实例化axios的变量名一致
      service
        .post(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /*
    put方法
  */
  put(url: any, data: any) {
    return new Promise((resolve, reject) => {
      //这里的service与实例化axios的变量名一致
      service
        .put(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /*
    get方法
  */
  get(url: any, data: any) {
    return new Promise((resolve, reject) => {
      //这里的service与实例化axios的变量名一致
      service
        .get(url, { params: data })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /*
    delete方法
  */
  deleter(url: any, data: any) {
    return new Promise((resolve, reject) => {
      //这里的service与实例化axios的变量名一致
      service
        .delete(url, { params: data })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
export default publicMethods;
