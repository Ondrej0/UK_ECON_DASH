export interface MetricPoint {
  date: string;
  value: number;
}

export interface EconMetricResponse {
  metric: string;
  unit: string;
  current: number;
  history: MetricPoint[];
}
