import React from "react";
import TextoIzquierda from "./TextoIzquierda";
import PantallaConflictividad from "./PantallaConflictividad";
import { Box } from "@mui/material";

const MapaDeArgentina = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom right, rgba(18, 9, 124, 1), rgba(0, 0, 2, 1))",
        }}
      >
        <TextoIzquierda />
        <PantallaConflictividad />
      </Box>
    </>
  );
};

export default MapaDeArgentina;
