import React from "react";
import "../Header/Header.css";
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from "react-router-dom";

function Header() {
  const history = useNavigate();
  

  const userLogout = () => {
    localStorage.removeItem("loggedUser")
    history('/login');

  }



  return (
    <>
      <div className="header">
        <div className="header_left">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
            alt=""
          />
        </div>
        <div className="header_middle">
          <div className="header_option">
            <HomeIcon fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar />
           {JSON.parse(localStorage.getItem("loggedUser")) && <p>{JSON.parse(localStorage.getItem("loggedUser")).firstName} {JSON.parse(localStorage.getItem("loggedUser")).lastName}</p>}
          </div>
          <button className="mystyle" onClick={userLogout}>Logout</button>
          <button className="mystyle" onClick={()=>{
            history('/profile')
          }}>View Profile</button>
        </div>
      </div>
    </>
  );
}

export default Header;
