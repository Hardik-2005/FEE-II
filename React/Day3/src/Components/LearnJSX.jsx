import React from 'react'

const LearnJSX = () => {
    let randomNumber= Math.floor(Math.random() * 7)
    let luckyNum = 3
  return (<>
    <h1> We got the number 3: {randomNumber} </h1>
    {randomNumber === luckyNum ? <h1>You are a lucky boy</h1>: <h1>you are unlucky </h1> }
       
  
  
  </>
  )
}
    
export default LearnJSX