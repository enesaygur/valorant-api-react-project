import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setDarkMode } from "stores/slices/theme";
import { setLang } from "stores/slices/lang";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { darkMode } = useSelector((state) => state.theme);
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  
  const { i18n, t } = useTranslation();
  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
                    {t("Anasayfa")}
                  </li>
                </NavLink>
                <NavLink to='/agents'>
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                  {t("Ajanlar")}
                  </li>
                </NavLink>
                <NavLink to='/gears'>
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                  {t("Zırh")}
                  </li>
                </NavLink>
                <NavLink to="/maps">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                  {t("Haritalar")}
                  </li>
                </NavLink>
                <NavLink to="/weapons">
                  <li className="text-red-500 text-base transition-colors hover:bg-red-600 hover:text-white p-2 rounded-lg">
                  {t("Silahlar")}
                  </li>
                </NavLink>
              </ul>
            </nav>
            <div className="flex items-center justify-center">
              <select className="bg-red-500 text-white p-1 rounded-lg "
                id="Language"
                value={lang}
                onChange={(e) => {
                  onChangeLanguage(e.target.value);
                  dispatch(setLang(e.target.value));
                }}
              >
                <option value="tr-TR">Türkçe</option>
                <option value="en-US">English</option>
                <option value="de-DE">Deutsch</option>
              </select>
            </div>
            <button
              onClick={() => dispatch(setDarkMode())}
              className="text-red-500 transition-all"
            >
              {!darkMode ? <FaToggleOff size={25} /> : <FaToggleOn size={25} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
