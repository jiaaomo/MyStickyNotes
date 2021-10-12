import React, {useState} from 'react'


export default function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const register = (e) =>{
        e.preventDefault();
        fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
    }

    return (
        <div>
            <h1>Register</h1>
            <br/>
            <form onSubmit = {register}>
                <input 
                    onChange= {(e) => setUsername(e.target.value)}
                    placeholder="username"/>
                <br/>
               
                <input 
                    type = "password"
                    onChange= {(e) => setPassword(e.target.value)}
                    placeholder="password"/>
                <button type = "submit">Register</button>
            </form>
        </div>
    )
}
