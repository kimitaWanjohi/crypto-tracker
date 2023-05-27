import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="px-4 py-3 dark:bg-gray-900 bg-gray-200 shadow-lg sticky top-0 z-10">
      <div className="container flex justify-between mx-auto">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 italic"
        >
          Crypto Tracker
        </NavLink>
        <div className="flex space-x-4">
          {dark ? (
            <button
              type="button"
              className="text-gray-800 dark:text-white p-2 hover:bg-white/20 rounded-full"
              onClick={() => setDark(false)}
            >
              <BsSunFill size={25} />
            </button>
          ) : (
            <button
              type="button"
              className="text-gray-800 dark:text-white p-2 hover:bg-white/20 rounded-full"
              onClick={() => setDark(true)}
            >
              <BsFillMoonStarsFill size={25} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
