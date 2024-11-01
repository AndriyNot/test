import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'rgba(30, 30, 47, 1)', // Напівпрозорий фон
    color: '#ffffff',
    borderTop: '1px solid #ccc',
    position: 'relative',
    marginTop: 'auto',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: '10px',
}));

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer>
            <StyledTypography variant="body1">
                © {new Date().getFullYear()} Weather UA
            </StyledTypography>
            <StyledTypography variant="body2">
                {t('contacts')}: <span style={{ color: '#61dafb', textDecoration: 'underline' }}>goloas@gmail.com</span>
            </StyledTypography>
            <StyledTypography variant="body2">
            {t('all_rights_reserved')}.
            </StyledTypography>
        </FooterContainer>
    );
};

export default Footer;