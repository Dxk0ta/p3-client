import { Link } from "react-router-dom";
import MainSearch from "../MainSearch";

export default function Header({ currentUser, handleLogout, setCurrentUser }) {
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
  return (
    <nav className="navbar navbar-light header">
      <div>
        <a className="navbar-brand navbar-link" href="/register">
          REGISTER
        </a>{" "}
        {" | "}
        <a className="navbar-brand navbar-link" href="/login">
          LOGIN
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/favorites">
          FAVORITES
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/watchlist">
          WATCH
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/logout">
          LOGOUT
        </a>
        {" | "}
        <a className="navbar-brand navbar-link" href="/movies">
          HOME
        </a>
        <MainSearch />
      </div>
      <img className="navbar-logo" src="/logo.png" alt="logo image" />
    </nav>
  );
}
