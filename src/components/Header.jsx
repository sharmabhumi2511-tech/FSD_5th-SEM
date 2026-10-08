

import React from 'react'
import { useNavigate } from 'react-router-dom'





export default function Header() {
      const navigate = useNavigate();
  return (
    <>
    
    <div style={{textAlign: 'center', color: 'white', backgroundColor: '#f2f2f2'}}>
        <nav style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      marginBottom: "20px",
    }}>  
            <button onClick={()=> navigate("/")}>Home</button>
            <button onClick={()=> navigate("/Products")}>Products</button>
            <button onClick={()=> navigate("/Contact")}>contacts</button>
            <button onClick={()=> navigate("/Cart")}>Cart</button>
            
            
             </nav>
        
        </div>    
    
    </>
  )
}