import { Link } from "react-router-dom";
import MainSearch from "../MainSearch";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> ad44882 (Minor cleanup on routes/card)

export default function Header({ currentUser, handleLogout, setCurrentUser }) {
  const [userImg, setUserImg] = useState()
  const loggedIn = (
    <>
      {/* if the user is logged in... */}
      <Link to="/">
        <span onClick={handleLogout}>Logout</span>
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
        </a>{" "}
        {" | "}
        <a className="navbar-brand navbar-link" href="/login">
          LOGIN
        </a>
<<<<<<< HEAD
=======
        {" | "}
        <a className="navbar-brand navbar-link" href="/favorites">
          FAVORITES
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/watchlist">
          WATCH
        </a>
        {" | "}
        <MainSearch/>
        {" | "}
        <a className="navbar-brand navbar-link" href="/logout">
          LOGOUT
        </a>
>>>>>>> ad44882 (Minor cleanup on routes/card)
      </div>
      <img className="navbar-logo" src="/logo.png" alt="logo image" />
    </nav>
  );
}
