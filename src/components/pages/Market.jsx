import React from 'react'
import {useNavigate, Routes ,Route} from 'react-router-dom'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Google from '../Google'


const Market = () => {
   
    
  const navigate = useNavigate();
 
   
  return (
    <h1>
        
        <button onClick={()=> navigate("/Market/sign-in")}>Sign In</button>
        <button onClick={()=> navigate("/Market/sign-up")}>Sign Up</button>
        <button onClick={()=> navigate("/Market/sign-in-google")}>Market with Google</button>
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Enter password' />

        

        <div>
        <Routes>
            <Route path="sign-in" element={<SignIn/>} />
            <Route path="sign-up" element={<SignUp/>}/>
            <Route path="sign-in-google" element={<Google/>}/>
        </Routes>
        </div>

       
        
    </h1>
  )
}

export default Market;