import DropDownItem from "./DropDownItem";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { TbMushroom } from "react-icons/tb";

export default function NavBar() {
  const [show, toggleShow] = useState(false);

  return (
    <nav className="flex justify-between my-5">
      {/* logo */}
      <div className="flex">
        <div>
          <TbMushroom />
        </div>
        <h4 className="text-[16px] lowercase tracking-tight font-thin">
          cogumelo
          <span className="text-[18px] uppercase tracking-wider font-normal">
            TRINDADE
          </span>{" "}
        </h4>
      </div>
      <ul>
        <li>
          <a href="/prices">Prices</a>
        </li>
        <li>
          <a href="/deliveries">Deliveries</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* user-icon */}
      <div
        className="flex justify-end cursor-pointer focus:bg-teal-600"
        onClick={() => toggleShow(!show)}
      >
        <BiUser />
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

