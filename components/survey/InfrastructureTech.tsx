"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  PieChart,
  Pie,
  Cell,
  Treemap,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Pipette,
  Droplets,
  Columns2,
  LayoutGrid,
  Truck,
  Factory,
  Trees,
  Recycle,
  MapPinned,
  Droplet,
} from "lucide-react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
};

function SectionHeadingInline({
  title,
  subtitle,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 flex items-center gap-2">
        {icon ? <span className="text-primary">{icon}</span> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function iconFor(key: string) {
  const lower = key.toLowerCase();
  // Specific matches for sub-indicators used in the colorful data cards
  if (lower.includes("pipeline")) return <Pipette className="h-5 w-5" />;
  if (lower.includes("atm")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("tap")) return <Droplet className="h-5 w-5" />;
  if (lower.includes("standpost")) return <MapPinned className="h-5 w-5" />;
  if (lower.includes("tubewell")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("water supply")) return <Pipette className="h-5 w-5" />;
  if (lower.includes("extraction")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("toilet")) return <Columns2 className="h-5 w-5" />;
  if (lower.includes("wastewater collection"))
    return <LayoutGrid className="h-5 w-5" />;
  if (lower.includes("transport")) return <Truck className="h-5 w-5" />;
  if (lower.includes("treatment")) return <Factory className="h-5 w-5" />;
  if (lower.includes("disposal")) return <Trees className="h-5 w-5" />;
  if (lower.includes("solid waste")) return <Recycle className="h-5 w-5" />;
  if (lower.includes("signage")) return <MapPinned className="h-5 w-5" />;
  return <Pipette className="h-5 w-5" />;
}
export default function InfrastructureTech() {
  const mainRows = [
    {
      sno: "1",
      indicator:
        "Types of water supply infrastructure and number of water access points",
      definition:
        "This indicator displays the diversity and distribution of water supply infrastructure available during Maha Kumbh Mela 2025.",
      isParent: true,
      subIndicators: [
        {
          sno: "1a",
          indicator: "Total water supply pipeline length",
          definition: "",
          data: [{ label: "Value", value: "1295 km" }],
        },
        {
          sno: "1b",
          indicator: "Water ATMs",
          definition: "",
          data: [{ label: "Value", value: "233" }],
        },
        {
          sno: "1c",
          indicator: "Tap Connections",
          definition: "",
          data: [{ label: "Value", value: "1,12,151" }],
        },
        {
          sno: "1d",
          indicator: "Standposts",
          definition: "",
          data: [{ label: "Value", value: "6,500" }],
        },
        {
          sno: "1e",
          indicator: "Tubewells",
          definition:
            "This indicator displays the diversity and distribution of water extraction systems available during Maha Kumbh Mela 2025",
          data: [{ label: "Value", value: "85" }],
        },
      ],
    },
    {
      sno: "3",
      indicator: "Types and Number of toilets (latrines, urinals)",
      definition:
        "This indicator displays the diversity and distribution of toilets available during Maha Kumbh Mela 2025",
      data: [
        { label: "Types", value: "10" },
        { label: "Total units (approx.)", value: "1,50,000" },
        { label: "See Table 1 and Figures A–D", value: "Image placeholders" },
      ],
    },
    {
      sno: "5",
      indicator:
        "Types and number of wastewater collection units (Wastewater Drains)",
      definition:
        "This indicator displays infrastructure provided to collect wastewater in the sectors of Maha Kumbh Mela 2025.",
      data: [
        {
          label: "Description",
          value:
            "Kutcha drains laid; wastewater disposed at stabilization ponds for bio-culturing; transported to STPs. Refer Figure K.",
        },
      ],
    },
    {
      sno: "6",
      indicator: "Types and number of wastewater transportation units",
      definition:
        "This indicator displays diversity and distribution of vehicles deployed to transport wastewater from Kumbh catchment to nearby treatment plants",
      data: [
        { label: "Suction vehicles", value: "300" },
        { label: "PMA owned", value: "90" },
        { label: "See Table 2", value: "Details" },
      ],
    },
    {
      sno: "7",
      indicator: "Treatment Plants",
      definition:
        "This indicator displays infrastructure provided to treat the wastewater during Maha Kumbh Mela 2025",
      data: [{ label: "See Table 3", value: "Details" }],
    },
    {
      sno: "8",
      indicator: "Types and number of wastewater disposal units",
      definition:
        "This indicator talks about the wastewater disposal points other than Treatment facilities.",
      data: [
        { label: "Stabilization ponds", value: "50" },
        { label: "See Figure E", value: "Image placeholder" },
      ],
    },
    {
      sno: "9",
      indicator: "Solid waste collection units",
      definition:
        "Solid waste collection units are facilities that enable the organized and hygienic collection of solid waste in Maha Kumbh Mela 2025",
      data: [{ label: "See Table 4", value: "Details" }],
    },
    {
      sno: "10",
      indicator: "Signage infrastructure for WASH services",
      definition:
        "Signage infrastructure in the Kumbh Mela displays the system of visual communication tools used to guide and inform pilgrims about WASH infrastructure",
      data: [
        {
          label: "Figures",
          value: "See Figures F, G, H, I, J and M (image placeholders)",
        },
      ],
    },
  ];

  const toiletTypes = [
    { type: "VIP toilets", value: 1673 },
    { type: "Kanath toilets", value: 53760 },
    { type: "FRP with Soak pit", value: 16072 },
    { type: "FRP with Septic", value: 13212 },
    { type: "Steel with Septic", value: 11053 },
    { type: "Steel with Soak pit", value: 22382 },
    { type: "Urinal with Septic tank", value: 20000 },
    { type: "Cemented Toilet 6x4", value: 7926 },
    { type: "Cemented Toilet 8x8", value: 6373 },
    { type: "Mobile Toilets", value: 2120 },
  ];
  const wastewaterData = {
    total: 300,
    vendors: [
      { vendor: "PMA", machines: 90 },
      { vendor: "Bhutani", machines: 80 },
      { vendor: "YLDA", machines: 14 },
      { vendor: "LJS", machines: 21 },
      { vendor: "Saldar", machines: 7 },
      { vendor: "Sahyogi", machines: 25 },
      { vendor: "ICESPL", machines: 6 },
      { vendor: "Kate", machines: 4 },
      { vendor: "Saraplast", machines: 12 },
      { vendor: "JR Project", machines: 1 },
      { vendor: "Surbhi", machines: 20 },
      { vendor: "AP Infra", machines: 20 },
    ],
  };

  const wastewaterInfraBySector = [
    {
      sectors: "Sector 1,2,3,4",
      infra: "Sewer lines connected to newly constructed Salori STP",
    },
    { sectors: "Sector 6,7", infra: "Salori STP" },
    { sectors: "Sector 8,9,10", infra: "Phaphamau Temporary STP" },
    { sectors: "Sector 5, 18,19, 20, 21, 22", infra: "Jhusi Adani STP" },
    { sectors: "Sector 11,12,14", infra: "Temporary STP (Geotubes)" },
  ];

  const wasteMgmtItems = [
    {
      item: "Dustbins",
      qty: "20,000 (at every 50-100m distance)",
      value: 20000,
    },
    { item: "Compactors", qty: "40 (1-2/ sector)", value: 40 },
    { item: "Tippers", qty: "145 (5-6/sector)", value: 145 },
    {
      item: "Liner Bags",
      qty: "37 lakhs liner bags changed thrice a day",
      value: 3700000,
    },
  ];

  // Chart configuration for toilet types pie chart
  const toiletChartConfig = {
    count: {
      label: "Number of Toilets",
    },
  };

  // Colors for pie chart segments
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#00ff00",
    "#ff00ff",
    "#00ffff",
    "#ffff00",
    "#ff0000",
    "#0000ff",
  ];

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        State of Infrastructure and Technology of WASH services
        <span className="text-primary block text-2xl font-normal mt-3">
          (Key Stakeholder: Government officials)
        </span>
      </h1>

      <SectionHeadingInline
        className="mb-6"
        title="Types of water supply"
        subtitle="(infrastructure and number of water access points)"
        icon={iconFor("water supply")}
      />
      {/* Individual cards for sub-indicators styled like the provided design (no CTA) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {mainRows
          .filter((row) => row.isParent && row.subIndicators)
          .flatMap(
            (row) =>
              row.subIndicators?.map((subRow) => ({
                ...subRow,
                parentDefinition: row.definition,
              })) || []
          )
          .map((subRow) => {
            const lower = subRow.indicator.toLowerCase();
            const imageSrc =
              (lower.includes("pipeline") && "/indicators/piplinepic.jpeg") ||
              (lower.includes("atm") && "/indicators/water-atm.png") ||
              (lower.includes("tap") && "/indicators/tap.jpeg") ||
              (lower.includes("standpost") && "/indicators/standpost.webp") ||
              (lower.includes("tubewell") && "/indicators/tubewell.jpeg") ||
              "/file.svg";
            return (
              <div
                key={subRow.sno}
                className="group relative overflow-hidden rounded-2xl border border-border/60 flex flex-col shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-2xl hover:border-white/20"
              >
                <div className="relative w-full overflow-hidden">
                  <div className="relative aspect-[2/3] w-full overflow-hidden">
                    <img
                      src={imageSrc}
                      alt=""
                      className="absolute inset-0 size-full object-fill transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Content overlay at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end transition-all duration-300 group-hover:from-black/90 group-hover:via-black/60">
                      <div>
                        <h3 className="text-xl font-semibold leading-tight text-white/95">
                          {subRow.indicator}
                        </h3>
                        <p className="mt-2 text-sm text-white/80">
                          {subRow.definition || subRow.parentDefinition}
                        </p>
                      </div>

                      {subRow.data?.[0]?.value ? (
                        <p className="text-3xl font-bold text-white mt-2">
                          {subRow.data[0].value}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* --- Indicator 3 Section: Toilets --- */}
      <SectionHeadingInline
        className="mb-6 mt-12"
        title="Types and Number of toilets"
        subtitle="(latrines, urinals)"
        icon={iconFor("toilets")}
      />

      {/* Toilet Infrastructure (Definition Card with Metrics) */}
      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Purple) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-purple-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Toilet Infrastructure Overview
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              This indicator displays the diversity and distribution of toilets
              available during Maha Kumbh Mela 2025.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-4">
              {/* Metric 1: Types */}
              <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-700/50">
                <p className="text-xs font-medium uppercase text-purple-600 dark:text-purple-400 mb-1">
                  Total Types Available
                </p>
                <p className="text-3xl font-extrabold text-purple-700 dark:text-purple-400">
                  10
                </p>
              </div>
              {/* Metric 2: Number */}
              <div className="p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-700/50">
                <p className="text-xs font-medium uppercase text-purple-600 dark:text-purple-400 mb-1">
                  Total Units Deployed
                </p>
                <p className="text-3xl font-extrabold text-purple-700 dark:text-purple-400">
                  1,50,000
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-6">
        <Card
          tabIndex={0}
          className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Toilet Types Distribution
            </CardTitle>
            <CardDescription className="text-lg">
              Pie chart showing the distribution of different toilet types with
              detailed breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <ChartContainer
                config={toiletChartConfig}
                className="h-[420px] w-full"
              >
                <PieChart>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name) => [
                      `${value.toLocaleString()} units`,
                      name,
                    ]}
                  />
                  <Pie
                    data={toiletTypes}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
                    innerRadius={40}
                    paddingAngle={3}
                    label={({ percent }) =>
                      percent > 0.05 ? `${(percent * 100).toFixed(1)}%` : ""
                    }
                    labelLine={false}
                  >
                    {toiletTypes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {toiletTypes.map((toilet, index) => {
                  const percentage = (
                    (toilet.value /
                      toiletTypes.reduce((sum, t) => sum + t.value, 0)) *
                    100
                  ).toFixed(1);
                  return (
                    <div
                      key={toilet.type}
                      className="flex items-center space-x-3 p-2 rounded-lg bg-muted/70"
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">
                          {toilet.type}
                        </p>
                        <p className="text-base text-muted-foreground">
                          {toilet.value.toLocaleString()} units ({percentage}%)
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Figures A, B, C, D - Image Grid */}
      <div className="mb-8">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-6
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Standard Toilet Types
            </h3>
            <CardDescription className="text-base text-gray-500 dark:text-gray-400 mt-1">
              Visual examples of toilet types used in Maha Kumbh Mela 2025.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 px-0 pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  caption: "Figure A: Standard Kanath toilet",
                  src: "figure_a.png",
                },
                {
                  caption: "Figure B: Standard Steel toilet",
                  src: "figure_b.png",
                },
                {
                  caption: "Figure C: Standard FRP toilets",
                  src: "figure_c.png",
                },
                {
                  caption: "Figure D: Standard Mobile compartment toilets",
                  src: "figure_d.png",
                },
              ].map((item) => (
                <Card
                  key={item.caption}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-full h-56 relative overflow-hidden">
                      <Image
                        src={`/survey/Toilet_Type_Images/${item.src}`}
                        alt={item.caption}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Modern Caption Bar at bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-3 py-2">
                        <p className="text-sm font-light text-white/90">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Indicator 5 Section */}
      <SectionHeadingInline
        className="mb-6"
        title="Types and number of wastewater collection units"
        subtitle="(Wastewater Drains)"
        icon={iconFor("wastewater collection")}
      />

      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-lg 
    transition-all 
    duration-300 
    ease-in-out
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Using Orange for this card) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-orange-500 rounded-l-lg opacity-80" />

          <CardHeader className="pb-4 pt-0 px-0">
            <div className="flex items-start gap-4">
              {/* Icon with a subtle, contained background */}
              <div
                className="
          p-2 
          bg-orange-500/10 
          text-orange-500 
          rounded-lg 
          flex-shrink-0
          self-start
        "
              >
                {/* Replace 'wastewater collection' with a suitable string for a modern icon */}
                {iconFor("wastewater collection")}
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Wastewater Collection
                </h3>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Infrastructure & System Overview
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {" "}
            {/* Removed all padding from CardContent */}
            <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900/60 flex flex-col justify-center items-center">
              {/* Optional: Add a subtle overlay gradient if the image needs to be 'darkened' for text, similar to the sample */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>

              {/* System Description - Now a concise intro above the main image block */}
              <div className="w-full max-w-4xl px-4 pt-6 pb-4 z-20 text-center">
            
                <p className="text-base text-gray-800 dark:text-gray-200 leading-snug">
                  Kutcha drains were laid for wastewater collection, disposed at
                  a stabilization pond for bio culturing, and then transported
                  to STPs.
                </p>
              </div>

              {/* Main Image Area - Takes full available width and is significantly taller */}
              <div
                className="
            relative 
            w-full 
            h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] {/* Significantly increased height */}
            overflow-hidden 
          "
              >
                <Image
                  src="/survey/Types and number of wastewater collection units (Wastewater Drains/figure_k.png"
                  alt="Figure showing kutcha drain in sector 19 typology in Maha Kumbh Mela 2025"
                  layout="fill" // Use fill to make the image cover the container
                  objectFit="cover" // Ensure it covers the area, cropping if necessary
                  quality={100} // High quality for prominence
                  className="rounded-b-xl shadow-2xl" // Rounded only bottom, strong shadow
                />

                {/* Figure Caption - Prominent, integrated into the image at the bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-6 py-4 z-20">
                  <p className="text-lg font-semibold text-white">
                    Figure K: Kutcha drain in Sector 19 typology in the Maha
                    Kumbh Mela 2025
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Indicator 6 Section */}
      <SectionHeadingInline
        className="mb-6"
        title="Types and number of wastewater transportation units"
        icon={iconFor("transport")}
      />

      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-xl 
    transition-all 
    duration-300 
    ease-in-out
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Modern alternative to a thick border-l) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-teal-500 rounded-l-lg opacity-80" />

          <CardHeader className="pb-4 pt-0 px-0">
            <div className="flex items-start gap-4">
              {/* Icon with a subtle, contained background */}
              <div
                className="
          p-2 
          bg-teal-500/10 
          text-teal-500 
          rounded-lg 
          flex-shrink-0
          self-start
        "
              >
                {/* Replace 'wastewater transport' with a suitable string for a modern icon */}
                {iconFor("wastewater transport")}
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Wastewater Transportation
                </h3>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Infrastructure & Fleet Overview
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-4 px-0 pb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-snug">
              This indicator displays diversity and distribution of vehicles
              deployed to transport wastewater from Kumbh catchment to nearby
              treatment plants.
            </p>

            {/* Modern Data Visualization Layout (Focus on large, easy-to-scan numbers) */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {/* Metric 1 */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400 mb-1 truncate">
                  Total Suction Vehicles
                </p>
                <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                  300
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400 mb-1 truncate">
                  PMA Owned Fleet
                </p>
                <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                  90
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transportation Vehicles Treemap */}
      <div className="mb-8">
        <Card
          className="
    rounded-xl 
    p-6 
    shadow-xl 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Transportation Vehicles Distribution
            </h3>
            <CardDescription className="text-base text-gray-500 dark:text-gray-400 mt-1">
              Distribution of vehicles by vendor (Treemap visualization)
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 px-0 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Treemap Visualization (2/3 width) */}
              <div className="lg:col-span-2">
                <ChartContainer
                  config={toiletChartConfig}
                  className="h-[460px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={wastewaterData.vendors.map((vendor, index) => ({
                        ...vendor,
                        fill: COLORS[index % COLORS.length],
                      }))}
                      dataKey="machines"
                      aspectRatio={4 / 3}
                      stroke="#fff"
                      className="rounded-lg"
                    >
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white dark:bg-gray-700 p-3 border rounded-lg shadow-xl">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {data.vendor}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  **{data.machines} vehicles**
                                </p>
                                <p className="text-xs text-teal-600 dark:text-teal-400">
                                  {(
                                    (data.machines / wastewaterData.total) *
                                    100
                                  ).toFixed(1)}
                                  % of total
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </Treemap>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Legend / Metrics (1/3 width) */}
              <div className="lg:col-span-1 grid grid-cols-2 gap-2">
                {wastewaterData.vendors.map((vendor, index) => {
                  const percentage = (
                    (vendor.machines / wastewaterData.total) *
                    100
                  ).toFixed(1);
                  const colorIndex = index % COLORS.length;
                  return (
                    <div
                      key={vendor.vendor}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:bg-teal-500/5 transition-colors"
                    >
                      <div
                        className="w-4 h-4 rounded-full mt-1 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: COLORS[colorIndex] }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold truncate text-gray-800 dark:text-gray-100">
                          {vendor.vendor}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {vendor.machines} vehicles
                          <span className="ml-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                            ({percentage}%)
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-6 mt-12"
        title="Treatment Plants"
        icon={iconFor("treatment")}
      />

      {/* Indicator 7: Wastewater Treatment Infrastructure (Definition Card) */}
      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Indigo) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-indigo-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Treatment Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-indigo-600 dark:text-indigo-400 mb-2">
              Definition
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              This indicator displays infrastructure provided to treat the
              wastewater during Maha Kumbh Mela 2025.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Treatment Plants Radial Chart */}
      <div className="mb-8">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-6
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Treatment Infrastructure by Sector
            </h3>
            <CardDescription className="text-base text-gray-500 dark:text-gray-400 mt-1">
              All sectors with their respective infrastructure types (Radial
              Chart visualization)
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 px-0 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Radial Chart (2/3 width) */}
              <div className="lg:col-span-2">
                <ChartContainer
                  config={toiletChartConfig}
                  className="h-[460px] w-full"
                >
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="20%"
                    outerRadius="80%"
                    barSize={20} // Slightly smaller bar for modern look
                    data={wastewaterInfraBySector.map((item, index) => ({
                      name: item.sectors,
                      value: 100,
                      fill: COLORS[index % COLORS.length],
                      infrastructure: item.infra,
                      type: item.infra.includes("STP") ? "STP" : "Geo-tube",
                    }))}
                  >
                    <RadialBar
                      dataKey="value"
                      cornerRadius={10}
                      background={true}
                      fill="#8884d8"
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white dark:bg-gray-700 p-3 border rounded-lg shadow-xl">
                              <p className="font-semibold text-gray-900 dark:text-white">
                                {data.name}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Infrastructure: **{data.infrastructure}**
                              </p>
                              <p className="text-xs text-indigo-600 dark:text-indigo-400">
                                Type: {data.type}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadialBarChart>
                </ChartContainer>
              </div>

              {/* Legend / Metrics (1/3 width) */}
              <div className="lg:col-span-1 grid grid-cols-1 gap-3">
                {wastewaterInfraBySector.map((item, index) => {
                  const colorIndex = index % COLORS.length;
                  const isSTP = item.infra.includes("STP");
                  return (
                    <div
                      key={item.sectors}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:bg-indigo-500/5 transition-colors"
                    >
                      <div
                        className="w-4 h-4 rounded-full mt-1 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: COLORS[colorIndex] }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-bold truncate text-gray-800 dark:text-gray-100">
                          {item.sectors}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          **{isSTP ? "STP Facility" : "Geo-tube Facility"}**
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-6 mt-12"
        title="Types and number of wastewater disposal units"
        icon={iconFor("disposal")}
      />

      {/* Indicator 8: Wastewater Disposal Infrastructure (Definition Card with Metric) */}
      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Red) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-red-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Disposal Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0 space-y-4">
            <div>
              <p className="text-xs font-medium uppercase text-red-600 dark:text-red-400 mb-2">
                Definition
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                This indicator talks about wastewater disposal points other than
                Treatment facilities. One such facility is **Stabilization
                Ponds**.
              </p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-700/50">
              <p className="text-xs font-medium uppercase text-red-600 dark:text-red-400 mb-1">
                Total Stabilization Ponds
              </p>
              <p className="text-3xl font-extrabold text-red-700 dark:text-red-400">
                50
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Figure E: Stabilization Pond Image */}
      <div className="mb-8">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-6
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
      hover:shadow-2xl transition-shadow
    "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <CardDescription className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Wastewater Stabilization Pond in Sector 22
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <Image
                src="/survey/Types and number of wastewater disposal units/figure_e.png"
                alt="Wastewater Stabilization Pond in Sector 22"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
              {/* Modern Caption Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-4 py-2">
                <p className="text-sm font-light text-white/90">
                  **Figure E:** Wastewater Stabilization Pond in Sector 22
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-6 mt-12"
        title="Solid waste collection units"
        icon={iconFor("solid waste")}
      />

      {/* Indicator 9: Solid Waste Collection Infrastructure (Definition Card) */}
      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Yellow) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-yellow-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Solid Waste Collection Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-yellow-600 dark:text-yellow-400 mb-2">
              Definition
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              Solid waste collection units are facilities that enable the
              organized and hygienic collection of solid waste in Maha Kumbh
              Mela 2025.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Solid Waste Management Visualization (Bar Chart) */}
      <div className="mb-8">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-6
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Solid Waste Collection Infrastructure Distribution
            </h3>
            <CardDescription className="text-base text-gray-500 dark:text-gray-400 mt-1">
              Distribution of waste management items deployed across sectors
              (Bar Chart visualization)
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 px-0 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Bar Chart (2/3 width) */}
              <div className="lg:col-span-2">
                <ChartContainer
                  config={toiletChartConfig}
                  className="h-[420px] w-full"
                >
                  <BarChart
                    data={wasteMgmtItems.map((item) => ({
                      name: item.item,
                      value: item.value,
                      fill: COLORS[
                        wasteMgmtItems.findIndex((i) => i.item === item.item) %
                          COLORS.length
                      ],
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="hsl(var(--muted-foreground)/20%)"
                    />
                    <XAxis
                      dataKey="name"
                      angle={-30} // Reduced angle for slightly better readability
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
                      stroke="hsl(var(--muted-foreground)/50%)"
                    />
                    <YAxis
                      scale="log"
                      domain={["auto", "auto"]}
                      tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }}
                      tickFormatter={(value) => value.toLocaleString()}
                      stroke="hsl(var(--muted-foreground)/50%)"
                      label={{
                        value: "Count",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          textAnchor: "middle",
                          fill: "hsl(var(--foreground))",
                        },
                      }}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => [
                        `${value.toLocaleString()} units`,
                        name,
                      ]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>

              {/* Legend / Metrics (1/3 width) */}
              <div className="lg:col-span-1 grid grid-cols-2 gap-2">
                {wasteMgmtItems.map((item, index) => {
                  const total = wasteMgmtItems.reduce(
                    (sum, i) => sum + i.value,
                    0
                  );
                  const percentage = ((item.value / total) * 100).toFixed(1);
                  const colorIndex = index % COLORS.length;

                  return (
                    <Card
                      key={item.item}
                      className="
                  border-l-4 
                  hover:shadow-md 
                  transition-shadow 
                  bg-gray-50 dark:bg-gray-800 
                "
                      style={{ borderLeftColor: COLORS[colorIndex] }}
                    >
                      <CardContent className="p-4 flex flex-col justify-between h-full">
                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-gray-800 dark:text-gray-100">
                            {item.item}
                          </h4>
                          <p
                            className="text-3xl font-extrabold"
                            style={{ color: COLORS[colorIndex] }}
                          >
                            {item.value.toLocaleString()}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            units ({percentage}%)
                          </p>
                          <p className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md mt-1 truncate">
                            {item.qty.split("(")[1]?.replace(")", "") ||
                              "Deployed across sectors"}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-6 mt-12"
        title="Signage infrastructure for WASH services"
        icon={iconFor("signage")}
      />

      {/* Indicator 10: WASH Services Signage Infrastructure (Definition Card) */}
      <div className="mb-8">
        <Card
          className="
    relative 
    overflow-hidden 
    p-6 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Cyan) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-cyan-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              WASH Services Signage Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-cyan-600 dark:text-cyan-400 mb-2">
              Definition
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              Signage infrastructure in the Kumbh Mela displays the system of
              visual communication tools—such as signs or boards, used to guide
              and inform pilgrims about **WASH infrastructure**.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Signage Images Section */}
      <div className="mb-8">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-6
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-4 pt-0 px-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              WASH Services Signage Examples
            </h3>
            <CardDescription className="text-base text-gray-500 dark:text-gray-400 mt-1">
              Visual communication tools used to guide and inform pilgrims about
              WASH infrastructure.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 px-0 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                // ... your image data here
                {
                  caption:
                    "Figure F: Signages informing location of female toilets in Sector 22",
                  src: "figure_f.png",
                },
                {
                  caption: "Figure G: Signages informing toilets in sector 16",
                  src: "figure_g.png",
                },
                {
                  caption: "Figure H: Gender segregated toilets in Sector 17",
                  src: "figure_h.png",
                },
                {
                  caption:
                    "Figure I: Signages indicating changing rooms for women",
                  src: "figure_i.png",
                },
                {
                  caption:
                    "Figure L: Signage for judicious usage of Water for pilgrim population",
                  src: "figure_l.jpeg",
                },
                {
                  caption:
                    "Figure M: Signage creating awareness about circular economy amongst pilgrim population",
                  src: "figure_m.jpeg",
                },
              ].map((item) => (
                <Card
                  key={item.caption}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-full h-56 relative overflow-hidden">
                      <Image
                        src={`/survey/Signage infrastructure for WASH services/${item.src}`}
                        alt={item.caption}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="p-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.caption}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
