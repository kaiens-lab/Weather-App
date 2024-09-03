# Weather App

一個使用 React 開發的簡單天氣應用程式，根據所選城市顯示天氣資訊。  
該應用程式從 WeatherAPI 獲取天氣數據，用戶可以搜尋不同的城市並獲取即時天氣更新。  
A simple weather app made with React. It shows weather information for the city you choose.  
The app gets weather data from WeatherAPI, and you can search for different cities to see the current weather.

## 目錄 / Table of contents

- [Weather App](#weather-app)
  - [目錄 / Table of contents](#目錄--table-of-contents)
  - [功能特點 / Features](#功能特點--features)
    - [連結 Link](#連結-link)
    - [安裝 / Installation](#安裝--installation)
    - [專案結構與元件 / Structure \& Components](#專案結構與元件--structure--components)
    - [API 使用 / API Usage](#api-使用--api-usage)

## 功能特點 / Features

![ScreenShot-Berlin](/screenshots/ScreenShot-Berlin.jpeg)

![ScreenShot-Singapore](/screenshots/ScreenShot-Singapore.jpeg)

![ScreenShot-Taipei](/screenshots/ScreenShot-Taipei.jpeg)

![ScreenShot-NewYork](/screenshots/ScreenShot-NewYork.jpeg)

![ScreenShot-ClearNight](/screenshots/ScreenShot-ClearNight.jpeg)

- **即時天氣更新 / Real-time Weather Updates:**  
  顯示即時天氣數據。

- **多城市搜尋 / Multiple City Search:**  
  用戶可以根據城市搜尋天氣資訊。

- **動態背景 / Dynamic Backgrounds:**  
  根據天氣條件動態變更背景圖片。

- **圖示與資訊 / Icons & Details:**  
  顯示適當的天氣圖示以及天氣資訊，如溫度、濕度、風速等。

### 連結 Link

- Live Site URL: [Weather App](https://kaiens-lab.github.io/Weather-App/)

---

### 安裝 / Installation

1. **克隆此專案 / Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. **進入專案目錄 / Navigate to the project directory:**
   ```bash
   cd weather-app
   ```
3. **安裝相依套件 / Install dependencies:**
   ```bash
    npm install
   ```
4. **在專案根目錄中創建 .env 文件並添加您的 API 金鑰**  
   **Create a .env file in the root directory and add your API key:**
   ```makefile
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
5. **啟動應用程式 / Start the application:**

   ```bash
   npm start
   ```

開啟瀏覽器並輸入 http://localhost:3000 查看應用程式。  
 Open your browser and go to http://localhost:3000 to see the app.

### 專案結構與元件 / Structure & Components

---

- **App.js**: 處理狀態管理並渲染主要元件。  
  Handles state management and renders the main components.

- **components**: 包含應用程式的所有可重用元件。  
  Contains all reusable components of the application.

  - **CityInfo.jsx:** 顯示城市名稱、當地時間、天氣狀況和圖示。  
    Displays city name, local time, weather condition, and icons.

  - **WeatherPanel.jsx:** 包含搜尋框並顯示額外天氣詳情。  
    Contains the search box and displays additional weather details.

  - **StyleUpdater.jsx:** 根據天氣動態更新背景。  
    Dynamically updates the background based on weather conditions.

### API 使用 / API Usage

---

- 此應用程式使用 [WeatherAPI](https://www.weatherapi.com/) 來獲取即時天氣數據。  
  The app uses the WeatherAPI to fetch real-time weather data.

- API 金鑰儲存在環境變數中以確保安全性。  
  The API key is stored in an environment variable for security purposes.

- App.js 中的 fetchWeatherData 函數負責處理 API 呼叫並管理錯誤。  
  The fetchWeatherData function in App.js handles the API call and manages errors.
