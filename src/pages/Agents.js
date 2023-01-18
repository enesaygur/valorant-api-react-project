import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgents } from "stores/slices/agents";
export default function Agents() {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.agents);

  useEffect(() => {
    dispatch(getAgents());
  }, []);
  return (
    <div className="bg-red-500 overflow-scroll !h-screen">
      <div className="container mx-auto grid grid-cols-5 gap-4 pt-4 mb-24 ">
        {agents.length > 0 &&
           agents.map((item, index) => (
            <div className="w-60 h-72 bg-gray-100 dark:bg-black" key={index}>
              <h2 className="p-1 mt-2 w-1/2 text-center mx-auto rounded-lg text-white font-semibold bg-red-500">
                {item.displayName}
              </h2>
              <img
                className="p-6 rounded-full"
                src={item.displayIcon}
                alt={item.displayName}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
