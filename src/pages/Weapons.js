import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeapons } from "stores/slices/weapons";
export default function Weapons() {
  const dispatch = useDispatch();
  const { weapons } = useSelector((state) => state.weapons);
  useEffect(() => {
    dispatch(getWeapons());
  }, []);
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
                      Atış Oranı:{" "}
                      {item.weaponStats != null
                        ? item.weaponStats.fireRate
                        : "-"}
                    </p>
                    <p>
                      Şarjör Kapasitesi:{" "}
                      {item.weaponStats != null
                        ? item.weaponStats.magazineSize
                        : "-"}
                    </p>
                    <p>
                      Şarjör Değiştirme Süresi:{" "}
                      {item.weaponStats != null
                        ? item.weaponStats.reloadTimeSeconds
                        : "-"}
                    </p>
                    <p>
                      Fiyat: {item.shopData != null ? item.shopData.cost : "-"}
                    </p>
                    <p>
                      {item.shopData != null
                        ? item.shopData.categoryText
                        : " Melee"}
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
                                  <p>Kafa</p>
                                  <p>{itm.headDamage}</p>
                                </div>
                                <div>
                                  <p>Gövde</p>
                                  <p>{itm.bodyDamage}</p>
                                </div>
                                <div>
                                  <p>Bacak</p>
                                  <p>{itm.legDamage.toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        "ssss"
                      )
                    ) : (
                      <div className="w-full text-red-500 text-center border border-red-400">
                        <div className="w-full text-red-500 text-center border border-red-400">
                          -
                        </div>
                        <div className="grid grid-cols-3  border border-red-400 place-items-center text-red-500">
                          <div className="text-center w-full ">
                            <p>Kafa</p>
                            <p>-</p>
                          </div>
                          <div>
                            <p>Gövde</p>
                            <p>-</p>
                          </div>
                          <div>
                            <p>Bacak</p>
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
