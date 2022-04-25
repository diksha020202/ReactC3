import React from 'react'
import {useNavigate, Routes ,Route} from 'react-router-dom'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Google from '../Google'


const Login = () => {
   
    
  const navigate = useNavigate();
 
   
  return (
    <h1>
        
        <button onClick={()=> navigate("/login/sign-in")}>Sign In</button>
        <button onClick={()=> navigate("/login/sign-up")}>Sign Up</button>
        <button onClick={()=> navigate("/login/sign-in-google")}>login with Google</button>
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

export default Login;