import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import argentinaMap from '../assets/mapa.svg';

const Mapa1 = () => {
  const mapRef = useRef();
  const [visitas, setVisitas] = useState({
    "Entre Ríos": 0,
    "Buenos Aires": 0,
    // Agrega aquí las demás provincias
  });

  useEffect(() => {
    // Cargar el SVG del mapa
    d3.xml(argentinaMap).then((data) => {
      const svgNode = data.documentElement;
      if (mapRef.current.children.length === 0) {
        mapRef.current.appendChild(svgNode);
      }

      // Seleccionar todas las provincias (asumiendo que están en elementos <path>)
      const paths = d3.select(mapRef.current).selectAll('path');

      // Configurar escala de color para las visitas
      const colorScale = d3.scaleSequential(d3.interpolateBlues)
        .domain([0, d3.max(Object.values(visitas)) || 1]);

      paths
        .on('click', function () {
          const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
          handleProvinceClick(provinceName);
        })
        .each(function () {
          const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
          const visitCount = visitas[provinceName] || 0;

          // Colorear la provincia según el número de visitas
          d3.select(this).attr('fill', colorScale(visitCount));

          // Agregar texto con el nombre de la provincia y el número de visitas
          d3.select(this.parentNode)
            .append('text')
            .attr('x', d3.select(this).attr('x') || 0)
            .attr('y', d3.select(this).attr('y') || 0)
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .text(`${provinceName}: ${visitCount} visitas`)
            .attr('pointer-events', 'none') // Evitar que el texto interfiera con los clicks en las provincias
            .attr('fill', 'black')
            .attr('font-size', '10px');
        });
    });
  }, [visitas]);

  const handleProvinceClick = (provinceName) => {
    setVisitas(prevState => ({
      ...prevState,
      [provinceName]: (prevState[provinceName] || 0) + 1,
    }));
  };

  return (
    <div>
      <h3>Mapa de Argentina</h3>
      <div ref={mapRef}></div>
    </div>
  );
};

export default Mapa1;
