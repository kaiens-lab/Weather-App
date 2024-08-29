import React from "react";

const Icon = ({ conditionIcon, isDay }) => {
  if (!conditionIcon) {
    return null; // 确保 conditionIcon 存在
  }

  const timeOfDay = isDay ? "day" : "night";
  const iconId = conditionIcon.split("/").pop(); // 从 conditionIcon 中提取文件名

  // 使用提取的文件名和 timeOfDay 构建路径
  const iconPath = `/assets/icons/${timeOfDay}/${iconId}`;

  return <img src={iconPath} alt="Weather Icon" className="weather-icon" />;
};

export default Icon;
