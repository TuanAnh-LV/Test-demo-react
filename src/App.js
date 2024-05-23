
// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { Outlet,Link } from 'react-router-dom';

const App = () => {


  return (

    <div className="app-container">
      <div className='header-container'>
      <Header/>
      </div>
    <div className='main-container'>
      <div className='sidenav-container'>

      </div>
      <div className='app-content'>
        <Outlet/> 
        {/* se lay du lieu o router element khi chuyen trang se co the thay luon noi dung */}
      </div>
    </div>

    </div>
  );
}
export default App;
