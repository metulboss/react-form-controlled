import React, { useState } from 'react';
import Style from '../from/Form.css'

const From = () => {

const handelNameChange =(e)=>{
    changeName(e.target.value)

}

const handelEmailChange =(e)=>{
    changeEmail(e.target.value)

}

const handelPassChange =(e)=>{
    changePassword(e.target.value)

}

const handelSubmit =(e)=>{
    console.log("from submit")
    e.preventDefault();
  let userinfo = {
    name:name,
    email:email,
    password:password
    }
    console.log(userinfo)

}


const [name,changeName] = useState('')
const [email,changeEmail] = useState('')
const [password,changePassword] = useState('')


    return (
        <div>
            <h1>Registration Form</h1>
            <form action="" onSubmit={handelSubmit}>
                <div className='fromGroup'>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' id='name' value={name} onChange={handelNameChange} required />
                </div>

                <div className='fromGroup'>
                <label htmlFor="email">Email : </label>
                <input type="email" name='email' id='email' value={email} onChange={handelEmailChange} required />
                </div>

                <div className='fromGroup'>
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' id='password' value={password} onChange={handelPassChange} required />
                </div>

                <div className='fromGroup'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default From;