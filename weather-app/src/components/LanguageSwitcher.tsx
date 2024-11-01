import React, { useState } from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsIcon from '@mui/icons-material/Settings';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleClose(); // Закриваємо меню після зміни мови
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: 'absolute', top: 16, right: 16 }}> {/* Позиціюємо іконку в правому верхньому куті */}
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => switchLanguage('uk')}>Українська</MenuItem>
        <MenuItem onClick={() => switchLanguage('en')}>English</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
