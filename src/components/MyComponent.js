// 2 cach dinh nghia components : class component, function component
// de cho no hieu  day la component thi extends 
//



import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component{
    //JSX chi dung cho 1 phan tu html, chi co 1 element
    // co the tao ra mot render dong {mot su dung bien} trong dau ngoac bang js
    // render ke thua lai react.component
    // state la 1 object
    // this dai dien cho object kieu no giong nhu chi diem den state, this daij cho class
    //DRY : don't repeat yourseft
    
    state ={
        listUsers: [
            {id: 1, name:"Tuan Anh", age:"16"},
            {id: 2, name:"Amh Tuan" , age:"22"},
            {id: 3, name:" Anh", age:"69"},
        ]
    }

    handleAddNewUser=(userObj) =>{
       console.log(">>>> check date from parent:",userObj)
       this.setState({
        listUsers: [userObj,...this.state.listUsers]
       })

       // : let listUserClone = [...this.state.listUsers]; (sao chep bien nay sang 1 bien moi)
       // dau 3 cham dung de tranh bug
       //c2: let listUser = this.state.listUsers;
       // listUser = listUser.unshift(userObj);
       //this.setState({ listUsers:listUserNew})
    }

    render(){
        // const myInfor = ['ab','c','c']

        return(    
            <>  
            <div className='a'>            
                <AddUserInfor
                //   co dau dong mo () cho biet dang tham chieu toi function , nguoc lai la goi toi function do co nghia thuc thi ngay tai day
                //  chu k phai truyen tu thang cha sang thang con* 
                handleAddNewUser={this.handleAddNewUser}
                />
                <br/> <br/>
                {/* <DisplayInfor name="Hoi dan IT" age = "21"/>
                <hr/> */}
                {/* <DisplayInfor name="Tuan Anh" age = "21" myInfor={myInfor}/>  no se hien mang trong component*/} 
                <DisplayInfor 
                listUsers={this.state.listUsers}
                />
            </div>
            <div className='b'> 

            </div>


           </>

        );
    }

} 


export default MyComponent;