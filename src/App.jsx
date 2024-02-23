import { useRef, useState } from 'react';
import './App.css'

function App() {


  const inputFirstName = useRef("");
  const inputLastName = useRef("");

  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      setDisplayName(inputFirstName.current.value + " " + inputLastName.current.value);
  }
  return (
   <div>
    <h1>Full Name Display</h1>
    <form onSubmit={(e) => handleSubmit(e)} style={{display: "inline-block",  width: "250px", margin: "20px"}}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id='firstName' ref={inputFirstName} required/>
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id='lastName' ref={inputLastName} required/>
      <button type='submit'>Submit</button>
    </form>

    {displayName.length > 0 && <h1>Full Name: {displayName}</h1>}
   </div>
  )
}

export default App
