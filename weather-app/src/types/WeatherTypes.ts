export interface Weather {
  description: string;
  code: number;
  icon: string;
}

export interface WeatherData {
  app_max_temp: number;
  app_min_temp: number;
  clouds: number;
  datetime: string; // Формат: YYYY-MM-DD
  dewpt: number;
  high_temp: number;
  low_temp: number;
  pres: number; // Тиск
  rh: number; // Вологість
  temp: number; // Температура
  wind_cdir: string; // Напрямок вітру
  wind_spd: number; // Швидкість вітру
  weather: Weather; // Опис погоди
  precip: number; // Опади
  sunrise_ts: number; // Час сходу сонця в timestamp
  sunset_ts: number; // Час заходу сонця в timestamp
}

// Інтерфейс для даних прогнози
export interface ForecastCardProps {
    forecastData: WeatherData; // Дані про прогноз
}

// Інтерфейс для списку прогнозів
export interface ForecastListProps {
    weatherData: WeatherData[]; // Масив даних про погоду
    city: string;
}

// Інтерфейс для детальної інформації про погоду
export interface WeatherDetailProps {
    forecast: WeatherData; // Вибраний прогноз
}

// Інтерфейс для заголовка погоди
export interface WeatherHeaderProps {
    city: string; // Проп для назви міста
}

// Інтерфейс для пошуку міст
export interface SearchBarProps {
    fetchWeather: (city: string) => void; // Функція для отримання погоди
}