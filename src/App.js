import React, { useState } from "react";
import "./index.css";

export default function App() {

  const [values, setValues] = useState({

    firstName: "",
    lastName: "",
    email: "",
  })

  const [submit, setsubmit] = useState(false)
  const [valid,setValid] = useState(false)

  const handleFirstName = (e) => { 
    e.preventDefault();
    setValues({...values,firstName: e.target.value})
  }

  const handleLastName = (e) => {
    setValues({...values,lastName: e.target.value})
  }

  const handleEmail = (e) => {
  setValues({...values,email: e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (values.firstName && values.lastName && values.email) {
      setsubmit(true)
      setValid(true)
    }
   
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>

        {submit && valid ? <div class="success-message">Success! Thank you for registering</div>
          : null}

        <input
          value={ values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={ handleFirstName}

        />
      
        { !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          value={ values.lastName}
          id="lastname"
          class="form-field"
          type="text"
          placeholder="LastName"
          name="lastName"
          onChange={ handleLastName}
        />
      
        {!values.lastName ? <span id="last-name-error">Please enter a last name</span>  :null}
        <input
          id="email"
          value={ values.email}
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          onChange={ handleEmail }
        />
        
        {!values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
