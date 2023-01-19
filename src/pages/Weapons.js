import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeapons } from "stores/slices/weapons";
import { useTranslation } from "react-i18next";
export default function Weapons() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { weapons } = useSelector((state) => state.weapons);
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    dispatch(getWeapons(lang));
  }, [lang]);
  return (
    <div className="!overflow-scroll !h-screen">
      <div className="container mx-auto my-4 mb-24">
        <div className="grid grid-cols-2 gap-2 mx-16 pt-4">
          {weapons.length > 0 &&
            weapons.map((item, index) => (
              <div
                className="border-none bg-gray-100 w-full h-[420px] rounded-lg dark:bg-black"
                key={index}
              >
                <img
                  className="w-full h-[120px] p-3 px-16 rounded-xl"
                  src={item.displayIcon}
                />
                <div className="text-center mx-auto my-4">
                  <h2 className="w-1/4 m-auto bg-red-500 justify-center rounded-lg text-gray-100 font-bold p-1">
                    {item.displayName}
                  </h2>
                  <div className="text-red-500">
                    <p>
                    {t('Atış Oranı')}:
                      {item.weaponStats != null
                        ? item.weaponStats.fireRate.toFixed(2)
                        : "-"}
                    </p>
                    <p>
                      {t('Şarjör Kapasitesi')}:
                      {item.weaponStats != null
                        ? item.weaponStats.magazineSize
                        : "-"}
                    </p>
                    <p>
                      {t('Şarjör Değiştirme Süresi')}:
                      {item.weaponStats != null
                        ? item.weaponStats.reloadTimeSeconds
                        : "-"}
                    </p>
                    <p>
                      {t('Fiyat')}: {item.shopData != null ? item.shopData.cost : "-"}
                    </p>
                    <p>
                      {item.shopData != null
                        ? item.shopData.categoryText
                        : item.displayName}
                    </p>
                  </div>
                </div>
                <div className="w-full justify-center items-center">
                  <div className="flex justify-center px-2">
                    {item.weaponStats != null ? (
                      item.weaponStats.damageRanges != null ? (
                        item.weaponStats.damageRanges.map((itm, index) => (
                          <div key={index} className="w-full">
                            <div className="w-full text-center border border-red-400 text-red-500">
                              {itm.rangeStartMeters}-{itm.rangeEndMeters}
                            </div>
                            <div className="w-full">
                              <div className="grid grid-cols-3  border border-red-400 place-items-center text-red-500">
                                <div className="text-center w-full ">
                                  <p>{t('Kafa')}</p>
                                  <p>{itm.headDamage.toFixed(0)}</p>
                                </div>
                                <div>
                                  <p>{t('Gövde')}</p>
                                  <p>{itm.bodyDamage.toFixed(0)}</p>
                                </div>
                                <div>
                                  <p>{t('Bacak')}</p>
                                  <p>{itm.legDamage.toFixed(0)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        "-"
                      )
                    ) : (
                      <div className="w-full text-red-500 text-center border border-red-400">
                        <div className="w-full text-red-500 text-center border border-red-400">
                          -
                        </div>
                        <div className="grid grid-cols-3  border border-red-400 place-items-center text-red-500">
                          <div className="text-center w-full ">
                            <p>{t('Kafa')}</p>
                            <p>-</p>
                          </div>
                          <div>
                            <p>{t('Gövde')}</p>
                            <p>-</p>
                          </div>
                          <div>
                            <p>{t('Bacak')}</p>
                            <p>-</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
