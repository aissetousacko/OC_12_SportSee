import React from 'react'
import {
  PolarRadiusAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

const Performance = ({ performances }) => {
  // console.log(performances)

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
          data={performances}
        >
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            dy={2}
            stroke="#FFFFFF"
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />

          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
