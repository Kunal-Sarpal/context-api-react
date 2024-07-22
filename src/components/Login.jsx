import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext';

const Login = () => {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const {setUser} = useContext(userContext)

    const handleLogin = () =>{
        setUser(prev => [...prev,name])
    }
    return (
        <div className='flex h-full justify-center flex-col items-center border-2  gap-10 '>


         <input type="username" className='p-10 text-xl' onChange={(e)=>setName(e.target.value)}  placeholder='Enter name' />
        <input type="password" className='p-10 text-xl'  onChange={(e)=>setPassword(e.target.value)} placeholder='.......' />
         <button onClick={handleLogin} className="p-3 bg-[#212121] hover:bg-zinc-700 px-6 font-bold text-white rounded-md">Login</button>
    </div>
  )
}

export default Login