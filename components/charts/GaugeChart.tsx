"use client";

import React from "react";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  categories?: Array<{
    label: string;
    range: [number, number];
    color: string;
  }>;
}

export default function GaugeChart({
  value,
  min = 0,
  max = 1000,
  label = "",
  categories = [
    { label: "Low", range: [0, 400], color: "#ef4444" },
    { label: "Medium", range: [400, 700], color: "#fbbf24" },
    { label: "High", range: [700, 1000], color: "#22c55e" },
  ],
}: GaugeChartProps) {
  const startAngle = -135;
  const endAngle = 135;
  const totalAngle = endAngle - startAngle;

  const valuePercentage = ((value - min) / (max - min)) * 100;
  const valueAngle = startAngle + (valuePercentage / 100) * totalAngle;

  const createArc = (
    innerRadius: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(50, 50, outerRadius, endAngle);
    const end = polarToCartesian(50, 50, outerRadius, startAngle);
    const startInner = polarToCartesian(50, 50, innerRadius, endAngle);
    const endInner = polarToCartesian(50, 50, innerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      endInner.x,
      endInner.y,
      "A",
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      startInner.x,
      startInner.y,
      "Z",
    ].join(" ");
  };

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  const renderCategoryArcs = () => {
    return categories.map((category, index) => {
      const [rangeMin, rangeMax] = category.range;
      const startPercent = ((rangeMin - min) / (max - min)) * 100;
      const endPercent = ((rangeMax - min) / (max - min)) * 100;

      const catStartAngle = startAngle + (startPercent / 100) * totalAngle;
      const catEndAngle = startAngle + (endPercent / 100) * totalAngle;

      const innerRadius = 28;
      const outerRadius = 42;

      const path = createArc(innerRadius, outerRadius, catStartAngle, catEndAngle);

      return (
        <g key={index}>
          <path d={path} fill={category.color} stroke="white" strokeWidth="0.5" />
        </g>
      );
    });
  };

  const renderTickMarks = () => {
    const ticks = [];
    const numTicks = 5;
    for (let i = 0; i <= numTicks; i++) {
      const angle = startAngle + (i / numTicks) * totalAngle;
      const tickValue = min + (i / numTicks) * (max - min);

      const outerPoint = polarToCartesian(50, 50, 25, angle);
      const innerPoint = polarToCartesian(50, 50, 27, angle);

      ticks.push(
        <g key={i}>
          <line
            x1={outerPoint.x}
            y1={outerPoint.y}
            x2={innerPoint.x}
            y2={innerPoint.y}
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
          <text
            x={polarToCartesian(50, 50, 20, angle).x}
            y={polarToCartesian(50, 50, 20, angle).y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="3"
            fill="#64748b"
          >
            {Math.round(tickValue)}
          </text>
        </g>
      );
    }
    return ticks;
  };

  const needlePoint = polarToCartesian(50, 50, 35, valueAngle);

  return (
    <div className="w-full flex flex-col items-center">
      <svg viewBox="0 0 100 70" className="w-full max-w-md">
        {renderCategoryArcs()}
        {renderTickMarks()}

        <line
          x1="50"
          y1="50"
          x2={needlePoint.x}
          y2={needlePoint.y}
          stroke="#1e293b"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="2" fill="#1e293b" />

        <g>
          <rect
            x="38"
            y="46"
            width="24"
            height="8"
            rx="4"
            fill="#22c55e"
            stroke="white"
            strokeWidth="0.5"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="3"
            fontWeight="bold"
            fill="white"
          >
            ▲ {Math.round(value)} pts
          </text>
        </g>

        <text
          x="50"
          y="64"
          textAnchor="middle"
          fontSize="6"
          fontWeight="bold"
          fill="#1e293b"
        >
          {Math.round(value)}
        </text>
      </svg>

      {label && (
        <div className="text-center mt-2">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
        </div>
      )}
    </div>
  );
}
