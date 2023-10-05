import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { publicRequest, userRequest } from '../axios/request';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Features/user/userSlice';

function Update() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const userinfo = useSelector((state) => state.user.userdata[0]) || [];
  console.log('userdata',userinfo);

  useEffect(() => {
    setName(userinfo.name)
    setEmail(userinfo.email)
    setPassword(userinfo.password)
    setPhonenumber(userinfo.phonenumber)
  },[])
  

  const user = useSelector((state) => state.user);
  const user_id = user?.userdata?.[0]?._id;
  console.log("user id", user_id);
  
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      await userRequest
        .put(`update/${user_id}`, {email, password, name, phonenumber})
        .then((res) => {
          alert("updated");
          console.log("request data");
        });
    } catch (error) {
      console.log(error);
    }
    console.log(name,email);
  }
  
  return (
    <div>
      <h1>UPDATE here -  Page</h1>
      <form>
        <label>Email</label>
        <input
          type="email"
        
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={userinfo.email}
        />
        <label>Password</label>
        <input
          type="password"
         
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <label>Name</label>
        <input
          type="text"
          
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={userinfo.name}
        />
        <label>Phone Number</label>
        <input
          type="text"
       
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
          placeholder={userinfo.phonenumber}
        />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
}
export default Update