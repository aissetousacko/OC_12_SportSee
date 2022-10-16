import React from 'react'
import UserProfile from '../components/UserProfile'

const Home = () => {
  return (
    <div className="home">
      <div className="home__profile">
        {/* <Link to="user/13">
          <p>Mock</p>
        </Link> */}
        <UserProfile name="Mocked person" id="13" />
      </div>
    </div>
  )
}

export default Home
