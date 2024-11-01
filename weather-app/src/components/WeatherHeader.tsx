import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { WeatherHeaderProps } from '../types/WeatherTypes';
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: 'rgba(30, 30, 47, 1)',
    color: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 1)',
    textAlign: 'center',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    maxWidth: '800px',
    margin: '0 auto',
}));

const WeatherHeader: React.FC<WeatherHeaderProps> = ({ city }) => {
    const { t } = useTranslation();

    return (
        <HeaderContainer>
            <Typography variant="h2" gutterBottom>
                {t('weather_forecast', { city })}
            </Typography>
            <Typography variant="h6">
                {t('learn_more')}
            </Typography>
        </HeaderContainer>
    );
};

export default WeatherHeader;