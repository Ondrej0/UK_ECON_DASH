import type { Metric } from "../types/metrics";

interface SummaryCardsProps {
    metric: Metric;
    currentValue: number;
    trend: number;
}