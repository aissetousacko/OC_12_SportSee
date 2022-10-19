import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Rectangle,
  Tooltip,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {boolean} active
 * @param {Array} payload
 * @returns Customized Tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip-session">
        <p className="tooltip-data-session">{`${payload[0].value} `}min</p>
      </div>
    )
  }
  return null
}

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  )
}

/**
 * Display a radar graph with the user performance results
 * @component
 * @param {Array} sessions - array of user's performance
 * @returns {JSX.Element} Session component
 */
const Session = ({ sessions }) => {
  return (
    <div>
      <LineChart
        style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
        width={258}
        height={263}
        data={sessions}
        margin={{
          top: 50,
          right: -2,
          left: -60,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          fillOpacity={0.5}
          style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}
          tick={{ fill: '#FFFFFF', fontWeight: 500, fontSize: 12 }}
          tickMargin={10}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={['dataMin - 5', 'dataMax + 5']}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          dot={false}
          opacity={0.8}
          strokeWidth={2}
        />
        <text
          x="12%"
          y="15%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          Durée moyenne des{' '}
        </text>
        <text
          x="12%"
          y="25%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          sessions
        </text>
      </LineChart>
    </div>
  )
}

Session.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
}

export default Session
