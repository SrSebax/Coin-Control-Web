import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../context/ThemeContext';

const BackButtonComponent = ({ size = 'medium', sx = {} }) => {
  const navigate = useNavigate();
  const { theme } = useThemeMode();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Tooltip title="Volver" arrow>
      <IconButton
        onClick={handleBack}
        sx={{
          ...sx,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(255, 255, 255, 0.15)`,
          borderRadius: '50%',
          boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          color: theme.text,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: theme.primary,
            color: theme.primary,
            transform: 'scale(1.08)',
            boxShadow: `0 8px 20px ${theme.primary}33`,
          },
        }}
        size={size}
      >
        <ArrowBack fontSize="inherit" />
      </IconButton>
    </Tooltip>
  );
};

export default BackButtonComponent;
