import React, { useState } from 'react'
import './form.css'


const FormValidations = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [errors,setErrors] = useState('');

    const validateForm = () => {
        const errors = {};

        //NAME
        if(!name){
            errors.name = 'Name is required';
        }

        //E-MAIL
        if(!email){
            errors.email = 'Email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }

        //PASSWORD
        if(!password){
            errors.password = 'Password is required';
        }
        else if(password.length <6){
            errors.password = 'Password should be less than 6 characters';
        }

        if(!confirmPassword){
            errors.confirmPassword ='Confirm Password is required';
        }
        else if(password !== confirmPassword){
            errors.confirmPassword = 'Password does not match';
        }

        //AGE
        if(!age){
            errors.age = 'Age is required';
        }
        else if(isNaN(age) || age<18){
            errors.age = 'Age must be numeric input and greater than 18';
        }

        //GENDER
        if(!gender){
            errors.gender = 'Gender is required';
        }

        console.log(errors);
        return errors;
    }

    function handleSubmit(e){
        e.preventDefault();

        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }
        else{
            console.log("Form Submitted");
        }
    }

  return (
    <div className='container'>
        <h1>Form Validations</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                <span>{errors.name}</span>
            </div>
            <div>
                <label>E-Mail:</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span>{errors.email}</span>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span>{errors.password}</span>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <span>{errors.confirmPassword}</span>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
                <span>{errors.age}</span>
            </div>
            <div>
                <label>Gender:</label>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <span>{errors.gender}</span>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidations