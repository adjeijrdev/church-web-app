"use client"

import { useState } from "react"


export default function MakeForm() {

    const { firstName, setFirstName } = useState('')
    const { lastName, setLasttName } = useState('')
    const { email, setEmail } = useState('')
    const { password, setPassword } = useState('')


  return (
   <div>
     <nav>
        <h1>Methodist Church Ghana</h1>
        <h2>Accra Diocese - New Aplaku Circuit</h2>
        <h3>Official Town Society</h3>
    </nav>
    <form>
        <label>
            <h4>first Name :</h4>
            <input 
                type="text"
                value={firstName}
                onChange={e=> setFirstName(e)}
                placeholder="Enter your first name "
            />
        </label>
        <label>
            <h4>Last Name :</h4>
            <input 
                type="text"
                value={lastName}
                onChange={e => setLasttName(e)}
                placeholder="Enter your last name"
            />
        </label>
        <label>
            <h4>Email :</h4>
            <input 
                type="emaail"
                value={email}
                onChange={e => setEmail(e)}
                placeholder="Enter your email"
            />
        </label>
        <label>
            <h4>Password :</h4>
            <input 
                type="password"
                value={password }
                onChange={e => setPassword(e)}
                placeholder="Enter your password "
            />
        </label>

        <button type="submit">Submit</button>
    </form>
   </div>
  )
}
