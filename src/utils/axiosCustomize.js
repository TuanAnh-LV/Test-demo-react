import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5221',//duong link backend
    // timeout: 1000,//goi api ghi nao phan hoi
    // headers: {'X-Custom-Header': 'foobar'}//token
  });

  export default instance;


  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("??run error",error.response)
    return error && error.response && error.response.data ?error.response.data : Promise.reject(error);
  });
  // file nay chi xuat ra 1 bien