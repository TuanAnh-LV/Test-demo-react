import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
// import ModalUpdateUser from "./ModalUpdateUser";


const ManageUser = (props) =>{
const [showModalCreateUser, setShowModalCreateUser]= useState(false);
const [listUsers,setListUsers]= useState([]);
// const [showModalUpdateUser, setShowModalUpdateUser]= useState(false);

    useEffect( ()=>{
        fetchListUser();
    },[]);// sau khi ham return chay, == componentDidMount
    
    const fetchListUser= async() =>{
       let res = await getAllUsers();
       console.log(res)
       if(res.EC === 0){
        setListUsers(res.DT);
       }
    }


    return(
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div className="table-user-container">
                  <TableUser 
                  listUsers={listUsers}
                  />

                </div>
                <ModalCreateUser 
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
                fetchListUser={fetchListUser}
   
                />

                {/* <ModalUpdateUser/>
                show={showModalUpdateUser} */}
            </div>
        </div>
    )
}

export default ManageUser;