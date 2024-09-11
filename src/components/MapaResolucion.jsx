import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import argentinaMap from '../assets/mapa.svg';

const provinciasData = [
    { name: "Buenos Aires", conflictividad: "alta", resolución: "media" },
    {
      name: "Ciudad de Buenos Aires",
      conflictividad: "media",
      resolución: "alta",
    },
    { name: "Catamarca", conflictividad: "media", resolución: "alta" },
    { name: "Chaco", conflictividad: "media", resolución: "alta" },
    { name: "Chubut", conflictividad: "media", resolución: "alta" },
    { name: "Córdoba", conflictividad: "media", resolución: "alta" },
    { name: "Corrientes", conflictividad: "media", resolución: "alta" },
    { name: "Entre Ríos", conflictividad: "media", resolución: "alta" },
    { name: "Formosa", conflictividad: "alta", resolución: "media" },
    { name: "Jujuy", conflictividad: "alta", resolución: "media" },
    { name: "La Pampa", conflictividad: "alta", resolución: "media" },
    { name: "La Rioja", conflictividad: "alta", resolución: "media" },
    { name: "Mendoza", conflictividad: "alta", resolución: "media" },
    { name: "Misiones", conflictividad: "alta", resolución: "media" },
    { name: "Neuquén", conflictividad: "alta", resolución: "media" },
    { name: "Río Negro", conflictividad: "alta", resolución: "media" },
    { name: "Salta", conflictividad: "media", resolución: "alta" },
    { name: "San Juan", conflictividad: "media", resolución: "alta" },
    { name: "San Luis", conflictividad: "media", resolución: "alta" },
    { name: "Santa Cruz", conflictividad: "media", resolución: "alta" },
    { name: "Santa Fe", conflictividad: "media", resolución: "alta" },
    { name: "Santiago del Estero", conflictividad: "media", resolución: "alta" },
    { name: "Tierra del Fuego", conflictividad: "media", resolución: "alta" },
    { name: "Tucumán", conflictividad: "media", resolución: "alta" },
];

const MapaResolucion = ({ onProvinceHover }) => {
    const mapRef = useRef();

    useEffect(() => {
        d3.xml(argentinaMap).then((data) => {
            const svgNode = data.documentElement;
            const svgElement = d3.select(svgNode);

            svgElement
                .attr("width", "100%")
                .attr("height", "1000px"); // Ajusta la altura según sea necesario

            svgElement
                .selectAll("path")
                .attr("fill", "rgba(94, 88, 158, 1)")
                .attr("stroke", "rgba(18, 9, 124, 1)")
                .attr("stroke-width", 0.5)
                .on("mouseover", function () {
                    d3.select(this).transition().duration(200).attr("fill", "rgba(1, 172, 246, 1)");
                })
                .on("mouseout", function () {
                    d3.select(this).transition().duration(200).attr("fill", "rgba(94, 88, 158, 1)");
                });

            mapRef.current.innerHTML = ""; // Limpiar antes de agregar nuevo contenido
            mapRef.current.appendChild(svgNode);
        });
    }, [onProvinceHover]);

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: "1000px", overflow: "hidden" }}
        ></div>
    );
};

export default MapaResolucion;
