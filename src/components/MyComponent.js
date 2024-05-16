// 2 cach dinh nghia components : class component, function component
// de cho no hieu  day la component thi extends 

import React from "react";
class MyComponent extends React.Component{
    //JSX chi dung cho 1 phan tu html, chi co 1 element
    // co the tao ra mot render dong {mot su dung bien} trong dau ngoac bang js
    // render ke thua lai react.component
    render(){
        return(
            <div> my first component
                {Math.random()}

            </div>

        );
    }

} 


export default MyComponent;