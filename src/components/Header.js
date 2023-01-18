import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setDarkMode } from "stores/slices/theme";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
export default function Header() {
  const { darkMode } = useSelector((state) => state.theme);
  const [selected, setSelected] = useState("TR");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-gray-100 items-center font-serif z-10 dark:bg-black">
        <div className="container mx-auto justify-between flex">
          <NavLink to="/">
            <div className="flex items-center h-[55px]">
              <img
                className="w-11 h-11"
                src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"
              ></img>
              <h2 className="text-2xl pl-2 text-red-500 font-bold">
                VALORANT API
              </h2>
            </div>
          </NavLink>
          <div className="flex items-center justify-center gap-x-6">
            <nav className="flex items-center">
              <ul className="grid grid-cols-5 gap-x-2 text-center">
                <NavLink to="/">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-xl ">
                    Anasayfa
                  </li>
                </NavLink>
                <NavLink to="/agents">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                    Ajanlar
                  </li>
                </NavLink>
                <NavLink to="/gears">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                    Zırh
                  </li>
                </NavLink>
                <NavLink to="/maps">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                    Haritalar
                  </li>
                </NavLink>
                <NavLink to="/weapons">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                    Silahlar
                  </li>
                </NavLink>
              </ul>
            </nav>
            <div className="flex items-center justify-center">
              <ReactFlagsSelect
                countries={["TR", "US"]}
                customLabels={{
                  TR: "Türkçe",
                  US: "English",
                }}
                placeholder="Select Language"
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select w-[150px] bg-red-600 h-10 rounded-lg px-3 my-1"
              />
            </div>
            <button
              onClick={() => dispatch(setDarkMode())}
              className="text-red-500 transition-all"
            > {!darkMode ? ( <FaToggleOff size={25}/>) : ( <FaToggleOn size={25} />)}   
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
