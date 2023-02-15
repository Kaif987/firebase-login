import React, {useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Signup() {

  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [confirmation, setConfirmation ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmation) {
      return alert('Passwords do not match')
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      console.log("user created")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center'>
        <h2 >Sign up</h2>
          <form className='flex flex-col mt-4 gap-2' onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="text"
              onChange={(e) => {setEmail(e.target.value)}}
              className='border border-black ' placeholder='Email'/>
              <label htmlFor="password">Password</label>
              <input type="password" 
              onChange={(e) => {setPassword(e.target.value)}}
              className='border border-black ' placeholder='Password'/>
              <label htmlFor="confirmation">Confirm password</label>
              <input type="password"
              onChange={(e) => {setConfirmation(e.target.value)}}
              className='border border-black ' placeholder='Password'/>
              <input className='bg-blue-400 text-white uppercase ' type="submit" value="submit" />
          </form>
        </div>
    </div>
  )
}