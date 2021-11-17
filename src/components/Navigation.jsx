// NPM Packages
import { useHistory } from "react-router";
//import { Link } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/Netelix-logo.png";

export default function Navigation() {
  // Global state
  const { user } = useAuth();
  const { isLogged, setUser, setIsLogged } = useAuth();
  const history = useHistory();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setIsLogged(false);
    history.push("/");
  }

  return (
    <>
      {isLogged && (
        <div id="nav">
        <nav className="navigation">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            {user.isAdmin ? null: <div className="nav-list">
                <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#movies-carousel">Movies</a></li>
                    <li><a href="#tvshows-carousel">TV Shows</a></li>
                </ul>
            </div>}
            <div className="logout">
                <button onClick={onLogout}>Sign out</button>
            </div>
        </nav>
        </div>
      )}
    </>
  );
}