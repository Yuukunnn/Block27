import { useState } from 'react'
import './App.css'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
  <div>
  <SignUpForm token={token} setToken={setToken}/>
  <Authenticate token={token} setToken={setToken}/>
  </div>
  );
}

export default App;
