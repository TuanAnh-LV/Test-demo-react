import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
const TableUser = (props) =>{

const [listUsers,setListUsers]= useState([]);

useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setListUsers(response); // Assuming the API response is an array of users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

    return(
        <>
<table className="table table-hover table-bordered">
  <thead>
    <tr>
    <th scope="col">serviceId</th>
              <th scope="col">pictureName</th>
              <th scope="col">serviceName</th>
              <th scope="col">minWeight</th>
              <th scope="col">maxWeight</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">startDate</th>
              <th scope="col">endDate</th>
              <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {listUsers && listUsers.length >0 &&
    
    listUsers.map((item,index)=>{
        return(
            <tr key={`table-user-${index}`}>
          
<td>{item.serviceId}</td>
                  <td>{item.pictureName}</td>
                  <td>{item.serviceName}</td>
                  <td>{item.minWeight}</td>
                  <td>{item.maxWeight}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.status}</td>
            <td>
                <button className='btn'>View</button>
                <button className="'btn btn-warning">Update</button>
                <button className="btn">Delete</button>
            </td>
          </tr>
        )
    })
    }
  </tbody>
</table>
{listUsers && listUsers.length === 0 && 
<tr>
    <td colSpan={'4'}>Not found data</td>
     </tr> 
     }
        </>
    )
}
export default TableUser;