// NPM Packages
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/Netelix-logo.png";

export default function Navigation() {
  // Global state
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
        <nav className="navigation">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="nav-list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">TV Shows</Link></li>
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/">My List</Link></li>
                </ul>
            </div>
            <div className="logout">
                <button onClick={onLogout}>Sign out</button>
            </div>
        </nav>
      )}
    </>
  );
}