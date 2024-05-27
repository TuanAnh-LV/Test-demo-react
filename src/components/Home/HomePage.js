import videoHomepage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';


const HomePage = (props) =>{
   
    return(
        <div className="homepage-container">
            <video  autoPlay muted loop>
                <source 
                src={videoHomepage}
                type="video/mp4"
                />
            </video>
            <div  className='homepage-content'>
            <div>Make forms
worth filling out</div>
            <div>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
            <div>Get started—it's free</div>
        </div>
        </div>
       
    )
}
export default HomePage;