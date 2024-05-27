import { Routes,Route} from 'react-router-dom';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';

const Layout = (props) =>{
    return(
        <>
          <Routes>
          <Route path="/" element={<App/>}>

<Route index element={<HomePage />}/>
{/* index giup up ra man hinh trang home */}
 <Route path="/users" element={<User />}/>
 <Route path="/admin" element={<Admin/>}>
 <Route index element={<DashBoard />}/>
    <Route path="manage-users" element={<ManageUser />}/>
 </Route>
 <Route path="/login" element={<Login/>}/>
 <Route path="/register" element={<Register/>}/>
</Route>
</Routes>

<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

        </>
    )
}

export default Layout;