import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(userContext)
  return (
    <div className='w-full h-full text-2xl  font-bold p-10'>
        {user.map((item,index)=>{
            return <div key={index}>{item}</div>
        })}
    </div>
  )
}

export default Profile