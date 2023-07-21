import React, { Component } from 'react'
import  "../App.css";
class ClassCompo extends Component {
  render() {
    return (
      <>
        <div className='classcompo'>
          <h1>This is created using Class Component</h1>
          <p>This is done using External CSS</p>
          <p style={{ color: 'blue' }}>This is done using Inline CSS</p>
        </div>
      </>
    )
  }
}
export default ClassCompo
