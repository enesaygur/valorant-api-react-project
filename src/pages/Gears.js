import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGears } from "stores/slices/gears";
import { useTranslation } from "react-i18next";
export default function Gears() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { gears } = useSelector((state) => state.gears);
  const { lang } = useSelector((state) => state.lang);

  useEffect(() => {
    dispatch(getGears(lang));
  }, [lang]);

  return (
    <div className="container mx-auto">
      <div className=" mx-32 my-3 grid grid-rows-2 gap-y-2">
        {gears.length > 0 &&
          gears.map((item, index) => (
            <div
              className="flex bg-gray-100 p-10 rounded-lg dark:bg-black dark:text-white "
              key={index}
            >
              <div className="bg-red-500 flex justify-center items-center align-middle">
                <img className="w-52 h-52" src={item.shopData.newImage} />
              </div>
              <div className="p-4 ">
                <div>
                  <h2 className="text-lg font-bold tracking-tight ">
                    {item.displayName}
                  </h2>
                  <p className="text-sm text-gray-800 dark:text-gray-300 ">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 text-gray-800 dark:text-gray-300 ">
                  <p>
                    {t("Fiyat")}: {item.shopData.cost}
                  </p>
                  <p>
                    {t("Kategori")}: {item.shopData.category}
                  </p>
                  <p>
                    {t("Kategori Yazısı")}: {item.shopData.categoryText}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
