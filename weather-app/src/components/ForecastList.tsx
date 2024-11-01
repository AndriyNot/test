import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Button, Box } from '@mui/material';
import ForecastCard from './ForecastCard';
import WeatherDetail from './WeatherDetail';
import useWeather from '../hooks/useWeather';
import { ForecastListProps, WeatherData } from '../types/WeatherTypes';

const ForecastList: React.FC<ForecastListProps> = ({ city }) => {
    const [selectedForecast, setSelectedForecast] = useState<WeatherData | null>(null);
    const [forecastDays, setForecastDays] = useState(7); // Стан для кількості днів прогнозу

    // Викликаємо хук із кількістю днів `forecastDays`
    const { weatherData, loading, error } = useWeather(city, forecastDays);

    const handleCardClick = (forecast: WeatherData) => {
        setSelectedForecast(forecast);
    };

    const toggleForecastDays = () => {
        setForecastDays(prevDays => (prevDays === 7 ? 10 : 7)); // Перемикаємо між 7 і 10 днями
    };

    const { t } = useTranslation();

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Grid container spacing={2} justifyContent="center">
                {weatherData.map((day, index) => (
                    <Grid item xs={12} sm={6} md={2} lg={1} key={index}>
                        <div onClick={() => handleCardClick(day)}>
                            <ForecastCard forecastData={day} />
                        </div>
                    </Grid>
                ))}
            </Grid>

            <Grid item>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            backgroundColor: 'rgba(30, 30, 47, 1)', 
                            color: '#ffffff', 
                            marginTop: '-625px', 
                        }} 
                        onClick={toggleForecastDays}
                    >
                        {forecastDays === 7 ? '10' : '7'} {t('days')}
                    </Button>
                </Grid>

            {selectedForecast && (
                <Box display="flex" justifyContent="center" width="100%">
                    <Box width="80%"> {/* Додаємо внутрішній Box для обмеження ширини */}
                        <WeatherDetail forecast={selectedForecast} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ForecastList;
