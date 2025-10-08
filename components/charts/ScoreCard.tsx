"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GaugeChart from "./GaugeChart";

interface ScoreData {
  score: number;
  label: string;
  description?: string;
}

interface ScoreCardProps {
  title: string;
  scores: ScoreData[];
  categories?: Array<{
    label: string;
    range: [number, number];
    color: string;
  }>;
  min?: number;
  max?: number;
}

export default function ScoreCard({
  title,
  scores,
  categories,
  min = 0,
  max = 1000,
}: ScoreCardProps) {
  return (
    <Card className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/40 dark:to-blue-900/30 backdrop-blur-sm border border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scores.map((scoreData, index) => (
            <div key={index} className="flex flex-col items-center">
              <GaugeChart
                value={scoreData.score}
                label={scoreData.label}
                categories={categories}
                min={min}
                max={max}
              />
              {scoreData.description && (
                <p className="text-xs text-muted-foreground text-center mt-2 max-w-xs">
                  {scoreData.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {categories && (
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/30">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-sm font-medium text-foreground">
                  {cat.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({cat.range[0]}-{cat.range[1]})
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
