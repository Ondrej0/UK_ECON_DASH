import { useState } from 'react'
import { Header } from './components/header'
import type { Metric } from './types/metrics'
import './App.css'

function App() {
  const [metric, setMetric] = useState<Metric>('inflation')

  return (
    <>
      <Header  metric={metric} onMetricChange={setMetric} />
      <main className="p-4">
        <p className="text-lg">
          Current metric: <strong>{metric}</strong>
        </p>
      </main>
    </>
  )
}

export default App
