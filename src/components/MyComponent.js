// 2 cach dinh nghia components : class component, function component
// de cho no hieu  day la component thi extends 
//



import React from "react";
class MyComponent extends React.Component{
    //JSX chi dung cho 1 phan tu html, chi co 1 element
    // co the tao ra mot render dong {mot su dung bien} trong dau ngoac bang js
    // render ke thua lai react.component
    // state la 1 object
    // this dai dien cho object kieu no giong nhu chi diem den state, this daij cho class
    //
    
    
state ={
    name: 'Hi hello',
    address: 'Vin',
    age: 26
};

    render(){
        return(
            <div> my first component
                {/* {Math.random()} */}
            
                My name is {this.state.name} and I'm from {this.state.address}
            </div>

        );
    }

} 


export default MyComponent;