import React, {useState} from "react"

function TestApp() {
  const [show, toggleShow] = useState(false)

  return (
    <div>
      <button
        className="p-3 border border-white text-white  hover:scale-105"
        onClick={() => toggleShow(!show)}
      >
        {show ? "Hide Menu" : "Show Menu"}
      </button>
      {show && (
        <div className="p-[22.5px] rounded-b-xl absolute border border-white text-white transition-all duration-700 ease-in-out text-">
          <ul>
            <li className="cursor-pointer hover:text-purple-300 hover:scale-105">
              settings
            </li>
            <li className="cursor-pointer hover:text-purple-300 hover:scale-105">
              profile
            </li>
            <li className="cursor-pointer hover:text-purple-300 hover:scale-105">
              logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TestApp;