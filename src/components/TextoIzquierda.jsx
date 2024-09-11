import { Box, Typography } from "@mui/material";

const TextoIzquierda = () => {
  return (
    <>
      <Box ml={10} mt={15} position={"absolute"}>
        <Box>
          <Typography
            width={"380px"}
            fontFamily="Inter"
            fontSize="45px"
            fontWeight="800"
            lineHeight="45px"
            color="rgba(255, 255, 255, 1)"
          >
            Evolución de la obra pública
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily="Inter"
            fontSize="45px"
            fontWeight="800"
            lineHeight="45px"
            color="rgba(8, 181, 255, 1)"
          >
            Lorem sitr
          </Typography>
        </Box>
        <Box>
          <Typography
            mt={4}
            width={"200px"}
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            lineHeight="15px"
            color="rgba(255, 255, 255, 1)"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor quam eget euismod malesuada. Nulla egestas, velit sed
            efficitur pretium, massa velit mattis quam, in porta massa ligula ut
            nulla.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TextoIzquierda;
