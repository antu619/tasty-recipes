import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  // firebase-hook
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allcategories">All Categories</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {
        user?.uid ?
        <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      :
      <div></div>
      }
    </>
  );

  return (
    <div className="navbar bg-[#eb5757] text-white lg:px-20 md:px-10 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1 text-neutral"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="lg:text-3xl md:text-3xl text-xl text-white">
          tasty<span className="font-bold">Recipes</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{menu}</ul>
      </div>
      <div className="navbar-end">
      {user?.uid ? (
          <div className="flex items-center gap-2">
            {user.photoURL ? (
              <img className="w-12 border-2 rounded-full" src={user.photoURL} />
            ) : (
              <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content border-2 rounded-full w-12">
                <span>{user?.email?.slice(0,5)}</span>
              </div>
            </div> 
            )}
            <button onClick={() => signOut()} className="btn btn-neutral w-28">
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-neutral w-28">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
