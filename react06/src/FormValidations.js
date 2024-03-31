import React, { useState } from 'react'
import './form.css'


const FormValidations = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [error,setError] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();

        console.log("Form Submitted")
    }

  return (
    <div className='container'>
        <h1>Form Validations</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>E-Mail:</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <label>Gender:</label>
                <select>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidations