import { useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function FormValidation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    isTouched: false,
    value: "",
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    
    return (firstName && 
    password.value.length >= 8 && 
    role !== "role" );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({isTouched: false,value: ""});
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input value={ firstName } placeholder="First name" onChange={e=> setFirstName(e.target.value)} required/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input value={ lastName } placeholder="Last name" onChange={e=> setLastName(e.target.value)} required/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input type="email" value={email} placeholder="Email address" onChange={e=> setEmail(e.target.value)} required/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input onBlur={()=>{setPassword({...password, isTouched: true})}} type="password" value={password.value} placeholder="Password" onChange={e => setPassword({ ...password, value: e.target.value })} required />
            { password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e=> setRole(e.target.value) }>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FormValidation;
