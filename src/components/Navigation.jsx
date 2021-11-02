// NPM Packages
import { useHistory } from "react-router";

// Project files
import { useAuth } from "state/AuthProvider";

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
          <button onClick={onLogout}>Logout</button>
        </nav>
      )}
    </>
  );
}