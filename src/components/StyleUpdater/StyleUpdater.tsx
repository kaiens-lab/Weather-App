import React, { useEffect, useMemo } from "react";
import "./StyleUpdater.css";
import { WeatherData } from "../../types";

/*------------------------Weather Component------------------------*/
//Function: Update the background and button styles based on the weather data
//obtained from weatherData.

type StyleUpdaterProps = {
  weatherData: WeatherData;
};

const StyleUpdater: React.FC<StyleUpdaterProps> = ({ weatherData }) => {
  const baseUrl = process.env.PUBLIC_URL;

  // Calculate the background image and button color using useMemo.
  const { backgroundImage, buttonBackground } = useMemo(() => {
    if (!weatherData) return { backgroundImage: "", buttonBackground: "" };

    const { code } = weatherData.current.condition;
    const timeOfDay = weatherData.current.is_day ? "day" : "night";
    const isSmallScreen = window.innerWidth <= 786;
    const imageSize = isSmallScreen ? `${timeOfDay}/small` : timeOfDay;

    // Weather Code & Style
    const weatherStyles: Record<
      string,
      { codes: number[]; image: string; nightColor: string; dayColor: string }
    > = {
      clear: {
        codes: [1000],
        image: "clear.jpg",
        nightColor: "var(--midnightBlue)",
        dayColor: "var(--Beige)",
      },
      cloudy: {
        codes: [1003, 1006, 1009],
        image: "cloudy.jpg",
        nightColor: "var(--midnightBlue)",
        dayColor: "var(--sunsetOrange)",
      },
      rainy: {
        codes: [1063, 1150, 1183],
        image: "rainy.jpg",
        nightColor: "var(--deepOcean)",
        dayColor: "var(--sageGreen)",
      },
      snowy: {
        codes: [1114, 1213, 1225],
        image: "snowy.jpg",
        nightColor: "var(--charcoalBlack)",
        dayColor: "var(--steelBlue)",
      },
    };

    // Find the corresponding weather style.
    let selectedStyle = weatherStyles.clear; // Default weather
    for (const type in weatherStyles) {
      if (weatherStyles[type].codes.includes(code)) {
        selectedStyle = weatherStyles[type];
        break;
      }
    }

    return {
      backgroundImage: `url(${baseUrl}/assets/images/${imageSize}/${selectedStyle.image})`,
      buttonBackground:
        timeOfDay === "night"
          ? selectedStyle.nightColor
          : selectedStyle.dayColor,
    };
  }, [weatherData, baseUrl]);

  useEffect(() => {
    if (!weatherData) return;

    const container = document.querySelector(".container") as HTMLElement;
    const button = document.querySelector("button") as HTMLElement | null;

    if (!container || !button) return;
    container.style.backgroundImage = backgroundImage;
    button.style.background = buttonBackground;
  }, [backgroundImage, buttonBackground, weatherData]);

  return null;
};

export default StyleUpdater;
