import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MAModal from '../config/components/MAModal'
import MAButton from '../config/components/MAButton'
import { signOutUser } from '../config/Firebase/firebaseMethod'
import MACheckbox from '../config/components/MACheckbox'

function Home() {
  //model state
  const [model, setModel] = useState(false);

  //close function 
  function close(val) {
    setModel(val)
  }

  const navigate = useNavigate()

  const signout = () => {
    signOutUser()
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signout}>Signout</button>
      <MAModal open={model} modalTitle="checking model" close={close} />
      <button onClick={() => setModel(true)}>Open Model</button>
      <MACheckbox label="open" />
    </div>
  )
}

export default Home
