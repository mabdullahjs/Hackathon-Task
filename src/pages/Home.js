import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MAModal from '../config/components/MAModal'
import MAButton from '../config/components/MAButton'
import { auth, sendData, signOutUser } from '../config/Firebase/firebaseMethod'
import MACheckbox from '../config/components/MACheckbox'

function Home() {
  //model state
  const [model, setModel] = useState(false);

  //close function 
  function close(val) {
    setModel(val)
  }

  //send data
  const dataSend = () => {
    const userId = auth.currentUser.uid
    sendData({
      name: "checking",
      email: "checking",
      id: userId
    }, "datas")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //navigation

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
      <MAButton onClick={dataSend} label="sendData" />
    </div>
  )
}

export default Home
