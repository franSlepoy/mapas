import React, { useState } from 'react';
import Mapa from './Mapa';
import { Typography, Box } from '@mui/material';

const PantallaMapas = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceHover = (provinceData) => {
    setSelectedProvince(provinceData);
  };

  return (
    <div style={{ backgroundColor: 'rgba(18, 9, 124, 1)', display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <Mapa type="conflictividad" onProvinceHover={handleProvinceHover} />
      </div>
      <div style={{ width: '50%', height: '100%' }}>
        <Mapa type="resolución" onProvinceHover={handleProvinceHover} />
      </div>
      <div style={{ width: '30%', color: 'white', padding: '20px', overflow: 'auto' }}>
        {selectedProvince && (
          <Box>
            <Typography variant="h6" component="h2">{selectedProvince.name}</Typography>
            <Typography variant="body1">Conflictividad: {selectedProvince.conflictividad}</Typography>
            <Typography variant="body1">Resolución: {selectedProvince.resolución}</Typography>
            {/* Aquí puedes agregar más detalles e imágenes si es necesario */}
          </Box>
        )}
      </div>
    </div>
  );
};

export default PantallaMapas;
