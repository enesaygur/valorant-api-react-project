import React from "react";
import { FaUserCircle, FaShieldAlt, FaMap } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import valorant_home_page_image from "images/valorant_home.jpeg";

export default function Home() {
  const data = [
    {
      title: "Ajanlar",
      icon: (
        <FaUserCircle
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details:
        "Valorant oyununda oynanabilir ajanlar gösterir. Ajanların teknik özellikleri, rolleri, becerileri ve oyunda çıkardığı sesleri içerir.",
      color: "#e75d5d",
    },
    {
      title: "Zırhlar",
      icon: (
        <FaShieldAlt
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details:
        "Valorant oyununda kullanılan zırhlar hakkında bilgi verir. Bu bilgiler zırh adı, açıklaması, fiyatı, kategori, kategori açıklaması gösterir.",
      color: "#e75d5d",
    },
    {
      title: "Haritalar",
      icon: (
        <FaMap
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details:
        "Valorant oyununda kullanılan haritalar hakkında bilgi verir. Bu haritalar karosel ile gösterilmiştir. ",
      color: "#e75d5d",
    },
    {
      title: "Silahlar",
      icon: (
        <GiPistolGun
          size={70}
          className="text-red-500 flex mx-auto h-full dark:text-black"
        />
      ),
      details:
        "Valorant oyunundaki silahların teknik özellikleri ve vücuttaki yarama bilgilerini gösterir.",
      color: "#e75d5d",
    },
  ];
  console.log(data);
  return (
    <div className="w-full h-full bg-red-500 dark:bg-black">
      <div className="flex ">
        <div className="w-8/12">
          <img className="w-full h-[620px]" src={valorant_home_page_image} />
        </div>
        <div className="grid grid-cols-2 px-2 py-4 gap-4 align-middle mx-auto text-justify">
          {data.map((item, index) => (
            <div className="bg-red-400 w-[225px]" key={index}>
              <div className="h-1/2 bg-gray-100">{item.icon}</div>
              <div className="bg-red-600 h-1/2 text-gray-100 break-all">
                <h2 className="font-semibold p-2 ">{item.title}</h2>
                <p className="p-2 text-sm break-normal">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
