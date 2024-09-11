import  { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import argentinaMap from '../assets/mapa.svg';

// Define las provincias y sus visitas
const provincias = [
  { name: 'Buenos Aires', visitas: 90 },
  { name: 'Ciudad de Buenos Aires', visitas: 62 },
  { name: 'Catamarca', visitas: 1 },
  { name: 'Chaco', visitas: 3 },
  { name: 'Chubut', visitas: 4 },
  { name: 'Córdoba', visitas: 6 },
  { name: 'Corrientes', visitas: 3 },
  { name: 'Entre Ríos', visitas: 4 },
  { name: 'Formosa', visitas: 2 },
  { name: 'Jujuy', visitas: 1 },
  { name: 'La Pampa', visitas: 2 },
  { name: 'La Rioja', visitas: 1 },
  { name: 'Mendoza', visitas: 5 },
  { name: 'Misiones', visitas: 3 },
  { name: 'Neuquén', visitas: 2 },
  { name: 'Río Negro', visitas: 4 },
  { name: 'Salta', visitas: 2 },
  { name: 'San Juan', visitas: 3 },
  { name: 'San Luis', visitas: 2 },
  { name: 'Santa Cruz', visitas: 1 },
  { name: 'Santa Fe', visitas: 5 },
  { name: 'Santiago del Estero', visitas: 3 },
  { name: 'Tierra del Fuego', visitas: 1 },
  { name: 'Tucumán', visitas: 3 },
];

const Mapa2 = () => {
  const mapRef = useRef();

  useEffect(() => {
    // Cargar el SVG del mapa
    d3.xml(argentinaMap).then((data) => {
      const svgNode = data.documentElement;
      const svgElement = d3.select(svgNode);

      // Redimensionar y centrar el mapa
      svgElement.attr('width', '100%')
                .attr('height', 'auto')
                .style('display', 'block')
               

      // Aplicar fondo celeste
      svgElement.style('background-color', '#87CEEB');

      // Seleccionar todas las provincias y aplicar estilos
      svgElement.selectAll('path')
        .attr('fill', '#98FB98') // Verde claro inicial
        .attr('stroke', 'black') // Borde negro
        .attr('stroke-width', 0.5)
        .on('mouseover', function () {
            d3.select(this).transition()
              .duration(200)
              .attr('fill', '#ADFF2F'); // Iluminar al hacer hover
          })
          .on('mouseout', function () {
            const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
            const provinceData = provincias.find(p => p.name === provinceName);
            const visitasCount = provinceData ? provinceData.visitas : 0;
  
            // Restaurar color original
            const colorIntensity = Math.min(355, 250 + visitasCount * 80);
            d3.select(this).transition()
              .duration(200)
              .attr('fill', `rgb(0, ${colorIntensity}, 0)`);
          });

      // Añadir el mapa al DOM
      mapRef.current.appendChild(svgNode);

      // Actualizar los colores y mostrar textos
      updateMap(svgElement);
    });
  }, []);

  const updateMap = (svgElement) => {
    svgElement.selectAll('path')
      .each(function () {
        const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
        const provinceData = provincias.find(p => p.name === provinceName);
        const visitasCount = provinceData ? provinceData.visitas : 0;

        // Oscurecer el color según la cantidad de visitas
        const colorIntensity = Math.min(255, 150 + visitasCount * 20);
        d3.select(this).attr('fill', `rgb(0, ${colorIntensity}, 0)`);

        // Añadir o actualizar el texto dentro de cada provincia
        const bbox = this.getBBox();
        svgElement.select('g')
          .append('text')
          .attr('x', bbox.x + bbox.width / 3)
          .attr('y', bbox.y + bbox.height / 2)
          .attr('text-anchor', 'large')
          .attr('font-size', '18px')
          .attr('fill', 'black')
          .attr('font-weight', 'bold')
          .text(`${provinceName}\n(${visitasCount})`);
      });
  };

  return (
    <div>
   
      <div ref={mapRef} style={{ width: '100%', height: '1000px', overflow:"hidden" }}></div>
    </div>
  );
};

export default Mapa2;
