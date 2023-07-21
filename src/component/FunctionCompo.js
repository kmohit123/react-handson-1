import React from 'react'
import  "../App.css";
function FunctionCompo() {
  return (
    <>
      <div className='funcompo'>
        <h1>This is created using FumctionCompo Component</h1>
        <p>This is done using External CSS</p>
        <p style={{ color: 'blue' }}>This is done using Inline CSS</p>
      </div>
    </>
  )
}
export default FunctionCompo
