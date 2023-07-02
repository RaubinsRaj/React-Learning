import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>Let's talk About our App!!!</h1>
      <User />
      <UserClass name={"Raubins Raj class"} location={"Singapore"} />
    </div>
  )
}

export default About