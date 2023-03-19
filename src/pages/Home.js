import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOutUser } from '../config/Firebase/firebaseMethod'

function Home() {

  const navigate = useNavigate()

  const signout = ()=>{
    signOutUser()
    .then(()=>{
      navigate('/')
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signout}>Signout</button>
    </div>
  )
}

export default Home
