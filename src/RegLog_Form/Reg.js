import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Axios from 'axios'
import axios from 'axios'
import './Reg.css'


function RegForm () {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword , setConfPassword] = useState('');
    console.log()

    // Function To Update  
    const handleNamechange = (e) => {
        setName(e.target.value)
    }

    const handleLnamechange = (e) => {
        setLname(e.target.value)
    }

    const handleUserchange = (e) => {
        setUsername(e.target.value)
    }

    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasschange = (e) => {
        setPassword(e.target.value)
    }

    const handleConfpasschange = (e) => {
        setConfPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password!=confPassword) {
           return alert('Password does not match')
        } 
        const user = {name, lname, username, email, password, confPassword}
        if(email==='') {
            return alert('Please Enter Your Email')
        }
        // const response = axios.post('http://localhost:5000/signup', user).then(() => {
        //     setName('')
        //     setLname('')
        //     setUsername('')
        //     setEmail('')
        //     setPassword('')
        //     setConfPassword('')
        // })
        // console.log(response)
        // alert(response)

        try {
            const response = await axios({
                method: "post",
                url: "http://localhost:5000/signup",
                data: user
            })
            console.log(response.data)
            alert(response.data.Message)
        } catch (error) {
          console.log(error)  
        }
    }

    return(
        <div className='container'>
            <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className='heading'>Signup</h1>
                <label>
                    Name:
                </label><br/>
                <input type="text" value={name} onChange={(e) => handleNamechange(e)} /><br/>
               
                <label>
                    Last Name:
                </label><br/>
                <input type="text" value={lname} onChange={(e) => handleLnamechange(e)} /><br/>
                
                <label>  
                    Username:
                </label><br/>
                <input type="text" value={username} onChange={(e) => handleUserchange(e)} /><br/>
                
                <label>
                    Email:
                </label><br/>
                <input type="email" value={email} onChange={(e) => handleEmailchange(e)} /><br/>
                
                <label>
                    Password:
                </label><br/>
                <input type="password" value={password} onChange={(e) => handlePasschange(e)} /><br/>

                <label>
                    Confirm Password:
                </label><br/>
        <input type="password" value={confPassword} required onChange={(e) => handleConfpasschange(e)} /><br/>
                     
        <button className='btn-1' type="submit" value="Submit" onClick={(e) => handleSubmit}>Signup</button>
        <Link to='/signin'>
        <button className='btn-2'>Signin</button>
        </Link>
            </form>
        </div>

    )
}

export default RegForm;