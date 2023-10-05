import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Features/user/userSlice";

function UserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const update = () => {
      navigate("/update");
    };

  const userinfo = useSelector((state) => state.user.userdata) || [];
  console.log('data in ', userinfo);
  const logout = () => {
    dispatch(userLogout())
    navigate('/')
  }

  return (
    <div>
      <h1>User Page</h1>
      <h1>{ userinfo[0].name}</h1>
      {/* {
        userinfo[0] && userinfo[0].map((dis) => (
          <>
            <h1> {dis.email}</h1>
            <h1>{dis._id}</h1>
          </>
        ))} */}
      <button onClick={logout}>Logout</button>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default UserPage;
