import type { Metric } from "../types/metrics";

interface HeaderProps {
    metric: Metric;
    onMetricChange: (metric: Metric) => void;
}

export function Header({ metric, onMetricChange }: HeaderProps) {
    return (
        <header className="flex items-center  justify-between p-4 border-b">
            <h1 className="text-xl font-bold">UK Economic Dashboard</h1>
            <select value={metric} onChange={(e) => onMetricChange(e.target.value as Metric)} className="border rounded px-3 py-1">
                <option value="inflation" className="text-black">Inflation</option>
                <option value="interest" className="text-black">Interest Rates</option>
                <option value="unemployment" className="text-black">Unemployment</option>
            </select>
        </header>
    );
};