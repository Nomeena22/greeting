import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let greetings = ""
  const cssstyle = { }
  let currntdate = new Date(2024,3 ,3, 18);
  currntdate = currntdate.getHours();
  if (currntdate >= 1 && currntdate < 12){
    greetings = "good morning";
    cssstyle.color = "green";
    
  }else if (currntdate >= 12 && currntdate < 17){
    greetings = "good noon";
    cssstyle.color = "#ff9a3c";

  }else if (currntdate >= 17 && currntdate < 19){
    greetings = "good evening"
    cssstyle.color = "#5585b5"
  }else {
    greetings = "good night"
    cssstyle.color = "purple"
  }

  return (
    <>
      <h1>Hello sir, <span style={cssstyle}>{greetings }</span></h1>
    </>
  )
}

export default App
