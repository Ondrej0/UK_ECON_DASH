import type { EconMetricResponse } from "./types";

const BASE_URL = "http://localhost:8000/api";

export async function getMetric(
  metric: "inflation" | "interest" | "unemployment",
  from: string,
  to: string
): Promise<EconMetricResponse> {
  const res = await fetch(
    `${BASE_URL}/metrics?metric=${metric}&from=${from}&to=${to}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch metric data");
  }

  return res.json();
}
