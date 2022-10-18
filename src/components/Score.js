import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * Display a radial graph with the user score results
 * @component
 * @param {Array} score - array of user's score
 * @returns {JSX.Element} Score component
 */
const Score = ({ score }) => {
  const data = [
    {
      uv: score,
      fill: '#E60000',
    },
  ]

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          style={{ backgroundColor: '#FBFBFB' }}
          width="100%"
          height="100%"
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          innerRadius={70}
          barSize={10}
          data={data}
          startAngle={80}
          endAngle={450}
        >
          <circle cx="50%" cy="50%" fill="white" r="82"></circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}
          />
          <RadialBar
            background
            dataKey="uv"
            angleAxisId={1}
            fill="#E60000"
            cornerRadius="10"
            data={[data[0]]}
          />
          <text
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="45%"
            textAnchor="middle"
          >{`${score}%`}</text>
          <text
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="55%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="65%"
            textAnchor="middle"
          >
            objectif
          </text>
          <text
            x="12%"
            y="15%"
            width={147}
            height={48}
            textAnchor="start"
            dominantBaseline="middle"
            fill="#20253A"
            style={{ fontWeight: 500 }}
          >
            Score{' '}
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
}

export default Score
