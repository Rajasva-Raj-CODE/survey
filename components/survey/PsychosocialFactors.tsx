"use client";

import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScoreCard from "@/components/charts/ScoreCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// -------------------- Types --------------------
type ResponseKey =
  | "Strongly Disagree"
  | "Disagree"
  | "Neutral"
  | "Agree"
  | "Strongly Agree";

type Group = {
  group: string;
  responses: Record<ResponseKey, number>;
};

type SurveyDatum = {
  indicator: string;
  perspective: string;
  groups: Group[];
};

// -------------------- Survey Data --------------------
const surveyData: SurveyDatum[] = [
  // Affinity towards hygiene practices - Age perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.325,
          Neutral: 10.465,
          Agree: 73.255,
          "Strongly Agree": 13.953,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.699,
          Disagree: 2.097,
          Neutral: 9.790,
          Agree: 64.335,
          "Strongly Agree": 23.076,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 1.498,
          Disagree: 0.0,
          Neutral: 16.479,
          Agree: 62.172,
          "Strongly Agree": 19.850,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 9.090,
          Agree: 68.181,
          "Strongly Agree": 22.727,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.754,
          Disagree: 0.377,
          Neutral: 7.547,
          Agree: 67.547,
          "Strongly Agree": 23.773,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 1.219,
          Disagree: 1.219,
          Neutral: 6.707,
          Agree: 66.463,
          "Strongly Agree": 24.390,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.418,
          Neutral: 17.094,
          Agree: 58.974,
          "Strongly Agree": 20.513,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 19.230,
          Agree: 69.231,
          "Strongly Agree": 11.538,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 16.666,
          Agree: 66.666,
          "Strongly Agree": 16.666,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 100.0,
          "Strongly Agree": 0.0,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Gender perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "gender_clean",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 1.079,
          Neutral: 11.151,
          Agree: 64.748,
          "Strongly Agree": 23.021,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.974,
          Disagree: 0.974,
          Neutral: 11.688,
          Agree: 65.800,
          "Strongly Agree": 20.562,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Holistic perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.748,
          Disagree: 0.998,
          Neutral: 11.564,
          Agree: 65.557,
          "Strongly Agree": 21.131,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Income perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 12.658,
          Agree: 67.088,
          "Strongly Agree": 20.253,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 1.403,
          Disagree: 1.052,
          Neutral: 14.736,
          Agree: 62.807,
          "Strongly Agree": 20.0,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 14.285,
          Agree: 85.714,
          "Strongly Agree": 0.0,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.563,
          Disagree: 1.315,
          Neutral: 9.962,
          Agree: 70.676,
          "Strongly Agree": 17.481,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.668,
          Disagree: 0.668,
          Neutral: 11.036,
          Agree: 58.193,
          "Strongly Agree": 29.4313,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Age perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 6.25,
          Neutral: 18.75,
          Agree: 68.75,
          "Strongly Agree": 6.25,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.448,
          Neutral: 13.793,
          Agree: 51.724,
          "Strongly Agree": 31.034,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.083,
          Neutral: 12.5,
          Agree: 70.833,
          "Strongly Agree": 14.583,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 6.25,
          Neutral: 18.75,
          Agree: 62.5,
          "Strongly Agree": 12.5,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.082,
          Neutral: 12.245,
          Agree: 69.387,
          "Strongly Agree": 14.286,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 7.143,
          Neutral: 3.571,
          Agree: 75.0,
          "Strongly Agree": 14.286,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 18.75,
          Agree: 68.75,
          "Strongly Agree": 12.5,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 12.5,
          Agree: 62.5,
          "Strongly Agree": 25.0,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 25.0,
          "Strongly Agree": 75.0,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 0.0,
          "Strongly Agree": 100.0,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Gender perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "gender_clean",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.921,
          Neutral: 1.960,
          Agree: 74.509,
          "Strongly Agree": 19.607,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.658,
          Neutral: 15.853,
          Agree: 63.4146,
          "Strongly Agree": 17.073,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Holistic perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.720,
          Neutral: 12.558,
          Agree: 66.046,
          "Strongly Agree": 17.674,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Income perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 6.666,
          Agree: 60.0,
          "Strongly Agree": 33.333,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.347,
          Neutral: 17.391,
          Agree: 69.5654,
          "Strongly Agree": 8.6953,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 50.0,
          Neutral: 50.0,
          Agree: 0.0,
          "Strongly Agree": 0.0,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.191,
          Neutral: 10.638,
          Agree: 61.702,
          "Strongly Agree": 24.468,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.448,
          Neutral: 12.069,
          Agree: 74.137,
          "Strongly Agree": 10.344,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Age perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.651,
          Neutral: 19.767,
          Agree: 54.651,
          "Strongly Agree": 20.930,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.699,
          Disagree: 5.594,
          Neutral: 31.468,
          Agree: 43.356,
          "Strongly Agree": 18.881,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.247,
          Neutral: 16.479,
          Agree: 59.176,
          "Strongly Agree": 22.097,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 2.273,
          Disagree: 2.273,
          Neutral: 14.773,
          Agree: 61.364,
          "Strongly Agree": 19.318,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 5.283,
          Neutral: 14.716,
          Agree: 60.0,
          "Strongly Agree": 20.0,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 1.219,
          Disagree: 1.219,
          Neutral: 13.414,
          Agree: 59.756,
          "Strongly Agree": 24.390,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.418,
          Neutral: 18.803,
          Agree: 44.444,
          "Strongly Agree": 33.333,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 15.384,
          Agree: 61.538,
          "Strongly Agree": 23.076,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 11.111,
          Neutral: 11.111,
          Agree: 33.333,
          "Strongly Agree": 44.4444,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 0.0,
          "Strongly Agree": 100.0,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Gender perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "gender_clean",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.158,
          Neutral: 15.467,
          Agree: 53.237,
          "Strongly Agree": 29.136,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.5411255411255411,
          Disagree: 3.896,
          Neutral: 18.290,
          Agree: 56.277,
          "Strongly Agree": 20.9955,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Holistic perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.415,
          Disagree: 3.494,
          Neutral: 17.637,
          Agree: 55.574,
          "Strongly Agree": 22.878,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Income perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 15.189,
          Agree: 67.088,
          "Strongly Agree": 17.721,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.912,
          Neutral: 17.894,
          Agree: 56.140,
          "Strongly Agree": 21.052,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 28.571,
          "Strongly Agree": 71.428,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.563,
          Disagree: 3.383,
          Neutral: 19.360,
          Agree: 57.330,
          "Strongly Agree": 19.360,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.668,
          Disagree: 3.344,
          Neutral: 15.384,
          Agree: 49.498,
          "Strongly Agree": 31.103,
        },
      },
    ],
  },
];

// -------------------- Helpers --------------------
const RESPONSE_ORDER: ResponseKey[] = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

const COLORS = {
  "Strongly Disagree": "#e11d48",
  Disagree: "#fb923c",
  Neutral: "#f59e0b",
  Agree: "#60a5fa",
  "Strongly Agree": "#10b981",
};

function buildChartData(groups: Group[]) {
  return groups.map((g) => ({
    name: g.group,
    ...g.responses,
  }));
}

// -------------------- StackedBarChart --------------------
function StackedBarChart({ groups }: { groups: Group[] }) {
  const data = useMemo(() => buildChartData(groups), [groups]);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-35}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 8 }} />

          {RESPONSE_ORDER.map((key) => (
            <Bar key={key} dataKey={key} stackId="a" fill={COLORS[key]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// -------------------- IndicatorCard --------------------
function IndicatorCard({ title, groups }: { title: string; groups: Group[] }) {
  return (
    <Card tabIndex={0} className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:bg-primary/10 dark:focus-visible:bg-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-border/30 shadow-sm">
          <StackedBarChart groups={groups} />
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {RESPONSE_ORDER.map((r) => (
            <div key={r} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded"
                style={{ background: COLORS[r], display: "inline-block" }}
              />
              <span className="text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// -------------------- Main Dashboard --------------------
export default function SurveyDashboard() {
  const indicators = Array.from(new Set(surveyData.map((s) => s.indicator)));
  const [activeIndicator, setActiveIndicator] = useState(indicators[0] || "");

  const perspectives = useMemo(() => {
    const perSet = new Set(
      surveyData
        .filter((s) => s.indicator === activeIndicator)
        .map((s) => s.perspective)
    );
    return Array.from(perSet);
  }, [activeIndicator]);

  const [activePerspective, setActivePerspective] = useState<string | null>(
    null
  );

  React.useEffect(() => {
    setActivePerspective(perspectives[0] || null);
  }, [activeIndicator, perspectives]);

  const activeDatum = surveyData.find(
    (s) =>
      s.indicator === activeIndicator && s.perspective === activePerspective
  );

  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const scoreCategories = [
    { label: "Low", range: [0, 400] as [number, number], color: "#ef4444" },
    { label: "Medium", range: [400, 700] as [number, number], color: "#fbbf24" },
    { label: "High", range: [700, 1000] as [number, number], color: "#22c55e" },
  ];

  const overallScores = [
    { score: 803, label: "Overall Satisfaction", description: "Combined satisfaction score across all metrics" },
    { score: 756, label: "Hygiene Affinity", description: "User affinity towards hygiene practices" },
    { score: 689, label: "WaSH Awareness", description: "General awareness of WaSH services" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-center leading-tight bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
        State of Psychosocial Factors of WaSH services
        <span className="text-primary block text-2xl font-normal mt-3">
          (Key Stakeholder: Floating Population)
        </span>
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-8">
        Interactive WaSH survey visualizations
      </p>

      <ScoreCard
        title="Key Performance Indicators"
        scores={overallScores}
        categories={scoreCategories}
        min={0}
        max={1000}
      />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/40 dark:to-blue-900/30 backdrop-blur-sm border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Summary Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-border/30">
                  <div className="text-4xl font-bold text-green-600 mb-2">87%</div>
                  <div className="text-sm text-muted-foreground">Agree with Hygiene Practices</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-border/30">
                  <div className="text-4xl font-bold text-blue-600 mb-2">84%</div>
                  <div className="text-sm text-muted-foreground">Aware of WaSH Services</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-border/30">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">78%</div>
                  <div className="text-sm text-muted-foreground">Satisfied with Services</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-6">
          {/* Indicator Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {indicators.map((ind) => (
              <Button
                key={ind}
                size="sm"
                className={`transition-transform ${ind === activeIndicator ? "" : "opacity-80 hover:opacity-100"}`}
                variant={ind === activeIndicator ? undefined : "ghost"}
                onClick={() => setActiveIndicator(ind)}
              >
                {ind}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1">
          <Card className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Perspective</h3>
            <div className="flex flex-col gap-2">
              {perspectives.map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePerspective(p)}
                  className={`text-left px-3 py-2 rounded-md transition-colors ${
                    p === activePerspective
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {capitalizeFirstLetter(p)}
                </button>
              ))}
            </div>
          </Card>
        </aside>

        <main className="lg:col-span-3">
          {activeDatum ? (
            <IndicatorCard
              title={`${activeIndicator} — ${capitalizeFirstLetter(activePerspective || "")}`}
              groups={activeDatum.groups}
            />
          ) : (
            <Card className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-sm">
              <p className="text-center text-muted-foreground">No data for selected combination</p>
            </Card>
          )}
        </main>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
