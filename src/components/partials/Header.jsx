import { Link } from "react-router-dom";
import MainSearch from "../MainSearch";

export default function Header({ currentUser, handleLogout }) {
  const loggedIn = (
    <>
      {/* if the user is logged in... */}
      <Link to="/">
        <span onClick={handleLogout}>logout</span>
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
      </div>
      <img className="navbar-logo" src="/logo.png" alt="Panda eating popcorn which is the CineSearch logo" />
    </nav>
  );
}
