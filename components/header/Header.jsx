
import React from "react";

function Header({ user, setSearchQuery }) {
  return (
    <header className="header w-full bg-white shadow flex flex-col sm:flex-row justify-center  md:justify-between items-center p-3 gap-4">
      <div className="search-product relative w-full md:w-auto">
        <i className="ri-search-line absolute left-2 text-lg top-2 text-gray-400 font-bold"></i>
        <input
          type="text"
          placeholder="Search by category or title"
          className="rounded focus:outline-0 ps-8 text-md py-1.5 w-full md:w-[250px] max-w-sm transition-all placeholder:text-gray-400 border-2 border-gray-200"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="user-info flex cursor-default gap-2 border-2 border-gray-200 items-center p-2 text-gray-400 rounded-2xl w-full md:w-auto mt-4 sm:mt-0">
        <i className="ri-user-fill"></i>
        <p>{user?.name || "Admin"}</p>
      </div>
    </header>
  );
}

export default Header;
