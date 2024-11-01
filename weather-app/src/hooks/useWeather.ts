import { useState, useEffect } from 'react';

const API_KEY = 'dc45391565bd4195b73c47ce63a31f0c';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

const useWeather = (city: string, days: number = 7) => { // Додаємо days з дефолтним значенням 7
    const [weatherData, setWeatherData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!city) {
                setError('Місто не вказане');
                return;
            }
            
            try {
                const response = await fetch(`${BASE_URL}?city=${city}&days=${days}&key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data.data); 
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Невідома помилка');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city, days]); // Додаємо days як залежність

    return { weatherData, loading, error };
};

export default useWeather;