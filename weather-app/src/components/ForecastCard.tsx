import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ForecastCardProps } from '../types/WeatherTypes';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '135px',
    height: '300x',
    margin: '5px',
    borderRadius: '15px',
    boxShadow: theme.shadows[8],
    background: 'linear-gradient(145deg, #f9f9f9, #e0e0e0)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[15],
    },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    marginBottom: '10px',
    backgroundColor: '#3A3A5A',
    color: 'white',
    fontWeight: 'bold',
}));

const ForecastCard: React.FC<ForecastCardProps> = ({ forecastData }) => {
    const { t } = useTranslation();
    const date = new Date(forecastData.datetime);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const formattedDay = date.toLocaleDateString(t('langugage'), options);
    const dayNumber = date.getDate();
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'long' };
    const formattedMonth = date.toLocaleDateString(t('langugage'), monthOptions);

    return (
        <StyledCard>
            <CardContent>
                <StyledChip label={formattedDay} />
                <CardMedia
                    component="img"
                    alt={forecastData.weather.description}
                    height="70"
                    image={`https://www.weatherbit.io/static/img/icons/${forecastData.weather.icon}.png`}
                />
                <Typography variant="h6" color="text.primary" align="center" fontSize="1rem" sx={{ color: '#333' }}>
                    {dayNumber} {formattedMonth}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" fontSize="0.875rem" sx={{ color: '#555' }}>
                    {forecastData.weather.description}
                </Typography>
                <Typography variant="h4" color="#ff5722" align="center" fontSize="1.5rem">
                    {Math.round(forecastData.temp)} °C
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" fontSize="0.875rem" sx={{ color: '#555' }}>
                {t('minTemp')}: {Math.round(forecastData.app_min_temp)} °C, {t('maxTemp')}: {Math.round(forecastData.app_max_temp)} °C
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default ForecastCard;