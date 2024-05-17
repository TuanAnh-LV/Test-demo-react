import React from "react";

class DisplayInfor extends React.Component{

render(){
    //destructuring array/objct
    const {age , name} = this.props;
    //props => viet tac Properties duoc goi la tai san, boi vi no chuyen tu thang cha cho thang con
    console.log(this.props)
    return(
        <div>

            <div> My name's {name} </div>
            <div>My age's {age}</div>
        </div>
    )
}

}

export default DisplayInfor;