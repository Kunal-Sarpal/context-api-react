import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  return (
    <>
     
    <UserContextProvider>
      <div className='grid w-full h-screen   grid-cols-12 grid-rows-1'>
        <div className='col-span-6 bg-slate-300'>
      <Login/>

        </div>
          <div className='col-span-6 flex justify-center items-center'>

      <Profile/>
        </div>
      </div>
    </UserContextProvider>
    </>
  )
}

export default App