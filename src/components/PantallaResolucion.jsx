import React, { useState } from 'react';
import MapaResolucion from './MapaResolucion';
import InfoBox from './InfoBox';
import { Box } from '@mui/material';

const PantallaResolucion = () => {
  const [highlightedProvince, setHighlightedProvince] = useState(null);

  const handleProvinceHover = (provinceData) => {
    setHighlightedProvince(provinceData);
  };

  return (
    <Box style={{ backgroundColor: 'rgba(18, 9, 124, 1)', paddingLeft: 100, display: 'flex', justifyContent: 'space-between' }}>
      <Box style={{ flex: 1 }}>
        <MapaResolucion onProvinceHover={handleProvinceHover} />
      </Box>
      <Box style={{ flex: 0.8 }}>
        {highlightedProvince && <InfoBox province={highlightedProvince} />}
      </Box>
    </Box>
  );
};

export default PantallaResolucion;
