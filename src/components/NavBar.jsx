import { Link, useMatch, useResolvedPath } from "react-router-dom";
import DropDownItem from "./DropDownItem";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { TbMushroom } from "react-icons/tb";

export default function NavBar(to) {
  const [show, toggleShow] = useState(false);
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <nav className="flex flex-col my-5">
      {/* logo */}
      <div className="flex justify-between mb-6">
        <Link to="/" className="flex">
          <div>
            <TbMushroom />
          </div>
          <h4 className="text-[16px] lowercase tracking-tight font-thin">
            cogumelo
            <span className="text-[18px] uppercase tracking-wider font-normal">
              TRINDADE
            </span>{" "}
          </h4>
        </Link>
        {/* user-icon */}
        <div
          className="flex justify-end cursor-pointer focus:bg-teal-600"
          onClick={() => toggleShow(!show)}
        >
          <BiUser />
        </div>
      </div>

      <div>
        <ul className="flex justify-center text-sm font-thin gap-6">
          <li>
            <Link to="/prices">Prices</Link>
          </li>
          <li>
            <Link to="/delivery">Delivery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu */}
      {show && (
        <div className="absolute right-5 bg-white w-[200px] rounded-md p-4 top-[100px] z-10">
          <h3 className="text-lg font-bold text-purple-600">Mr. Kills</h3>
          <h3 className="text-gray-500 text-sm border-b-[2px] border-b-gray-300">
            Front-end Developer
          </h3>
          <ul className="flex flex-col text-gray-700">
            <DropDownItem image={BiUser} text="My Profile" />
            <DropDownItem image={BiUser} text="Inbox" />
            <DropDownItem image={BiUser} text="Settings" />
            <DropDownItem image={BiUser} text="Edit Profile" />
            <DropDownItem image={BiUser} text="Help" />
            <DropDownItem image={BiUser} text="Logout" />
          </ul>
        </div>
      )}
    </nav>
  );
}

