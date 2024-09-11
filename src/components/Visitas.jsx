import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_argentinaLow from "@amcharts/amcharts5-geodata/argentinaLow";

const Visitas = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator(),
        layout: root.verticalLayout,
        width: am5.percent(70),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        calculateAggregates: true,
        valueField: "value",
        geoJSON: am5geodata_argentinaLow,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}: {value}",
      interactive: true,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935),
    });

    const getColor = (value) => {
      switch (value) {
        case "alta":
          return am5.color("rgba(255, 97, 8, 1)");
        case "media":
          return am5.color("rgba(255, 142, 78, 1)");
        case "baja":
          return am5.color("rgba(255, 198, 166, 1)");
        default:
          return am5.color("rgba(255, 198, 166, 1)");
      }
    };

    polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      return getColor(target.dataItem.get("value"));
    });

    const data = am5geodata_argentinaLow.features.map((feature) => {
      const randomValue = Math.random();
      let category;
      if (randomValue < 0.33) {
        category = "baja";
      } else if (randomValue < 0.66) {
        category = "media";
      } else {
        category = "alta";
      }
      return {
        id: feature.id,
        value: category,
      };
    });

    polygonSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="chartdiv"
      style={{ width: "50%", height: "600px", paddingTop:"25px",marginBottom:"55px" }}
      ref={chartRef}
    ></div>
  );
};

export default Visitas;
