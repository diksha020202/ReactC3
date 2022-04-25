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
     justifyContent:"center",
    }}  > DikshaSharma
        <div>
         
           <Link to="/start">Start</Link>
        
        </div>
        <div>
        <Link to="/sell">Sell</Link>
        </div>
        <div>
        <button onClick={()=> navigate("/market")} >Market</button>
        </div>
        
        <div>
        <Link to="/manage">Manage</Link>
        </div>
        
    </div>
  )
}

export default Navbar