import type { Metric } from "../types/metrics";

interface HeaderProps {
    metric: Metric;
    onMetricChange: (metric: Metric) => void;
    startDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    endDate: Date | null;
    onEndDateChange: (date: Date | null) => void;
}

export function Header({ metric, onMetricChange, startDate, onStartDateChange, endDate, onEndDateChange }: HeaderProps) {
    return (
        <header className="flex items-center  justify-between p-4 border-b">
            <h1 className="text-xl font-bold">UK Economic Dashboard</h1>
            <h2 className="text-m font-semibold">Select Metric:</h2>
            <select value={metric} onChange={(e) => onMetricChange(e.target.value as Metric)} className="border rounded px-3 py-1">
                <option value="inflation" className="text-black">Inflation</option>
                <option value="interest" className="text-black">Interest Rates</option>
                <option value="unemployment" className="text-black">Unemployment</option>
            </select>
            <h2 className="text-m font-semibold">Date Picker:</h2>
            <input
                type="date"
                value={startDate ? startDate.toISOString().split('T')[0] : ''}
                onChange={(e) => onStartDateChange(e.target.value ? new Date(e.target.value) : null)}
                className="border rounded px-3 py-1"
            />
            <span className="mx-2">to</span>
            <input
                type="date"
                value={endDate ? endDate.toISOString().split('T')[0] : ''}
                onChange={(e) => onEndDateChange(e.target.value ? new Date(e.target.value) : null)}
                className="border rounded px-3 py-1"
            />
        </header>
    );
};