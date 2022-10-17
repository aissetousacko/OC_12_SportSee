import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'

/**
 *
 * @param {boolean} active
 * @param {Array} payload
 * @returns Customized Tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-data">{`${payload[0].value} `}g</p>
        <p className="tooltip-data">{`${payload[1].value} `}Kcal</p>
      </div>
    )
  }
  return null
}

/**
 * Display a bar graph with the user daily activity results
 * @component
 * @param {Array} activity - array of user's activity
 * @returns {JSX.Element} Activity component
 */
const Activity = ({ activity }) => {
  const renderLineChart = (
    <BarChart
      width={835}
      height={320}
      data={activity}
      barSize={7}
      barGap={8}
      margin={{
        top: 80,
        right: 50,
        left: 45,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" stroke="#9B9EAC" />
      <Legend
        verticalAlign="top"
        align="right"
        iconType={'circle'}
        iconSize={8}
        width={277}
        height={25}
        wrapperStyle={{ top: 35, right: 20 }}
        formatter={(value) => {
          return (
            <span style={{ color: '#74798C', fontSize: 14, fontWeight: 500 }}>
              {value}
            </span>
          )
        }}
      />
      <YAxis
        tickLine={false}
        orientation="right"
        axisLine={false}
        tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
        tickMargin={45}
        minTickGap={27}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="kilogram"
        name="Poids (kg)"
        fill="#282D30"
        radius={[5, 5, 0, 0]}
      />
      <Bar
        dataKey="calories"
        name="Calories brulées (kCal)"
        fill="#E60000"
        radius={[5, 5, 0, 0]}
      />
      <text
        x="4%"
        y="15%"
        width={147}
        height={48}
        fill="#20253A"
        style={{ fontWeight: 600 }}
      >
        {' '}
        Activité quotidienne{' '}
      </text>
    </BarChart>
  )

  return <div className="activity">{renderLineChart}</div>
}

export default Activity
