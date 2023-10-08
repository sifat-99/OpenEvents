import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleSignOut = () => {
    console.log("sign out");
    logOut()
    .then((res) => {
      console.log(res);
    }
    )
    .catch((err) => {
      console.log(err);
    })
  };

  const NavBarItems = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/events"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#FF444A] underline text-white font-bold text-xl"
              : ""
          }
        >
          Events
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky inset-0 z-10 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavBarItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">My_Home</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center gap-4 px-1">
          {NavBarItems}
          {
            user ?
            <li>
              <NavLink
                to={"/dashboard"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#FF444A] underline text-white font-bold text-xl"
                    : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            : <NavLink to={'/register'}><button className="btn btn-ghost">Register</button></NavLink>
          }
          </ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <div>
          <details className="dropdown dropdown-bottom dropdown-end">
            <summary tabIndex={0} className="btn btn-circle m-1">
              Click
            </summary>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Sign Out</a>
              </li>
            </ul>
          </details>
          </div>
          : 
          <Link to={'/login'}><button className="btn btn-secondary">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
