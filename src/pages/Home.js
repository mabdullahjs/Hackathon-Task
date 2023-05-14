import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MAModal from '../config/components/MAModal'
import MAButton from '../config/components/MAButton'
import { auth, sendData, signOutUser } from '../config/Firebase/firebaseMethod'
import MACheckbox from '../config/components/MACheckbox'
import MADatePicker from '../config/components/MADataPicker'

function Home() {
  //model state
  const [model, setModel] = useState(false);

  //date state
  const [date , setDate] = useState("");

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
        console.log(date);
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
      {/* <button onClick={signout}>Signout</button>
      <MAModal open={model} modalTitle="checking model" close={close} />
      <button onClick={() => setModel(true)}>Open Model</button>
      <MACheckbox label="open" />
      <MAButton onClick={dataSend} label="sendData" /> <br />
      <MADatePicker onChange={(e)=>setDate(e)}/> */}
      {/* <MASelect option={[{option:"ten" , value:10} ,{option:"twenty" , value:20} , {option:"thirty" , value:30} ]} onChange={(e)=>setAge(e.target.value)} value={age}/> */}

      <Routes>
        <Route path='/head' element={<h1>Head01</h1>} />
        <Route path='/head1' element={<h1>Head02</h1>} />
        <Route path='/head2' element={<h1>Head03</h1>} />
      </Routes>
    </div>
  )
}

export default Home
