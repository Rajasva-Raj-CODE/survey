"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Info, TrendingUp, BarChart3, Droplets } from "lucide-react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function OperationsManagement() {
  // Waste Collection Data from Maha Kumbh Mela Report (JAN-FEB 2025)
  const wasteCollectionData = [
    { date: "13-01-2025", weight: 217.135, month: "January" },
    { date: "14-01-2025", weight: 116.445, month: "January" },
    { date: "15-01-2025", weight: 236.31, month: "January" },
    { date: "16-01-2025", weight: 246.73, month: "January" },
    { date: "17-01-2025", weight: 214.72, month: "January" },
    { date: "18-01-2025", weight: 219.03, month: "January" },
    { date: "19-01-2025", weight: 197.425, month: "January" },
    { date: "20-01-2025", weight: 257.69, month: "January" },
    { date: "21-01-2025", weight: 287.225, month: "January" },
    { date: "22-01-2025", weight: 306.55, month: "January" },
    { date: "23-01-2025", weight: 304.245, month: "January" },
    { date: "24-01-2025", weight: 278.405, month: "January" },
    { date: "25-01-2025", weight: 257.195, month: "January" },
    { date: "26-01-2025", weight: 276.395, month: "January" },
    { date: "27-01-2025", weight: 323.215, month: "January" },
    { date: "28-01-2025", weight: 148.89, month: "January" },
    { date: "29-01-2025", weight: 28.23, month: "January" },
    { date: "30-01-2025", weight: 281.65, month: "January" },
    { date: "31-01-2025", weight: 503.29, month: "January" },
    { date: "01-02-2025", weight: 603.755, month: "February" },
    { date: "02-02-2025", weight: 635.275, month: "February" },
    { date: "03-02-2025", weight: 532.21, month: "February" },
    { date: "04-02-2025", weight: 615.51, month: "February" },
    { date: "05-02-2025", weight: 778.76, month: "February" },
    { date: "06-02-2025", weight: 456.78, month: "February" },
    { date: "07-02-2025", weight: 513.025, month: "February" },
    { date: "08-02-2025", weight: 271.765, month: "February" },
    { date: "09-02-2025", weight: 595.475, month: "February" },
    { date: "10-02-2025", weight: 458.305, month: "February" },
    { date: "11-02-2025", weight: 542.31, month: "February" },
    { date: "12-02-2025", weight: 326.915, month: "February" },
    { date: "13-02-2025", weight: 657.34, month: "February" },
    { date: "14-02-2025", weight: 458.705, month: "February" },
    { date: "15-02-2025", weight: 448.695, month: "February" },
    { date: "16-02-2025", weight: 353.27, month: "February" },
    { date: "17-02-2025", weight: 322.83, month: "February" },
    { date: "18-02-2025", weight: 494.86, month: "February" },
    { date: "19-02-2025", weight: 419.095, month: "February" },
    { date: "20-02-2025", weight: 434.77, month: "February" },
    { date: "21-02-2025", weight: 396.205, month: "February" },
    { date: "22-02-2025", weight: 316.225, month: "February" },
    { date: "23-02-2025", weight: 378.65, month: "February" },
    { date: "24-02-2025", weight: 360.305, month: "February" },
    { date: "25-02-2025", weight: 387.425, month: "February" },
    { date: "26-02-2025", weight: 381.03, month: "February" },
  ];

  // Monthly totals
  const monthlyTotals = [
    { month: "January", total: 4700.805, color: "#3b82f6" },
    { month: "February", total: 12139.49, color: "#10b981" },
  ];

  // Custom tooltip for charts
  interface TooltipProps {
    active?: boolean;
    payload?: Array<{ value: number; [key: string]: unknown }>;
    label?: string;
  }

    const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm p-3 border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800/95">
          <p className="font-semibold text-gray-800 dark:text-gray-100">{`Date: ${label}`}</p>
          <p className="text-blue-600 dark:text-blue-400">{`Weight: ${payload[0].value.toFixed(3)} MT`}</p>
        </div>
      );
    }
    return null;
  };

  // Indicator matrix content (Indicator | Definition | Data | Inference)
  const matrixRows = [
    {
      title:
        "Safe operation and management of water infrastructure such as water ATMs, Water tankers and standposts.",
      definition:
        "Ensuring uninterrupted and hygienic access to potable water through proactive maintenance, trained operators, coordinated supply logistics, and swift grievance redressal for the pilgrims.",
      data: (
        <>
<div className="mt-2 flex flex-col items-center">
            <Image
              src="/survey/State_operation_management/figure_c1.jpeg"
              alt="ATM Machine operator explaining its proper usage; monitoring the infrastructure services"
              width={1200}
              height={675}
              className="w-full max-w-lg rounded-xl border-4 border-blue-200 dark:border-blue-900/40 shadow-lg object-cover"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center italic">
              ATM Machine operator explaining usage; demonstrating active monitoring of services.
            </p>
          </div>
        </>
      ),
    },
{
      title:
        "Satisfaction with planning and mapping for easy access to water services",
      definition:
        "Assessing how effectively water infrastructure was strategically placed to ensure pilgrims' easy, timely, and crowd-free access to safe drinking water.",
      data: (
        <>
          <Card className="rounded-xl border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/20 dark:to-blue-950/20 shadow-xl">
            <CardHeader className="py-3 border-b border-cyan-400/50 bg-cyan-400/10 dark:bg-cyan-900/20">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
                <Users className="w-5 h-5" />
                Pilgrim Satisfaction with Water Facilities Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 p-3 bg-blue-100/70 dark:bg-blue-900/40 rounded-lg border border-blue-300 dark:border-blue-700/50 text-center">
                  <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">27%</p>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Highly satisfied</p>
                </div>
                <div className="col-span-1 p-3 bg-emerald-100/70 dark:bg-emerald-900/40 rounded-lg border border-emerald-300 dark:border-emerald-700/50 text-center">
                  <p className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300">63%</p>
                  <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Satisfied</p>
                </div>
                <div className="col-span-1 p-3 bg-slate-100/70 dark:bg-slate-900/40 rounded-lg border border-slate-300 dark:border-slate-700/50 text-center">
                  <p className="text-3xl font-extrabold text-slate-700 dark:text-slate-300">10%</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Neutral</p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-400/50 bg-amber-50/70 dark:bg-amber-900/20 p-4 shadow-inner">
                <p className="text-sm text-foreground leading-relaxed font-semibold">
                  Inference:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                 Inference: A total of 90% of the respondents surveyed during the Kumbh Mela were satisfied with the timely planning and adequacy of water facilities, with no explicit dissatisfaction, reflecting efficient planning and mapping of services before their implementation
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      ),
    },
  {
      title:
        "Operational Capacity of Water infrastructure",
      definition:
        "The capacity of water infrastructure to reliably meet the drinking water needs of the pilgrims.",
      data: (
        <>
          <Card className="rounded-xl border-2 border-emerald-400/50 bg-emerald-50/70 dark:bg-emerald-900/20 shadow-xl">
            <CardContent className="p-4 flex items-center gap-4">
              <Droplets className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Daily Dispensing Rate:</p>
                <p className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                  12,000 - 15,000 Litres of RO water daily (sufficient)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  *Backup water sources were in place for Shahi Snan days, ensuring continuous supply.
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      ),
    },
    {
      title: "Maintenance of a hygienic environment",
      definition:
        "Keeping WaSH facilities and their surroundings consistently clean and safe through routine cleaning, timely waste management, adequate cleaning staff and supplies, and prompt response to spills or blockages to protect pilgrim health.",
      data: (
        <>
          <h2 className="text-lg font-semibold mb-2">
            Hygienic environment maintained
          </h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/survey/Maintenance of a hygienic environment/figure_c2.png"
                alt="Sprinkling of malathion and bleaching powder"
                width={1200}
                height={675}
                className="w-full max-w-md md:max-w-lg rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sprinkling of malathion and bleaching powder to mitigate bad
                odor and eradicate vector disease spread at Sector 19
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/survey/Maintenance of a hygienic environment/figure_c3.png"
                alt="Sanitation worker scrubbing water spillage beneath water ATM"
                width={1200}
                height={675}
                className="w-full max-w-md md:max-w-lg rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sanitation worker scrubbing water spillage beneath water ATM
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title:
        "Collaboration & partnership among institutional stakeholders providing WaSH",
      definition:
        "Coordinated action between government bodies, NGOs, service providers, community groups, and private partners to jointly monitor service delivery through promotional campaigns, driving a behavioral shift among pilgrims towards becoming more WaSH sensitive and aware.",
      data: (
        <>
          <div className="mt-2 flex flex-col items-center">
            <Image
              src="/survey/State_operation_management/figure_c4.png"
              alt="ATM Machine operator explaining its proper usage; monitoring the infrastructure services"
              width={1200}
              height={675}
              className="w-full max-w-md md:max-w-lg rounded-md border object-cover"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Nukkad Natak at Sector 5 by GIWA and Dettol to create awareness of
              regular handwashing
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Safe operation and management of sanitation services",
      definition:
        "Ensuring toilets, urinals, and waste systems remain functional, clean, and accessible through regular maintenance, timely waste disposal, adequate staffing and quick response to breakdowns.",
      data: (
        <>
          {/* Original Images Section */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/survey/State_operation_management/figure_c5.png"
                alt="Sanitation workers collecting trash with sewage nets"
                width={1200}
                height={675}
                className="w-full max-w-md rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sanitation workers collecting trash with sewage nets
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/survey/State_operation_management/figure_c6.png"
                alt="Sanitation workers transporting solid waste to transfer station by handcarts"
                width={1200}
                height={675}
                className="w-full max-w-md rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sanitation workers transporting solid waste to transfer station
                by handcarts
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/survey/State_operation_management/figure_c7.png"
                alt="Sanitation workers sweeping in sectors 15 and 16"
                width={1200}
                height={675}
                className="w-full max-w-md rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Sanitation workers sweeping in sectors 15 and 16
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/survey/State_operation_management/figure_c8.jpeg"
                alt="Cleaning of toilets by frontline workers"
                width={1200}
                height={675}
                className="w-full max-w-md rounded-md border object-cover"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Cleaning of toilets by frontline workers
              </p>
            </div>
          </div>
          {/* Waste Collection Charts Section */}
          <Card className="border rounded-md border-primary/30 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 mb-6">
            <CardHeader className="py-3 border-b border-primary/20 bg-primary/5">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Daily Waste Collection during Maha Kumbh Mela Report (JAN-FEB
                2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Trend Line Chart */}
              <div className="mb-6">
                <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  Daily Waste Collection Trend
                </h4>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={wasteCollectionData}
                      margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="date"
                        stroke="#6b7280"
                        fontSize={10}
                        angle={-30}
                        textAnchor="end"
                        height={60}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        stroke="#6b7280"
                        fontSize={10}
                        label={{
                          value: "Weight (MT)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 3 }}
                        activeDot={{ r: 5, stroke: "#3b82f6", strokeWidth: 2 }}
                        name="Waste Weight (MT)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Monthly Comparison Chart */}
              <div className="mb-6">
                <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                  Monthly Waste Collection Comparison
                </h4>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyTotals}
                      margin={{ top: 20, right: 20, left: 15, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                      <YAxis
                        stroke="#6b7280"
                        fontSize={10}
                        label={{
                          value: "Total Weight (MT)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip
                        formatter={(value: number) => [
                          `${value} MT`,
                          "Total Weight",
                        ]}
                        labelStyle={{ color: "#374151" }}
                      />
                      <Bar
                        dataKey="total"
                        fill="#10b981"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ),
    },
    {
      title:
        "Actionable cleaning protocols to maintain a hygienic and safe environment",
      definition:
        "Establishing clear and standardized routines for cleaning and disinfection of WaSH facilities and their surroundings, with defined frequency, responsibilities, and monitoring.",
      data: (
        <>
                  <Card className="rounded-xl border-2 border-amber-400/50 bg-amber-50/70 dark:bg-amber-900/20 shadow-xl">
            <CardHeader className="py-3 border-b border-amber-400/50 bg-amber-400/10 dark:bg-amber-900/20">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-amber-700 dark:text-amber-300">
                <BarChart3 className="w-5 h-5" />
                Perception on Maintenance & Cleaning Protocols
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Bar Chart for Perception Data */}
              <div className="mb-6">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { category: "Strongly Agree", percentage: 39, color: "#10b981" },
                        { category: "Agree", percentage: 39, color: "#3b82f6" },
                        { category: "Neutral", percentage: 9, color: "#f59e0b" },
                        { category: "Disagree", percentage: 9, color: "#ef4444" },
                        { category: "Strongly Disagree", percentage: 5, color: "#dc2626" }
                      ]}
                      margin={{ top: 20, right: 20, left: 15, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="category" 
                        stroke="#6b7280" 
                        fontSize={10}
                        angle={-30}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis
                        stroke="#6b7280"
                        fontSize={10}
                        label={{
                          value: "Percentage (%)",
                          angle: -90,
                          position: "insideLeft-center ",
                        }}
                        domain={[0, 50]}
                      />
                      <Tooltip
                        formatter={(value: number) => [`${value}%`, "Percentage"]}
                        labelStyle={{ color: "#374151" }}
                      />
                      <Bar
                        dataKey="percentage"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-200 dark:border-emerald-900/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Strongly Agree</span>
                  </div>
                  <p className="text-xl font-bold text-emerald-600">39%</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-900/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Agree</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">39%</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-900/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Neutral</span>
                  </div>
                  <p className="text-xl font-bold text-amber-600">9%</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-900/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-red-900 dark:text-red-100">Disagree</span>
                  </div>
                  <p className="text-xl font-bold text-red-600">9%</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-900/40">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <span className="text-sm font-medium text-red-900 dark:text-red-100">Strongly Disagree</span>
                  </div>
                  <p className="text-xl font-bold text-red-600">5%</p>
                </div>
              </div>
              {/* Inference */}
              <div className="rounded-md border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-900/20 p-4">
                <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Inference:</h5>
                <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                  The survey demonstrates strong confidence of infra and service providers in the hygienic management of WaSH facilities, with 78% of respondents in agreement with the tanks being cleaned properly and daily. A smaller share expressed disagreement or remained neutral, suggesting limited but present skepticism.
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        State of Operations and Management of WaSH services
        <span className="text-primary block text-2xl font-normal mt-3">
          (Key Stakeholders: Infrastructure and Service)
        </span>
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-8">
        Indicator | Definition | Data
      </p>

      {/* Indicator Matrix with Side-by-Side Layout */}
      <div className="grid grid-cols-1 gap-6">
        {matrixRows.map((row, idx) => (
          <Card
            key={idx}
            tabIndex={0}
            className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20"
          >
            <CardContent className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Title and Definition Section - Compact */}
                <div className="lg:col-span-1 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm flex-shrink-0">
                      <Info className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-lg leading-tight text-foreground">
                      {row.title}
                    </h4>
                  </div>

                  <div className="bg-muted/50 p-3 rounded-md border-l-3 border-primary">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Definition:</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {row.definition}
                    </p>
                  </div>
                </div>

                {/* Data Section - More Space */}
                <div className="lg:col-span-3">
                  <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-border/30 shadow-sm">
                    <div className="text-base text-foreground leading-relaxed">
                      {row.data}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
