import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getMaps } from "stores/slices/maps";
export default function Maps() {
  const dispatch = useDispatch();
  const { maps } = useSelector((state) => state.maps);

  useEffect(() => {
    dispatch(getMaps());
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto my-2 py-3">
      <Slider {...settings} className=" flex justify-center ">
        {maps.length > 0 &&
          maps.map((item, index) => (
            <div key={index} className="border-none">
              <img
                className="w-full h-[585px] object-cover rounded-xl"
                src={item.splash}
                alt={item.displayName}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}