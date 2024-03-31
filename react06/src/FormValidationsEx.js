import React from 'react'
import {useForm} from 'react-hook-form'
import './form.css'

const FormValidationsEx = () => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const password = watch("password");
    
    const onSubmit = (data) => console.log(data);
  return (
    <div className='container'>
        <br /><h1>USING UseForm</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type='text' name='name' {...register('name',{required:'Name is Required'})}/>
                <span>{errors.name && errors.name.message}</span>
            </div>
            <div>
                <label>E-Mail:</label>
                <input type='email' name='email'{...register('email',{required:'Email is required',pattern:{value:!/\S+@\S+\.\S+/,message:'Email is Invalid'}})}/>
                <span>{errors.email && errors.email.message}</span>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' {...register('password',{required:'Password is required',minLength:{value:6,message:'Password must be 6 characters'}})}/>
                <span>{errors.password && errors.password.message}</span>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' name='confirmPasssword' {...register('confirmPassword',{required:'C-Password is required', validate:value => value === password || 'Password does not match'})}/>
                <span>{errors.confirmPassword && errors.confirmPassword.message}</span>
            </div>
            <div>
                <label>Age:</label>
                <input type='text' name='age'/>
                <span>{errors.age}</span>
            </div>
            <div>
                <label>Gender:</label>
                <select name='gender'>
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

export default FormValidationsEx