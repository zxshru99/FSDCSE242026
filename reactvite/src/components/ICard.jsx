import React from 'react'

function ICard() {
  return (
    <div>
         <div style={{border:'2px solid red ',width:'400px',height:'600px'}}>
    <h2 style={{color:'red'}}>ABES Engineering College</h2>
    <div>
    <p style={{color:'black', marginTop:'200px'}}>Name-Samridh Chaudhary</p>
    </div>
    <div>
    <p style={{color:'black'}}>Roll no-2400320100976</p>
</div>
    <p style={{color:'black'}}>Section-CSE 24</p>
   <ICard/>
   </div>
      
    </div>
  )
}

export default ICard
