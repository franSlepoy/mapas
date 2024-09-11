import React, { useState } from "react";
import MapaConflictividad from "./MapaConflictividad";
import InfoBox from "./InfoBox";
import { Box, Typography } from "@mui/material";

const PantallaConflictividad = () => {
  const [highlightedProvince, setHighlightedProvince] = useState(null);

  const handleProvinceHover = (provinceData) => {
    setHighlightedProvince(provinceData);
  };

  return (
    <Box
     
      style={{
        paddingLeft: 100,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box style={{ flex: 1 }}>
        <MapaConflictividad onProvinceHover={handleProvinceHover} />
      </Box>
      <Box style={{ flex: 0.8 }}>
        {highlightedProvince && <InfoBox province={highlightedProvince} />}
      </Box>
    </Box>
  );
};

export default PantallaConflictividad;
