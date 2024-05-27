
import axios from "../utils/axiosCustomize";// dang lay ra bien instance
const  postCreateNewUser = (email,password,username,role,image) =>{
    const data = new FormData();
data.append('email', 'email');
data.append('password', password);
data.append('username', username);
data.append('role', role);
data.append('userImage', image);
return axios.post(' duong link test api postman cung gia tri', data);
// xoa localhost
}

const getAllUsers = () =>{
    return axios.get('/api/services');
}

const postLogin = (userEmail,userPassword)=>{
    return axios.post(`api/login`,
    {email: userEmail,password: userPassword, delay:5000}
   
    )
}

const postRegister =(email,password,username) =>{
return axios.post(`duong link`,
    {email,password,username}
);
}

export {postCreateNewUser,getAllUsers,postLogin,postRegister}