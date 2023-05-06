import { Link } from "react-router-dom";
import MainSearch from "../MainSearch";

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
      <img className="navbar-logo" src="/logo.png" alt="logo image" />
    </nav>
  );
}
