import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
const Login =(props)=>{

    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const navigate = useNavigate();
    const handleLogin = async ()=>{
        //validate

        //submitapi
        let data = await postLogin(email,password);//do state quanli
        if(data && data.EC !== 0){
            toast.success(data.EM);
            navigate('/')
        }
        if(data && +data.EC !== 0){//bien data string dung + de covert
            toast.error(data.EM)
        }
    }
    return(
        <div className="login-containercol-4 mx-auto">
            <div className='header'>
              <span>Don't have an account yet?</span>
              <button onClick={() => navigate('/register')}> Signup</button>
            </div>
            <div className='title  col-4 mx-auto'>
                Hoidan Login
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello xin chao cac ban
            </div>
            <div className='contnet-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                   <input type={"email"} 
                   className='form-control'
                   value={email}
                   onChange={(event)=>setEmail(event.target.value)}
                   />
                </div>
            </div>
            <div className='contnet-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Password</label>
                   <input type={"password"} 
                   className='form-control'
                   value={password}
                   onChange={(event)=>setPassword(event.target.value)}
                   />
                </div>
                <span>Forgot Password?</span>
                <div className='bt-submit'
                onClick={()=>handleLogin()}>
                <button>Login to hoi dan IT</button>
                </div>
           <div className='text-center'>
            <span onClick={()=>navigate('/')}> &#60;&60;Go back home</span>
           </div>
            </div>
            
        </div>
    )
}

export default Login;