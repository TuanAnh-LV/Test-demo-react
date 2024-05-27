import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';// tuong navigate
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";
const Login =(props)=>{

    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();// ket noi redux
  
const [isLoading, setIsLoading] = useState(false);

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

    const handleLogin = async ()=>{
        //validate
const isValidEmail = validateEmail(email);
if(!isValidEmail){
    toast.error('Invalid email')
    return;
}
if(!password){
    toast.error('Invalid password')
    return;
}
setIsLoading(true);
        //submitapi
        let data = await postLogin(email,password);//do state quanli
        if(data && data.EC === 0){
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false)
            navigate('/')
        }

        if(data && +data.EC !== 0){//bien data string dung + de covert
            toast.error(data.EM)
            setIsLoading(false);
        }
    }
    return(
        <div className="login-container">
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
                onClick={()=>handleLogin()} disabled = {isLoading}>
                    
                    {isLoading === true && <ImSpinner10 className='loader-icon'/>}
                <span>Login to hoi dan IT</span>

                </div>
           <div className='text-center'>
            <span onClick={()=>navigate('/')}> &#60;&60;Go back home</span>
           </div>
            </div>
            
        </div>
    )
}

export default Login;