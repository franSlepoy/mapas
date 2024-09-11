import { Box, Typography } from '@mui/material'
import React from 'react'
import Visitas from './Visitas'
import Visitas2 from './Visitas2'

const MapaDeArgentina1 = () => {
  return (
    <>
          <Box
      sx={{
        background:
          "linear-gradient(to bottom right, rgba(18, 9, 124, 1), rgba(0, 0, 2, 1))",
      }}
    >
   

       <Box display={"flex"}>
        <Box
          position={"absolute"}
          width={"220px"}
          height={"200px"}
          sx={{
            left: "30%",
            mt: 20,
            ml: 2,
            p: "20px",
            border: "1px solid rgba(18, 9, 124, 1)",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
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
        </Box>

        <Box
          position={"absolute"}
          width={"220px"}
          height={"200px"}
          sx={{
            left: "80%",
            mt: 20,
            ml: 2,
            p: "20px",
            border: "1px solid rgba(18, 9, 124, 1)",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 1)",
          }}
        >
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
        </Box>

        <Visitas />
        <Visitas2 />
      </Box> 
    </Box>
    </>
  )
}

export default MapaDeArgentina1
