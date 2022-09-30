import "./App.css";
import { useState } from "react";

let validate=false;
function App() {
  let [password, setPassword] = useState();
  let [email, setEmail] = useState();
  let [country, setCountry] = useState();
  let [errors, setErrors] = useState({ email: "", password: "", country: "" });

  const changeHandlerEmail = (e) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = e.target.value;
    if (regexEmail.test(email)) {
      if (email.length < 6 || email.length > 25) {
        errors.email = "Enter valid email";
      } else {
        errors.email = "";
        validate=true;
      }
    } else {
      errors.email = "Enter valid email";
      validate=false
    }
    setErrors(errors);
    setEmail(email);
  };

  const changeHandlerPassword = (e) => {
    let regexPassword =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{4,12}$/;
    password = e.target.value;
    if (regexPassword.test(password)) {
      errors.password = "";
      validate=true;
    } else {
      errors.password = "Enter valid password";
      validate=false
    }
    setErrors(errors);
    setPassword(password);
  };
  const changeHandlerCountry = (e) => {
    let index=document.getElementById("inpCountry").selectedIndex
    country = e.target.value;
    if (index>0) {
      errors.country = "";
      validate=true;
    } else {
      errors.country = "Select a country";
      validate=false
    }
    setErrors(errors);
    setCountry(country);
  };

  const submit = () => {
    let jsonArr=[];
    let checked=document.getElementById("inpAccept").checked;
    const onlyInputs = document.querySelectorAll("form .inpText");
    onlyInputs.forEach((input) => {
      jsonArr.push(input.value)
    });
    jsonArr.push(country)
    jsonArr.push(checked)
    if(validate===true&&checked===true){
      console.log(jsonArr)
  }
  else{
      alert("Please enter all the fields and accept the terms")
  }
  };

  return (
    <div className="App">
      <div id="signLog">
        <h2>Create Account</h2>
        <form>
          <div>
            <label>Email:</label>
            <input className="inpText" id="inpEmail" value={email} onChange={changeHandlerEmail} />
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <label>Password:</label>
            <input
              id="inpPassword"
              className="inpText"
              value={password}
              onChange={changeHandlerPassword}
            />
            <span className="error">{errors.password}</span>
          </div>
          <div>
            <label>Country:</label>
            <select
              id="inpCountry"
              value={country}
              onChange={changeHandlerCountry}
            >
              <option value="Select a country">Select a country</option>
              <option value="India">India</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Spain">Spain</option>
              <option value="Canada">Canada</option>
            </select>
            <span className="error">{errors.country}</span>
          </div>
          <div id="termsDiv">
            <input type="checkbox" id="inpAccept" />I accept the terms of service
          </div>
        </form>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
