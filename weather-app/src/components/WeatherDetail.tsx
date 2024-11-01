import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import humidityIcon from '../icons/вологість.png';
import pressureIcon from '../icons/тиск.png';
import windIcon from '../icons/вітер.png';
import precipitationIcon from '../icons/опади.png';
import minIcon from '../icons/мін.png';
import maxIcon from '../icons/max.png';
import temperatureIcon from '../icons/температура.png';
import { WeatherDetailProps } from '../types/WeatherTypes';

const StyledCard = styled(Card)(({ theme }) => ({
    width: '1020px',
    margin: '10px auto', // Центруємо картку
    borderRadius: '15px',
    boxShadow: theme.shadows[8],
    background: 'linear-gradient(145deg, #f9f9f9, #e0e0e0)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    marginBottom: '10px',
    backgroundColor: '#3A3A5A',
    color: 'white',
    fontWeight: 'bold',
}));

const InfoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between', // Використовуємо space-between для рівномірного розподілу
    alignItems: 'center',
    padding: '10px 20px',
}));

const Icon = styled('img')({
    width: '30px',
    height: '30px',
    marginRight: '10px',
});

const WeatherDetail: React.FC<WeatherDetailProps> = ({ forecast }) => {
    const { t } = useTranslation();

    const {
        app_max_temp,
        app_min_temp,
        datetime,
        precip,
        pres,
        rh,
        wind_cdir,
        wind_spd,
        weather,
        sunrise_ts,
        sunset_ts,
        high_temp,
    } = forecast;

    const date = new Date(datetime);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(t('langugage'), options);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" my={3}>
            <StyledCard>
                <CardContent>
                    <StyledChip label={`${t('weatherOn')} ${formattedDate}`} sx={{ marginBottom: 2 }} />

                    <InfoContainer>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon src={temperatureIcon} alt="Температура" />
                            <Typography variant="h4" color="text.primary" sx={{ fontWeight: 'bold' }}>
                                {Math.round(high_temp)} °C
                            </Typography>
                        </Box>
                        <CardMedia
                            component="img"
                            alt={weather.description}
                            image={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
                            sx={{ width: '100px', height: 'auto', marginRight: '20px' }}
                        />
                        <Box
                            sx={{
                                backgroundColor: '#3A3A5A',
                                color: 'white',
                                padding: '30px',
                                borderRadius: '50px',
                                width: '45%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                {weather.description}
                            </Typography>
                        </Box>
                    </InfoContainer>

                    <Grid container spacing={2} sx={{ marginTop: 2, justifyContent: 'center', textAlign: 'center' }}>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={humidityIcon} alt="Вологість" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('humidity')}: {rh} %
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={pressureIcon} alt="Тиск" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('pressure')}: {pres} гПа
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={windIcon} alt="Вітер" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('wind')}: {wind_cdir} {wind_spd} м/с
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={precipitationIcon} alt="Опади" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('precipitation')}: {precip} мм
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={minIcon} alt="Мін" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('minTemp')}: {Math.round(app_min_temp)} °C
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon src={maxIcon} alt="Макс" />
                                <Typography variant="body1" color="#333333" sx={{ fontSize: '1.2rem' }}>
                                {t('maxTemp')}: {Math.round(app_max_temp)} °C
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography variant="body2" color="#666666" align="center" sx={{ marginTop: 2 }}>
                    {t('sunrise')}: {new Date(sunrise_ts * 1000).toLocaleTimeString('uk-UA')} |
                    {t('sunset')}: {new Date(sunset_ts * 1000).toLocaleTimeString('uk-UA')}
                    </Typography>
                </CardContent>
            </StyledCard>
        </Box>
    );
};

export default WeatherDetail;