import React from "react";
import { FaUserCircle, FaShieldAlt, FaMap } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import valorant_home_page_image from "images/valorant_home.jpeg";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  const data = [
    {
      title: t('Ajanlar'),
      icon: (
        <FaUserCircle
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details:
      t('Agents Detail Information'),
    },
    {
      title: t("Zırhlar"),
      icon: (
        <FaShieldAlt
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details: t("Gear Detail Information"),
    },
    {
      title: t("Haritalar"),
      icon: (
        <FaMap
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details: t("Gear Detail Information"),
    },
    {
      title: t("Silahlar"),
      icon: (
        <GiPistolGun
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details: t("Weapons Detail Information"),
    },
  ];
  return (
    <div className="w-full h-full bg-red-500 dark:bg-black">
      <div className="flex ">
        <div className="w-8/12">
          <img className="w-full h-[620px]" src={valorant_home_page_image} />
        </div>
        <div className="grid grid-cols-2 px-2 py-4 gap-4  align-middle mx-auto text-left">
          {data.map((item, index) => (
            <div className="bg-red-600 w-[225px]" key={index}>
              <div className="h-2/5 bg-gray-100">{item.icon}</div>
              <div className="bg-red-600 h-auto text-gray-100">
                <h2 className="font-semibold px-2 py-1  ">{item.title}</h2>
                <p className="p-1 text-sm break-normal">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
