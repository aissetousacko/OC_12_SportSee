import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = ({ id, name }) => {
  return (
    <div>
      <Link to={`/user/${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default UserProfile
