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

//(event) cái biến này web API cho, cung cấp thông tin người dùng đang làm trên web

handleClick = (event) => {
console.log(">> click me my button")
// console.log(event) in ra thogn tun
// console.log("random", Math.floor((Math.random()*100) + 1))

// merge State => react class

this.setState({
    name: 'Tuan Anh',
    age:  Math.floor((Math.random()*100) + 1)
})

// this.setState({
//     age:  Math.floor((Math.random()*100) + 1)
// })
}


HandleOnMoverOver(event){
    // console.log(event.pageX)

}

    render(){
        return(
            <div> my first component
                {/* {Math.random()} */}
            
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
                <button onMouseMove={this.HandleOnMoverOver}>Hover Me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
            </div>

        );
    }

} 


export default MyComponent;