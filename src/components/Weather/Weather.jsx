import { useEffect } from "react";
import "./Weather.css";

const Weather = ({ weatherData }) => {
  useEffect(() => {
    if (!weatherData) return;

    const appElement = document.querySelector(".container");
    const buttonElement = document.querySelector(".submit");

    if (!appElement || !buttonElement) return;

    const code = weatherData.current.condition.code;
    let timeOfDay = weatherData.current.is_day ? "day" : "night";

    // 設置背景圖片樣式
    appElement.style.backgroundSize = "cover"; // 確保圖片覆蓋整個容器
    appElement.style.backgroundPosition = "center"; // 讓圖片居中顯示
    appElement.style.height = "100vh"; // 讓容器高度填滿整個視窗

    if (code === 1000) {
      appElement.style.backgroundImage = `url(/assets/images/${timeOfDay}/clear.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "#181e27" : "#e5ba92";
    } else if (
      [
        1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282,
      ].includes(code)
    ) {
      appElement.style.backgroundImage = `url(/assets/images/${timeOfDay}/cloudy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "#181e27" : "#fa6d1b";
    } else if (
      [
        1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204,
        1207, 1240, 1243, 1246, 1249, 1252,
      ].includes(code)
    ) {
      appElement.style.backgroundImage = `url(/assets/images/${timeOfDay}/rainy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "#325c80" : "#647d75";
    } else {
      appElement.style.backgroundImage = `url(/assets/images/${timeOfDay}/snowy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "#1b1b1b" : "#4d72aa";
    }
  }, [weatherData]);

  return null; // This component does not render anything directly
};

export default Weather;
