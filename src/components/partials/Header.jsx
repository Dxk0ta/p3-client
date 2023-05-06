import { Link } from "react-router-dom";
import MainSearch from "./MainSearch";
import { useEffect, useState } from "react";
import "./Header.css"
import axios from "axios";
import cinesearchWhite from '../assets/cinesearch_white.png'
import pandaLogo from '../assets/panda.png'

export default function Header({ currentUser, handleLogout, setCurrentUser }) {
  const [userImg, setUserImg] = useState()
  const loggedIn = (
    <>
      {/* if the user is logged in... */}
      <Link to="/">
        <span onClick={handleLogout}>Logout</span>
      </Link>

      <Link to="/profile">Profile</Link>
    </>
  );

  const loggedOut = (
    <>
      {/* if the user is not logged in... */}
      <Link to="/register">Register</Link> {" | "}
      <Link to="/login">Login</Link>
    </>
  );

  console.log(currentUser)

  // useEffect(() => {
  //   if (currentUser && currentUser.img) {
  //     const getImg = axios.get(currentUser.img)
  //     setUserImg(getImg)
  //   }
  // })

  return (
    <nav className="navbar navbar-light bg-light header">
      <div>
        <a className="navbar-brand navbar-link" href="/register">
          REGISTER
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/login">
          LOGIN
        </a>
        {" | "}
        <a class="navbar-brand navbar-link" href="/favorites">
          FAVORITES
        </a>
        {" | "}
        <a class="navbar-brand navbar-link" href="/watch">
          WATCH
        </a>
        {" | "}
        <a class="navbar-brand navbar-link" href="/search">
          SEARCH
        </a>
      </div>
      <img className="navbar-logo" src="/logo.png" alt="logo image" />
    </nav>
  );
}
