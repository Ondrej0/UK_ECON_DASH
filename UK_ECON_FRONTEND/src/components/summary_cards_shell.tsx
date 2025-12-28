import type { Metric } from "../types/metrics";

interface SummaryCardsProps {
  metric: Metric;
}

export function SummaryCards({ metric }: SummaryCardsProps) {
  return (
    <div className="flex gap-6">
      {/* cards go here */}
    </div>
  );
}
