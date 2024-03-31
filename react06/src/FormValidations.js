import React from 'react'
import './form.css'

const FormValidations = () => {

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
                <input type='text'/>
            </div>
            <div>
                <label>E-Mail:</label>
                <input type='text'/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password'/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password'/>
            </div>
            <div>
                <label>Age:</label>
                <input type='text'/>
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