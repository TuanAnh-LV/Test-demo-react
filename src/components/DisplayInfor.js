import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'


// stateless vs state ful
// class DisplayInfor extends React.Component{
//     // chay truoc render
//     // constructor(props){
//     //     console.log('>>> call contructor: 0')
//     //     super(props)
//     //     this.state ={
//     //         isShowListUser:true
//     //     }
//     // }

//     // handleShowHide = () => {
//     //     // ! dau togle co nghia la dau on off
//     //     this.setState({
//     //         isShowListUser : !this.state.isShowListUser
//     //     }
            
//     //     )
//     // }

//     state = {
//         isShowListUser: true
//     }

//     // componentDidMount(){
//     //     // co the goi API
//     //     console.log('>>>> call me component did mount')
//     //     setTimeout(()=>{
//     //         // dung de doi title khi chuyen sang trang khac
//     //         document.title = 'Tuan anh depz';
//     //     },3000);
//     // }

//     // // can phai tham chieu dau vao
//     // componentDidUpdate(preProps,preState, snapshot){
//     //     console.log('>>>> call me component did Update',this.props,preProps)
//     //     // preProps se dua lai cho chung ta dung, so sanh qua khu va hien tai
//     //     if(this.props.listUsers !== preProps.listUsers){
//     //         alert('You got 5 users')
//     //     }
//     //     // neu list dat toi 5 user thi bao loi
//     // }
// render(){
//     //destructuring array/objct
//     // 1.  const {age , name} = this.props;
//     const {listUsers} = this.props;
//     // console.log(listUsers)
//     //props => viet tac Properties duoc goi la tai san, boi vi no chuyen tu thang cha cho thang con
//     // console.log(this.props)
//     console.log('>>>> call me render')
//     return(
//         <div className="display-info-container">
//             {/* <img src={logo} />
//             <div>
//                 <span onClick={() => {this.handleShowHide()}}>
                    
//                     {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
//                     </span>
//             </div> */}
//             {/* true thi hien ra,false se an, co nghia cai bien nay la true  */}
//         {/* {this.state.isShowListUser  */}
//         {true && 
//         <div>

// {/* doan code thay cho phep hien ten nguoi dung bang .map se in ra 3 phan tu da khai bao, tao ra 1 array moi */}

// {listUsers.map((user,index) => {
//      //   dong nay no se in ra cac dieu kien minh muon chinh
//     //  console.log(">>>> check map user",user)


//      // cau dieu kien, dau + o dau dung de chuyen bien string sang number
//     //  if( +user.age > 18){
//     //     return(
//     //         <div key={user.id} className="green">
//     //             <div> My name's  {user.name}</div>
//     //             <div>My age's {user.age} </div>
//     //             <hr/>
//     //         </div>
//     //     )
//     //  }else{
//     //     return(
//     //         <div key={user.id} className="red">
//     //             <div> My name's  {user.name}</div>
//     //             <div>My age's {user.age} </div>
//     //             <hr/>
//     //         </div>
//     //     )
//     //  }




//     return(
//         // ? the hien dieu kien neu true la green ,false red 
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                     <div>
//                     <div> My name's  {user.name}</div>
//                     <div>My age's {user.age} </div>
//                     </div>
//                     <div>
//                         <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button>
//                     </div>
//                     <hr/>
//                 </div>
//             )

// })}

// {/* 
//             <div> My name's {name} </div>
//             <div>My age's {age}</div>
//             <hr/>
//             <div> My name's {name} </div>
//             <div>My age's {age}</div>
//             <hr/>
//             <div> My name's {name} </div>
//             <div>My age's {age}</div> */}
            

//         </div>
// }
//         </div>
//     )
// }

// }

const DisplayInfor = (props) =>{
    //chuyen class sang function
    // doi voi function k con this.props nua
    const {listUsers} = props;

    return(
        <div className="display-info-container">
            {/* <img src={logo} />
            <div>
                <span onClick={() => {this.handleShowHide()}}>
                    
                    {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
            </div> */}
            {/* true thi hien ra,false se an, co nghia cai bien nay la true  */}
        {/* {this.state.isShowListUser  */}
        {true && 
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
                    <div>
                    <div> My name's  {user.name}</div>
                    <div>My age's {user.age} </div>
                    </div>
                    <div>
                        <button onClick={()=> props.handleDeleteUser(user.id)}>Delete</button>
                    </div>
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


export default DisplayInfor;