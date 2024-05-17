// 2 cach dinh nghia components : class component, function component
// de cho no hieu  day la component thi extends 
//



import React from "react";
import UserInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    //JSX chi dung cho 1 phan tu html, chi co 1 element
    // co the tao ra mot render dong {mot su dung bien} trong dau ngoac bang js
    // render ke thua lai react.component
    // state la 1 object
    // this dai dien cho object kieu no giong nhu chi diem den state, this daij cho class
    //
    
    render(){
        const myInfor = ['ab','c','c']
        
        return(    
            <div>            
                <UserInfor></UserInfor>
                <br/> <br/>
                <DisplayInfor name="Hoi dan IT" age = "21"/>
                <hr/>
                <DisplayInfor name="Tuan Anh" age = "21" myInfor={myInfor}/>
            </div>

        );
    }

} 


export default MyComponent;