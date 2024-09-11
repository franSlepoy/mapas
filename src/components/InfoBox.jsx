import React from "react";
import { Box, Typography } from "@mui/material";

const InfoBox = ({ province }) => {
  const getColorForConflictividad = (value) => {
    switch (value) {
      case "alta":
        return "rgba(255, 97, 8, 1)";
      case "media":
        return "rgba(255, 142, 78, 1)";
      case "baja":
        return "rgba(255, 198, 166, 1)";
      default:
        return "rgba(255, 142, 78, 1)";
    }
  };

  const getColorForResolucion = (value) => {
    switch (value) {
      case "alta":
        return "rgba(1, 220, 22, 1)";
      case "media":
        return "rgba(107, 236, 120, 1)";
      case "baja":
        return "rgba(210, 225, 212, 1)";
      default:
        return "rgba(107, 236, 120, 1)";
    }
  };

  const conflictividadColor = getColorForConflictividad(
    province.conflictividad
  );
  const resolucionColor = getColorForResolucion(province.resolución);

  return (
    <Box
      width={"550px"}
      height={"720px"}
      sx={{
        mt: 20,
        ml: 2,
        p: "50px",
        border: "1px solid rgba(18, 9, 124, 1)",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <Typography
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="800"
        lineHeight="25px"
        color="rgba(58, 52, 130, 1)"
      >
        {province.name}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
        {/* Columna de Conflictividad */}
        <Box sx={{ width: "50%" }}>
          <Typography
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="800"
            lineHeight="25px"
            color="rgba(255, 97, 8, 1)"
            width={"150px"}
          >
            Conflictividad con Nación
          </Typography>

          <Box display={"flex"}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(255, 97, 8, 1)"}
            ></Box>
            <Typography
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              color="rgba(255, 97, 8, 1)"
              ml={1}
            >
              Alta
            </Typography>
          </Box>
          <Box display={"flex"} mt={-3}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(255, 142, 78, 1)"}
            ></Box>
            <Typography
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              color="rgba(255, 142, 78, 1)"
              ml={1}
            >
              Media
            </Typography>
          </Box>
          <Box display={"flex"} mt={-3}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(255, 206, 178, 1)"}
            ></Box>
            <Typography
              color="rgba(255, 206, 178, 1)"
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              ml={1}
            >
              Baja
            </Typography>
          </Box>

          <Box
            sx={{
              width: "90px",
              height: "90px",
              backgroundColor: getColorForConflictividad(
                province.conflictividad
              ),
              marginLeft: "8px",
              borderRadius: "100%",
            }}
          />
        </Box>

        {/* Columna de Resolución */}
        <Box sx={{ width: "50%" }}>
          <Typography
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="800"
            lineHeight="25px"
            color="rgba(1, 220, 22, 1)"
            width={"150px"}
          >
            Reactivación de la OP:
          </Typography>

          <Box display={"flex"}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(1, 220, 22, 1)"}
            ></Box>
            <Typography
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              ml={1}
              color="rgba(1, 220, 22, 1)"
            >
              Alta
            </Typography>
          </Box>
          <Box display={"flex"} mt={-3}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(107, 236, 120, 1)"}
            ></Box>
            <Typography
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              ml={1}
              color="rgba(107, 236, 120, 1)"
            >
              Media
            </Typography>
          </Box>
          <Box display={"flex"} mt={-3}>
            <Box
              mt={"18px"}
              width={"10px"}
              height={"10px"}
              bgcolor={"rgba(210, 225, 212, 1)"}
            ></Box>
            <Typography
              fontFamily="Inter"
              fontSize="15px"
              fontWeight="400"
              lineHeight="45px"
              color="rgba(210, 225, 212, 1)"
              ml={1}
            >
              Baja
            </Typography>
          </Box>

          <Box
            sx={{
              width: "90px",
              height: "90px",
              backgroundColor: getColorForResolucion(province.resolución),
              borderRadius: "100%",
            }}
          />
        </Box>
      </Box>
      <Box ml={-3} mt={4}>
        <img width={"100%"} src={province.imagen} alt="" />
      </Box>
    </Box>
  );
};

export default InfoBox;
