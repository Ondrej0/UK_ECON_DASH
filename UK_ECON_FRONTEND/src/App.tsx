import { useState } from 'react'
import { Header } from './components/header'
import type { Metric } from './types/metrics'
import './App.css'

function App() {
  const [metric, setMetric] = useState<Metric>('inflation')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <>
      <Header  metric={metric} onMetricChange={setMetric} startDate={startDate} onStartDateChange={setStartDate} endDate={endDate} onEndDateChange={setEndDate} />
      <main className="p-4">
        <p className="text-lg">
          Current metric: <strong>{metric}</strong>
        </p>
        <p>
          Current start date: <strong>{startDate ? startDate.toDateString() : 'Not set'}</strong>
        </p>
         <p>
          Current end date: <strong>{endDate ? endDate.toDateString() : 'Not set'}</strong>
        </p>
      </main>
    </>
  )
}

export default App
