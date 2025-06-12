import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Desciption from '../components/Description'
import GenerateButton from '../components/GenerateButton'

const Home = () => {
  return (
    <div>
    <div>
      <Header/>
      <Steps/>
      <Desciption/>
      <GenerateButton/>
    </div>
    </div>
  )
}

export default Home
