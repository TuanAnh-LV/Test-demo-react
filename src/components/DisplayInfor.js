import React from "react";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component{

    handleShowHide = () => {
        // ! dau togle co nghia la dau on off
        this.setState({
            isShowListUser : !this.state.isShowListUser
        }
            
        )
    }

    state = {
        isShowListUser: true
    }
render(){
    //destructuring array/objct
    // 1.  const {age , name} = this.props;
    const {listUsers} = this.props;
    // console.log(listUsers)
    //props => viet tac Properties duoc goi la tai san, boi vi no chuyen tu thang cha cho thang con
    // console.log(this.props)

    return(
        <div className="display-info-container">
            <div>
                <span onClick={() => {this.handleShowHide()}}>
                    
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
            </div>
            {/* true thi hien ra,false se an, co nghia cai bien nay la true  */}
        {this.state.isShowListUser && 
        <div>

{/* doan code thay cho phep hien ten nguoi dung bang .map se in ra 3 phan tu da khai bao, tao ra 1 array moi */}

{listUsers.map((user,index) => {
     //   dong nay no se in ra cac dieu kien minh muon chinh
    //  console.log(">>>> check map user",user)


     // cau dieu kien, dau + o dau dung de chuyen bien string sang number
    //  if( +user.age > 18){
    //     return(
    //         <div key={user.id} className="green">
    //             <div> My name's  {user.name}</div>
    //             <div>My age's {user.age} </div>
    //             <hr/>
    //         </div>
    //     )
    //  }else{
    //     return(
    //         <div key={user.id} className="red">
    //             <div> My name's  {user.name}</div>
    //             <div>My age's {user.age} </div>
    //             <hr/>
    //         </div>
    //     )
    //  }




    return(
        // ? the hien dieu kien neu true la green ,false red 
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
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
}
        </div>
    )
}

}

export default DisplayInfor;