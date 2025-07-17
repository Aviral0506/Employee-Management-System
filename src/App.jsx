import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'

function App() {

  const [user, setuser] = useState(null);
  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123'){
    console.log("This is Admin")
    setuser('admin')
    } 
    else if(email == 'user@me.com' && password == '123'){
      console.log("This is User")
      setuser('employee')
    } 
    else{
      alert("Invalid Credentials")
    }
  } 
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
