import Home from "./components/Home";
import MapaDeArgentina from "./components/MapaDeArgentina";
import MapaDeArgentina1 from "./components/MapaDeArgentina1";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa1" element={<MapaDeArgentina />} />
          <Route path="/mapa2" element={<MapaDeArgentina1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
