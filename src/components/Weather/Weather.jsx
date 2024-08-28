import React from "react";
import "./Weather.css";

function Weather({ conditionIcon, conditionText }) {
  if (!conditionIcon) {
    return null; // 確保在數據加載之前不渲染任何內容
  }
  // 從 API 返回的 conditionIcon 中提取文件名
  const iconId = conditionIcon.split("/").pop();
  // 使用絕對路徑
  const iconSrc = `/assets/icons/day/${iconId}`;

  console.log("Icon Source Path:", iconSrc); // 調試輸出
  console.log("conditionIcon:", conditionIcon);

  return (
    <div className="weather-condition">
      <img src={iconSrc} alt="weather icon" className="weather-icon" />
      <p className="condition-text">{conditionText}</p>
    </div>
  );
}

export default Weather;
