import React, { useState } from 'react';
import ForecastList from './components/ForecastList';
import useWeather from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import WeatherHeader from './components/WeatherHeader';
import Footer from './components/Footer';
import { CircularProgress, Typography } from '@mui/material';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
    const [city, setCity] = useState<string>('Kyiv');

    const { weatherData, loading, error } = useWeather(city);

    const fetchWeather = (city: string) => {
        setCity(city);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundImage: 'url("https://ideogram.ai/assets/image/lossless/response/cADicXFqTmu4VUbmHvRtNA")', backgroundSize: 'cover' }}>
            
            <div style={{ marginBottom: '20px' }}> {/* Відступ між SearchBar і ForecastList */}
                <WeatherHeader city={city} />
            </div>
            <div style={{ marginBottom: '40px' }}> {/* Відступ між SearchBar і ForecastList */}
                <SearchBar fetchWeather={fetchWeather} />
            </div>
            <div style={{ padding: '20px', position: 'absolute', top: 0, left: 0, color: '#ffffff' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                    Weather UA
                </Typography>
            </div>
            <LanguageSwitcher />

            <div style={{ flex: 1, padding: '20px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </div>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <ForecastList city={city} weatherData={weatherData} />
                )}
            </div>

            <Footer />
        </div>
    );
};

export default App;
