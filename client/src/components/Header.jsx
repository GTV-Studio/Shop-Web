import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-3xl flex flex-wrap">
            <span className="text-slate-500">G</span>
            <span className="text-red-500">T</span>
            <span className="text-yellow-500">V</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Tìm gì..."
            className="bg-transparent focus: outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline">lien he</li>
          <li className="hidden sm:inline">gio hang</li>
          <Link to="/sign-in">
            <li className="">dang nhap</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
