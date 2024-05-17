import React from "react";

class DisplayInfor extends React.Component{

render(){
    //destructuring array/objct
    // 1.  const {age , name} = this.props;
    const {listUsers} = this.props;
    console.log(listUsers)
    //props => viet tac Properties duoc goi la tai san, boi vi no chuyen tu thang cha cho thang con
    // console.log(this.props)


    return(
        <div>
            {/*1. 
            <div> My name's {name} </div>
            <div>My age's {age}</div>
            <hr/>
            <div> My name's {name} </div>
            <div>My age's {age}</div>
            <hr/>
            <div> My name's {name} </div>
            <div>My age's {age}</div> */}

{/* doan code thay cho phep hien ten nguoi dung bang .map se in ra 3 phan tu da khai bao, tao ra 1 array moi */}
{listUsers.map((user) => {
    return(
        <div key={user.id}>
            <div> My name's  {user.name}</div>
            <div>My age's {user.age} </div>
            <hr/>
        </div>
    )
})}

{/* 
            <div> My name's {name} </div>
            <div>My age's {age}</div>
            <hr/>
            <div> My name's {name} </div>
            <div>My age's {age}</div>
            <hr/>
            <div> My name's {name} </div>
            <div>My age's {age}</div> */}
            

        </div>
    )
}

}

export default DisplayInfor;