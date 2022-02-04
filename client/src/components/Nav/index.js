import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  //   function showNavigation() {
  //     if (Auth.loggedIn()) {
  //       return (
  //         <div>
  //           <Link to="/profile">My Silver Plus Profile</Link>
  //           <a href="/" onClick={logout}>
  //             Logout
  //           </a>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign-Up</Link>
  //         </div>
  //       );
  //     }
  //   }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Silver Plus: Dating for the Elderly</h1>
        </Link>

        <nav className="text-center">
          {/* {showNavigation()} */}
          {/* {(() => {
            if (Auth.loggedIn) {
              return (
                <div>
                  <Link to="/profile">My Silver Plus Profile</Link>
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                </div>
              );
            } else if (!Auth.loggedIn) {
              return (
                <div>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign-Up</Link>
                </div>
              );
            }
          })()} */}
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Silver Plus Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign-Up</Link>
            </>
          )}

          {/* {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
