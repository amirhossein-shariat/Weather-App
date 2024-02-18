import React, { useEffect, useState } from "react";

export const Image = ({ weather }) => {
  const [image, setImage] = useState();
  useEffect(() => {findImage()});
  const findImage = () => {
    switch (weather.image) {
      case "04d":
        setImage("../src/assets/brokenclouds.png");
        break;
      case "04n":
        setImage("../src/assets/brokenclouds.png");
        break;
      case "03d":
        setImage("../src/assets/scatteredclouds.png");
        break;
      case "03n":
        setImage("../src/assets/scatteredclouds.png");
        break;
      case "09d":
        setImage("../src/assets/showerrain.png");
        break;
      case "09n":
        setImage("../src/assets/showerrain.png");
        break;
      case "10d":
        setImage("../src/assets/rain.png");
        break;
      case "10n":
        setImage("../src/assets/rain.png");
        break;
      case "11d":
        setImage("../src/assets/thunderstorm.png");
        break;
      case "11n":
        setImage("../src/assets/thunderstorm.png");
        break;
      case "50d":
        setImage("../src/assets/mist.png");
        break;
      case "50n":
        setImage("../src/assets/mist.png");
        break;
      case "13d":
        setImage("../src/assets/snow.png");
        break;
      case "13n":
        setImage("../src/assets/snow.png");
        break;
      case "01d":
        setImage("../src/assets/sunny.png");
        break;
      case "01n":
        setImage("../src/assets/moon.png");
        break;

      default:
        return null;
    }
  };

  return (
    <div>
      <img className="h-72" src={image} alt="" />
    </div>
  );
};
