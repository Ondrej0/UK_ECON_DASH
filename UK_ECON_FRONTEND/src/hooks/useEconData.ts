import { useEffect, useState } from "react";
import { getMetric } from "../services/econApi";
import type { EconMetricResponse } from "../types/apiTypes";

export function useEconData(metric: "inflation" | "interest" | "unemployment") {
  const [data, setData] = useState<EconMetricResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getMetric(metric, "2020-01", "2024-12")
      .then(setData)
      .catch(() => setError("Failed to load data"))
      .finally(() => setLoading(false));
  }, [metric]);

  return { data, loading, error };
}
