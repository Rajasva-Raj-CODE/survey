"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import type { TooltipProps } from "recharts";
import {
  MapPin,
  Accessibility,
  Droplets,
  Shield,
  Heart,
  Trash2,
  Handshake,
  Info,
} from "lucide-react";
import type React from "react";

type PieDatum = { name: string; value: number; color?: string };
type BarDatum = { category: string; value: number; color?: string };
type Indicator = {
  title: string;
  definition: string;
  icon: React.ReactNode;
  data: PieDatum[] | BarDatum[];
  inference: string;
  type: "pie" | "bar";
};

export default function EquitableAccess() {
  const proximityData = [
    { name: "100-200m", value: 62, color: "#0088FE" },
    { name: "500m", value: 38, color: "#00C49F" },
  ];

  const accessibilityData = [
    { category: "Easy", value: 77, color: "#00C49F" },
    { category: "Manageable", value: 23, color: "#FFBB28" },
    { category: "Difficult", value: 0, color: "#FF8042" },
  ];

  const waterAvailabilityData = [
    { name: "Always Sufficient", value: 93, color: "#0088FE" },
    { name: "Sometimes Sufficient", value: 7, color: "#FFBB28" },
  ];

  const sanitationAccessData = [
    { category: "Always Accessible", value: 12, color: "#0088FE" },
    { category: "Mostly Accessible", value: 51, color: "#00C49F" },
    { category: "Neutral", value: 27, color: "#FFBB28" },
    { category: "Difficult", value: 10, color: "#FF8042" },
  ];

  const healthConcernsData = [
    { name: "No Concern", value: 98, color: "#00C49F" },
    { name: "Some Concern", value: 2, color: "#FF8042" },
  ];

  const wasteDisposalData = [
    { category: "Strongly Agree", value: 19, color: "#0088FE" },
    { category: "Agree", value: 67, color: "#00C49F" },
    { category: "Neutral", value: 12, color: "#FFBB28" },
    { category: "Disagree", value: 2, color: "#FF8042" },
  ];

  const surveyIndicators: Indicator[] = [
    {
      title: "Proximity to nearest potable water infrastructure ",
      definition:
        "Typical one-way effort required for a respondent to reach the closest potable water source (e.g., free standpost, Water-ATM, tanker-tap) that is safe for drinking",
      icon: <MapPin className="w-5 h-5" />,
      data: proximityData,
      inference:
        "The data illustrates that 62% of the floating population respondents had proximity to water infrastructure within 100-200 m area whereas 38% had to walk 500m to find the infrastructure. This difference in proximity could be due to their awareness as well as sector wise difference in setups across the Kumbh catchment area",
      type: "pie",
    },
    {
      title: "Perception towards accessibility to Water Infrastructure",
      definition:
        "Perceived ease of respondents to locate, reach, and use water points when needed.",
      icon: <Accessibility className="w-5 h-5" />,
      data: accessibilityData,
      inference:
        "The respondents mostly reported a positive perception towards accessibility of water infrastructure. 77% found it easily accessible whereas 23% found it manageable. None of the respondents faced difficulty in accessing the water infrastructure provided. ",
      type: "bar",
    },
    {
      title: "Perception on sufficient availability of water",
      definition:
        "Illustrates the respondents’ judgment that enough water was available when needed (volume/flow, refill frequency, and ability to obtain adequate personal consumption",
      icon: <Droplets className="w-5 h-5" />,
      data: waterAvailabilityData,
      inference:
        "Majority of the respondents i.e. 93% found water availability to be sufficient during the Mela. Merely 7% had some concern related to sufficiency",
      type: "pie",
    },
    {
      title: "Perception towards accessibility of sanitation facilities",
      definition:
        "Perceived ease of  respondents to locate, reach, and use an appropriate and functional toilet when needed.",
      icon: <Shield className="w-5 h-5" />,
      data: sanitationAccessData,
      inference:
        "The accessibility of sanitation infrastructure was mostly positive amongst the surveyed respondents. 63% of the respondents found sanitation facilities mostly accessible with only 10% facing difficulties.",
      type: "bar",
    },
    {
      title: "Perception towards health-related concerns",
      definition:
        "The extent to which respondents felt at risk of illness due to WASH conditions (e.g., unsafe water, dirty/toilet surfaces, inadequate hand-washing enablers, crowding near facilities).",
      icon: <Heart className="w-5 h-5" />,
      data: healthConcernsData,
      inference:
        "98% of respondents faced no health-related concerns during the Mela showcasing maintenance of hygienic environment, water quality, and availability of health infrastructure.",
      type: "pie",
    },
    {
      title: "Perception on disposing of solid waste appropriately",
      definition:
        "Illustrates the respondent's perceived ability and ease to dispose of their solid waste in the right place and form (finding bins, segregating dry/wet, understanding signage, and not being forced to litter).",
      icon: <Trash2 className="w-5 h-5" />,
      data: wasteDisposalData,
      inference:
        "19% of the respondents were in strong agreement towards appropriate waste disposal during the Mela. 67% were in agreement and merely 2% showed disagreement towards proper waste disposal.",
      type: "bar",
    },
  ];

  // kept for future reuse if card-based facts are needed again

  const renderChart = (indicator: Indicator, isCompact = false) => {
    const chartColors = [
      "var(--chart-1)",
      "var(--chart-2)",
      "var(--chart-3)",
      "var(--chart-4)",
      "var(--chart-5)",
    ];
    const renderPieTooltip = (props: TooltipProps<number, string>) => {
      const { active, payload } = props;
      if (active && payload && payload.length) {
        const datum = payload[0]?.payload as PieDatum | undefined;
        if (!datum) return null;
        const { name, value } = datum;
        return (
          <div className="rounded-md border bg-popover text-popover-foreground px-2 py-1 text-sm shadow">
            {name}: {value}%
          </div>
        );
      }
      return null;
    };
    const renderBarTooltip = (props: TooltipProps<number, string>) => {
      const { active, payload } = props;
      if (active && payload && payload.length) {
        const datum = payload[0]?.payload as BarDatum | undefined;
        if (!datum) return null;
        const { category, value } = datum;
        return (
          <div className="rounded-md border bg-popover text-popover-foreground px-2 py-1 text-sm shadow">
            {category}: {value}%
          </div>
        );
      }
      return null;
    };

    
    
    const chartHeight = isCompact ? 250 : 300;
    const pieRadius = isCompact ? 70 : 90;
    
    if (indicator.type === "pie") {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          {/* Pie Chart (2/3 width) */}
          <div className="lg:col-span-3">
            <ResponsiveContainer width="100%" height={chartHeight}>
              <PieChart>
                <RechartsTooltip content={renderPieTooltip} />
                <Pie
                  data={indicator.data as PieDatum[]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={pieRadius}
                  fill="var(--chart-1)"
                  dataKey="value"
                >
                  {(indicator.data as PieDatum[]).map((_, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={chartColors[i % chartColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend (1/3 width) */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-2">
            {(indicator.data as PieDatum[]).map((item, index) => {
              const percentage = item.value;
              const colorIndex = index % chartColors.length;
              return (
                <div
                  key={item.name}
                  className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:bg-primary/5 transition-colors"
                >
                  <div
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: chartColors[colorIndex] }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate text-gray-800 dark:text-gray-100">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {percentage}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart data={indicator.data as BarDatum[]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="category"
              angle={isCompact ? -30 : -45}
              textAnchor="end"
              height={isCompact ? 100 : 150}
              fontSize={isCompact ? 10 : 12}
            />
            <YAxis
              fontSize={isCompact ? 10 : 12}
              domain={[0, 100]}
              allowDecimals={false}
              tickFormatter={(value) => `${value}%`}
            />
            <RechartsTooltip content={renderBarTooltip} />
            <Bar dataKey="value" fill="var(--chart-2)" />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  // Table-style rows matching the screenshot: Indicator | Definition | Data | Inference
  type TableRow = {
    indicator: Indicator;
    helperNote?: string; // red note like "Please add bar-graph to this data"
  };

  const tableRows: TableRow[] = [
    {
      indicator: surveyIndicators[0],
    },
    {
      indicator: surveyIndicators[1],
    },
    {
      indicator: surveyIndicators[2],
    },
    {
      indicator: surveyIndicators[3],
    },
    {
      indicator: surveyIndicators[4],
    },
    {
      indicator: surveyIndicators[5],
    },
  ];

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Header Section */}
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
          State of Equitable Access of WaSH services
          <span className="text-primary block text-2xl font-normal mt-3">
            (Key Stakeholder: Floating Population)
          </span>
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8">
          Indicator | Definition | Data | Inference
        </p>

        <div className="grid grid-cols-1 gap-6">
          {/* Data Rows with Side-by-Side Layout */}
          {tableRows.map(({ indicator }, i) => (

              <Card
                  key={i}
                  tabIndex={0}
                  className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50
                    dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm
                    border border-border/50 shadow-sm hover:shadow-md
                    transition-all duration-300 hover:bg-primary/5
                    dark:hover:bg-primary/10 focus:outline-none
                    focus-visible:ring-2 focus-visible:ring-primary/50
                    focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20"
              >
                <CardContent className="p-5 space-y-4">
                  {/* Title */}
                  <div className="flex items-center gap-3 border-b border-border/40 pb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                      {indicator.icon}
                    </div>
                    <h4 className="font-semibold text-lg leading-tight text-foreground">
                      {indicator.title}
                    </h4>
                  </div>

                  {/* Middle Section: Definition + Inference (together) and Chart */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Definition + Inference Section */}
                    <div className="space-y-3">
                      {/* Definition */}
                      <div className="bg-muted/40 p-4 rounded-md border-l-4 border-primary">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Definition
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {indicator.definition}
                        </p>
                      </div>

                      {/* Inference */}
                      <div className="bg-muted/30 p-4 rounded-md border-l-4 border-secondary">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Inference
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {indicator.inference}
                        </p>
                      </div>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white/70 dark:bg-slate-800/50 w-full p-2 rounded-md border border-border/30 shadow-sm">
                      <h5 className="text-sm font-medium text-muted-foreground mb-2 text-center">
                   Indicator
                      </h5>
                      {renderChart(indicator, true)}
                    </div>
                  </div>
                </CardContent>
              </Card>


          ))}

    
        
          {/* Handwashing availability row */}
          <Card tabIndex={0} className="rounded-2xl p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/20 backdrop-blur-sm border border-fuchsia-500/50 shadow-xl">
            <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-1 border-r border-border/50 pr-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-xl leading-tight">
                      Handwashing Stations Ratio
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-1">
                    General availability supporting sanitation use, measured against toilet density.
                  </p>
                </div>
                <div className="lg:col-span-2 flex items-center justify-center p-4">
                  <div className="bg-white dark:bg-slate-900/90 p-6 rounded-2xl border border-fuchsia-300 dark:border-fuchsia-700 shadow-2xl text-center w-full max-w-sm">
                    <div className="text-6xl font-extrabold text-fuchsia-600 dark:text-fuchsia-400 mb-2">2:10</div>
                    <div className="text-lg font-semibold text-foreground">Handwashing stations per 10 toilets</div>
                  </div>
                </div>
            </CardContent>
          </Card>

                {/* Key facts row */}
          <Card tabIndex={0} className="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-blue-500/50 shadow-xl">
            <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-1 border-r border-border/50 pr-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                    <Info className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xl leading-tight">Key Observational Facts</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-1">
                  Additional observations and triangulation notes from on-site and data sources.
                </p>
              </div>
              <div className="lg:col-span-2 p-4">
                <ol className="list-disc list-outside text-base space-y-3 leading-relaxed pl-6">
                  <li className="text-foreground">
                    Our Observations and stakeholder consultations reveal that **no people were drinking water from surface sources**, i.e. from the rivers.
                  </li>
                  <li className="text-foreground">
                    Our observations and data from PMA indicate that the **availability of sanitation facility** such as toilets and handwashing stations was **40 person per hour per toilet**.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
