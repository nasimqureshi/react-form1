import React,{useState}  from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  
  const inputEvent = (event)=> {
    console.log(event.target.value);
    setName(event.target.value);
    
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
  }
  return(
    <>
    <div className="main-div">
    <form onSubmit={onSubmit}>
    <div>
    <h1>Hello {fullName} </h1>
  <input type="text" 
  placeholder="Enter Your Name"
  onChange={inputEvent} 
  value= {name}/>
  <br />
    <button type="submit">
      Submit Me
    </button>
    </div>
    </form>
  </div>
  </>
  )
}
export default App;
