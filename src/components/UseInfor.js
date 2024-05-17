import React from "react";

class UserInfor extends React.Component{

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
    
    // dung de khi nhap gia tri vao button thong tin se thay doi theo nhung gi nhap trong button
    handleOnChangeInput = (event) =>{
    // alert('me') //khi nhap bat ki ki tu nao thi no se hien thong bao ra la 'me'
    this.setState({
        name: event.target.value
    })
    // console.log(event.target.value) // .target.value boi vi value la web API tro ve gia tri cho minh luon
    }
    
    handleOnChangeAge = (event) =>{
        // alert('me') //khi nhap bat ki ki tu nao thi no se hien thong bao ra la 'me'
        this.setState({
            age: event.target.value
        })
        // console.log(event.target.value) // .target.value boi vi value la web API tro ve gia tri cho minh luon
        }
    
    handleOnSumbit =(event) =>{
        event.preventDefault();//ngan chan reload lai trang
        console.log(this.state)
        
        // alert('me') //khi minh nhan enter no se hien ra thong bao la da luu thong tin 
    }
    render(){
        return(
            <div>
                My name is {this.state.name} / and I'm from {this.state.address} /and I'm {this.state.age}
                {/* <button onMouseMove={this.HandleOnMoverOver}>Hover Me</button>  khi di chuyen no se hien con tro dang di chuyen den button do*/}
                {/* <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>  cai ket hop dung khi ban click vao no se thay doi thong tin theo yeu cau ben tren*/}
                <form onSubmit={(event) => this.handleOnSumbit(event)}>                   
                    <label>Your name:</label>
                    <input 
                    value={this.state.name}
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)}          
                    />


                    <label>Your age:</label> 
                    <input 
                    value={this.state.age}
                    type="text"
                    onChange={(event) => this.handleOnChangeAge(event)}          
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default UserInfor;