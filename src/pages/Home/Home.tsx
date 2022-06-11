import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Div } from './Home.elements'

const Home = () => {
  return (
    <Div>
      <Navbar/>
      <h1>WELCOME HOME</h1>
      <h2>
        <Link to="/profil">
          Page profil
        </Link>
      </h2>
    </Div>
  )
}

export default Home