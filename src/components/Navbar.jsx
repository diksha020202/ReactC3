import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate =useNavigate();
  return (
    <div style={{marginBottom:"10px",
     padding:"40px",
     backgroundColor:"pink", 
     color:"white",
     fontSize:"30px",
     fontWeight:"600",
     display:"flex",
     gap: "20px",
    }}  >
        <div>
         
           <Link to="/home">Home</Link>
        
        </div>
        <div>
        <Link to="/about">About</Link>
        </div>
        <div>
        <button onClick={()=> navigate("/login")} >Login</button>
        </div>
        
        <div>
        <Link to="/books">Books</Link>
        </div>
        <div>
        <Link to="/logout">Logout</Link>
        </div>
        
    </div>
  )
}

export default Navbar