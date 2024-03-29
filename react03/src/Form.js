//Commented part make changes accordingly to understand the useState method

import React,{useState} from 'react'

const Form = () => {

    //MULTIPLE STATES FOR FORM SUBMISSION
    //const [name,setName] = useState("");
    //const [email,setEmail] = useState("");
    //const [password,setPassword] = useState("");

    //SINGLE STATE FOR WHOLE FORM
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    
    const handleInput = (e) => {
        const {name, value} = e.target;

        setFormData({...formData,[name]:value})
    }

    //MULTIPLE STATE FUNCTIONS
    // const handleName = (e) => {
    //     console.log(e.target.value);
    //     setName(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     console.log(e.target.value);
    //     setEmail(e.target.value);
    // }

    // const handlePassword = (e) => {
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Use State Eg-3</h1>

        <label>
            Name: 
            <input type='text' name='name' value={formData.name} onChange={/*handleName*/ handleInput}/>
        </label>
        <br/><br />
        <label>
            Email: 
            <input type='email' name='email' value={formData.email} onChange={/*handleEmail*/ handleInput}/>
        </label>
        <br/><br />
        <label>
            Password: 
            <input type='password' name='password' value={formData.password} onChange={/*handlePassword*/ handleInput}/>
        </label>
        <br /> <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form