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

    const isSmallScreen = window.innerWidth <= 786;
    const imageSize = isSmallScreen ? `${timeOfDay}/small` : timeOfDay;

    // Set the image path using process.env.PUBLIC_URL
    const baseUrl = process.env.PUBLIC_URL;

    const weatherStyles = {
      clear: {
        codes: [1000],
        image: "clear.jpg",
        nightColor: "var(--midnightBlue)",
        dayColor: "var(--Beige)",
      },
      cloudy: {
        codes: [
          1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282,
        ],
        image: "cloudy.jpg",
        nightColor: "var(--midnightBlue)",
        dayColor: "var(--sunsetOrange)",
      },
      rainy: {
        codes: [
          1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195,
          1204, 1207, 1240, 1243, 1246, 1249, 1252,
        ],
        image: "rainy.jpg",
        nightColor: "var(--deepOcean)",
        dayColor: "var(--sageGreen)",
      },
      snowy: {
        codes: [],
        image: "snowy.jpg",
        nightColor: "var(--charcoalBlack)",
        dayColor: "var(--steelBlue)",
      },
    };

    function applyWeatherStyle(code, timeOfDay) {
      for (const weatherType in weatherStyles) {
        const style = weatherStyles[weatherType];
        if (style.codes.includes(code)) {
          appElement.style.backgroundImage = `url(${baseUrl}/assets/images/${imageSize}/${style.image})`;
          buttonElement.style.background =
            timeOfDay === "night" ? style.nightColor : style.dayColor;
          return;
        }
      }

      const defaultStyle = weatherStyles.snowy;
      appElement.style.backgroundImage = `url(${baseUrl}/assets/images/${imageSize}/${defaultStyle.image})`;
      buttonElement.style.background =
        timeOfDay === "night" ? defaultStyle.nightColor : defaultStyle.dayColor;
    }

    applyWeatherStyle(code, timeOfDay);
  }, [weatherData]);

  return null;
};

export default StyleUpdater;
