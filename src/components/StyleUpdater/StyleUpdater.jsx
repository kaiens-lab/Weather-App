import { useEffect } from "react";
import "./StyleUpdater.css";

/*------------------------Weather Component------------------------*/
//Function: Update the background and button styles based on the weather data
//obtained from weatherData.

const StyleUpdater = ({ weatherData }) => {
  useEffect(() => {
    if (!weatherData) return;

    const appElement = document.querySelector(".container");
    const buttonElement = document.querySelector(".submit");

    if (!appElement || !buttonElement) return;

    const code = weatherData.current.condition.code;
    let timeOfDay = weatherData.current.is_day ? "day" : "night";

    // Background image styles
    appElement.style.backgroundSize = "cover";
    appElement.style.backgroundPosition = "center";
    appElement.style.height = "100vh";

    if (code === 1000) {
      appElement.style.backgroundImage = `url(/Weather-App/assets/images/${timeOfDay}/clear.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "var(--midnightBlue)" : "var(--Beige)";
    } else if (
      [
        1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282,
      ].includes(code)
    ) {
      appElement.style.backgroundImage = `url(/Weather-App/assets/images/${timeOfDay}/cloudy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "var(--midnightBlue)" : "var(--sunsetOrange)";
    } else if (
      [
        1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204,
        1207, 1240, 1243, 1246, 1249, 1252,
      ].includes(code)
    ) {
      appElement.style.backgroundImage = `url(/Weather-App/assets/images/${timeOfDay}/rainy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "var(--deepOcean)" : "var(--sageGreen)";
    } else {
      appElement.style.backgroundImage = `url(/Weather-App/assets/images/${timeOfDay}/snowy.jpg)`;
      buttonElement.style.background =
        timeOfDay === "night" ? "var(--charcoalBlack)" : "var(--steelBlue)";
    }
  }, [weatherData]);

  return null; // This component does not render anything directly
};

export default StyleUpdater;
