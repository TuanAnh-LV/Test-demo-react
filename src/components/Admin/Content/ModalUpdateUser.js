import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import {toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';

const ModalUpdateUser  = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
// khi modal thi clear ben trong
    setEmail("");
    setPassword("");
    setRole("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };
  const handleShow = () => setShow(true);
  
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [username,setUsername] =useState("");
  const [role,setRole] =useState("USER");
  const [image,setImage] =useState("");
  const [previewImage,setPreviewImage] = useState("");

const handleUploadImage = (event) =>{
    if(event.target && event.target.files && event.target.files[0]){
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
    }else{
        // setPreviewImage("");
    }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const handSubmitCreateUser =  async () => {
// validate
const isValidateEmail = validateEmail(email);

if(!isValidateEmail){
  toast.error("Invalid email");
  return;
}
if(!password){
  toast.error("Invalid password");
  return;
}



//call apis submit data



// const data = new FormData();
// data.append('email', 'email');
// data.append('password', password);
// data.append('username', username);
// data.append('role', role);
// data.append('userImage', image);

let data = await postCreateNewUser(email,password,username,role,image);
console.log("component res",data)
if(data && data.EC===0){
  toast.success(data.EM)
  handleClose();
   await props.fetchListUser();
}
if(data && data.EC !== 0){
  toast.error(data.EM)
}
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal 
      
      show={show} 
      onHide={handleClose}  
      size="xl"
      backdrop="static"
      className='modal-add-user'
      >
      
        
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" 
    className="form-control" 
    value={email}
    onChange={(event=>setEmail(event.target.value))}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    value={password} 
    onChange={(event=>setPassword(event.target.value))}
    />
  </div>
  <div className="col-md-6">
    <label  className="form-label">UserName</label>
    <input type="text" 
    className="form-control" 
    value={username}
    onChange={(event=>setUsername(event.target.value))}/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Role</label>
    <select  className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
      <option  value="USERS">USERS</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  </div>
  
  <div className='col-md-12 img'>
<label className='form-lable lable-upload ' htmlFor='lableUpload'>
    <FcPlus/>Upload File Image</label>
<input type='file' i
id='lableUpload' hidden
onChange={(event) =>handleUploadImage(event)}
/>
   
   </div> 
  <div className='col-md-12 img-preview'>
    {previewImage ?
    <img src={previewImage}/>
:
<span>Preview Image</span>
}

  </div>
</form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handSubmitCreateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser