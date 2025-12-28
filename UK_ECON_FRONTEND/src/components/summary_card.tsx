import type { Metric } from "../types/metrics";

interface SummaryCardProps {
  title: string;
  value: string;
  subtext?: string;
}

function SummaryCard({ title, value, subtext }: SummaryCardProps) {
  return (
    <div className="bg-indigo-900/60 rounded-xl px-6 py-4 w-48">
      <p className="text-sm text-gray-300">{title}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
      {subtext && (
        <p className="text-sm text-gray-400">{subtext}</p>
      )}
    </div>
  );
}
