import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import argentinaMap from '../assets/mapa.svg';

const provinciasData = [
    { name: "Buenos Aires", conflictividad: "alta", resolución: "media", imagen:"/tweet.png" },
    { name: "Ciudad de Buenos Aires", conflictividad: "media", resolución: "alta", imagen:"/tweet2.png" },
    { name: "Catamarca", conflictividad: "baja", resolución: "media", imagen:"/tweet3.png" },
    { name: "Chaco", conflictividad: "media", resolución: "alta", imagen:"/tweet4.png" },
    { name: "Chubut", conflictividad: "alta", resolución: "baja", imagen:"/tweet.png" },
    { name: "Córdoba", conflictividad: "baja", resolución: "media", imagen:"/tweet2.png" },
    { name: "Corrientes", conflictividad: "media", resolución: "alta", imagen:"/tweet3.png" },
    { name: "Entre Ríos", conflictividad: "alta", resolución: "baja", imagen:"/tweet4.png" },
    { name: "Formosa", conflictividad: "media", resolución: "media", imagen:"/tweet.png" },
    { name: "Jujuy", conflictividad: "alta", resolución: "baja", imagen:"/tweet2.png" },
    { name: "La Pampa", conflictividad: "baja", resolución: "media", imagen:"/tweet3.png" },
    { name: "La Rioja", conflictividad: "media", resolución: "alta", imagen:"/tweet4.png" },
    { name: "Mendoza", conflictividad: "alta", resolución: "baja", imagen:"/tweet.png" },
    { name: "Misiones", conflictividad: "baja", resolución: "media", imagen:"/tweet2.png" },
    { name: "Neuquén", conflictividad: "media", resolución: "alta", imagen:"/tweet3.png" },
    { name: "Río Negro", conflictividad: "baja", resolución: "alta", imagen:"/tweet4.png" },
    { name: "Salta", conflictividad: "alta", resolución: "media", imagen:"/tweet.png" },
    { name: "San Juan", conflictividad: "baja", resolución: "baja", imagen:"/tweet2.png" },
    { name: "San Luis", conflictividad: "media", resolución: "alta", imagen:"/tweet3.png" },
    { name: "Santa Cruz", conflictividad: "alta", resolución: "baja", imagen:"/tweet4.png" },
    { name: "Santa Fe", conflictividad: "baja", resolución: "media", imagen:"/tweet.png" },
    { name: "Santiago del Estero", conflictividad: "media", resolución: "alta", imagen:"/tweet2.png" },
    { name: "Tierra del Fuego", conflictividad: "alta", resolución: "baja", imagen:"/tweet3.png" },
    { name: "Tucumán", conflictividad: "baja", resolución: "alta", imagen:"/tweet4.png" },
];

const MapaConflictividad = ({ onProvinceHover }) => {
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
                    const provinceName = d3.select(this).attr("name") || d3.select(this).attr("id");
                    const provinceData = provinciasData.find(p => p.name === provinceName);
                    onProvinceHover(provinceData);
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

export default MapaConflictividad;
