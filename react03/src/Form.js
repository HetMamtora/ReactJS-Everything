import React,{useState} from 'react'

const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

  return (
    <div>
        <h1>Use State Eg-3</h1>

        <label>
            Name: 
            <input type='text' value={name} onChange={handleName}/>
        </label>
        <br/><br />
        <label>
            Email: 
            <input type='email' value={email} onChange={handleEmail}/>
        </label>
        <br/><br />
        <label>
            Password: 
            <input type='password' value={password} onChange={handlePassword}/>
        </label>
    </div>
  )
}

export default Form