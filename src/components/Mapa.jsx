import React, { useEffect, useRef } from 'react'; // Asegúrate de que useRef está incluido aquí
import * as d3 from 'd3';
import argentinaMap from '../assets/mapa.svg';

const provinciasData = [
  { name: 'Buenos Aires', conflictividad: 'alta', resolución: 'media' },
  { name: 'Ciudad de Buenos Aires', conflictividad: 'media', resolución: 'alta' },
  { name: 'Catamarca', conflictividad: 'media', resolución: 'alta'},
  { name: 'Chaco', conflictividad: 'media', resolución: 'alta'},
  { name: 'Chubut', conflictividad: 'media', resolución: 'alta'},
  { name: 'Córdoba', conflictividad: 'media', resolución: 'alta' },
  { name: 'Corrientes', conflictividad: 'media', resolución: 'alta' },
  { name: 'Entre Ríos', conflictividad: 'media', resolución: 'alta'},
  { name: 'Formosa', conflictividad: 'alta', resolución: 'media' },
  { name: 'Jujuy', conflictividad: 'alta', resolución: 'media' },
  { name: 'La Pampa', conflictividad: 'alta', resolución: 'media' },
  { name: 'La Rioja', conflictividad: 'alta', resolución: 'media' },
  { name: 'Mendoza', conflictividad: 'alta', resolución: 'media' },
  { name: 'Misiones', conflictividad: 'alta', resolución: 'media' },
  { name: 'Neuquén', conflictividad: 'alta', resolución: 'media' },
  { name: 'Río Negro',conflictividad: 'alta', resolución: 'media'},
  { name: 'Salta', conflictividad: 'media', resolución: 'alta' },
  { name: 'San Juan', conflictividad: 'media', resolución: 'alta' },
  { name: 'San Luis', conflictividad: 'media', resolución: 'alta' },
  { name: 'Santa Cruz', conflictividad: 'media', resolución: 'alta' },
  { name: 'Santa Fe', conflictividad: 'media', resolución: 'alta' },
  { name: 'Santiago del Estero', conflictividad: 'media', resolución: 'alta' },
  { name: 'Tierra del Fuego', conflictividad: 'media', resolución: 'alta' },
  { name: 'Tucumán', conflictividad: 'media', resolución: 'alta' },
];

const Mapa = ({ type, onProvinceHover }) => {
    const mapRef = useRef();
  
    useEffect(() => {
      d3.xml(argentinaMap).then((data) => {
        const svgNode = data.documentElement;
        const svgElement = d3.select(svgNode);
  
        svgElement.attr('width', '100%').attr('height', '100%').style('display', 'block');
  
        svgElement.selectAll('path')
          .attr('fill', 'rgba(94, 88, 158, 1)')
          .attr('stroke', 'rgba(18, 9, 124, 1)')
          .attr('stroke-width', 0.5)
          .on('mouseover', function () {
            const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
            const provinceData = provinciasData.find(p => p.name === provinceName);
  
            let color;
            if (type === 'conflictividad') {
              color = getColorForConflictividad(provinceData.conflictividad);
            } else {
              color = getColorForResolución(provinceData.resolución);
            }
  
            d3.select(this).transition().duration(200).attr('fill', color);
            handleMouseOver(provinceName, color);
            onProvinceHover(provinceData);
          })
          .on('mouseout', function () {
            const provinceName = d3.select(this).attr('name') || d3.select(this).attr('id');
            handleMouseOut(provinceName);
          });
  
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
          mapRef.current.appendChild(svgNode);
        }
      });
    }, [type, onProvinceHover]);
  
    const getColorForConflictividad = (value) => {
      switch (value) {
        case 'alta': return 'rgba(255, 97, 8, 1)';
        case 'media': return 'rgba(255, 142, 78, 1)';
        case 'baja': return 'rgba(255, 198, 166, 1)';
        default: return 'rgba(94, 88, 158, 1)';
      }
    };
  
    const getColorForResolución = (value) => {
      switch (value) {
        case 'alta': return 'rgba(255, 198, 166, 1)';
        case 'media': return 'rgba(153, 253, 163, 1)';
        case 'baja': return 'rgba(255, 97, 8, 1)';
        default: return 'rgba(94, 88, 158, 1)';
      }
    };
  
    const handleMouseOver = (provinceName, color) => {
      d3.selectAll(`path[name="${provinceName}"]`).transition().duration(200).attr('fill', color);
    };
  
    const handleMouseOut = (provinceName) => {
      d3.selectAll(`path[name="${provinceName}"]`).transition().duration(200).attr('fill', 'rgba(94, 88, 158, 1)');
    };
  
    return <div ref={mapRef} style={{ width: '100%', height: '100%', overflow: "hidden" }}></div>;
  };
  
  export default Mapa;