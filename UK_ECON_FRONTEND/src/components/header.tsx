import React from "react";
import type { Metric } from "../types/metrics";

interface HeaderProps {
    metric: Metric;
    onMetricChange: (metric: Metric) => void;
}
