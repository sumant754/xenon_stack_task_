import React, { useState,useEffect } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
    const navigate= useNavigate();
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const [userInputVal, setUserInputVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });
  const [error , setError] = useState({})

  const validate = () => {
    let errors = {};
    const { firstName, email, password } = userInputVal;
    if (!firstName) errors.firstName = "First Name is required";

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
  
    setError(errors);
    return Object.keys(errors).length === 0;
  };
  // console.log(userInputVal);

  const getData = (e) => {
    const { value, name, id } = e.target;
    setUserInputVal(() => {
      if(name === 'gender'){
        return{
          ...userInputVal,
        [name]: id
        }
      }
      return {
        
        ...userInputVal,
        [name]: value,
      };
    });
    // console.log(e)
  };

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (name === 'email' && !regex.test(value)) {
      alert('Please enter a valid email address');
    }
  };
  const handleAddData = (e) => {
    e.preventDefault();
    if(validate()){
      const prevUsers= JSON.parse(localStorage.getItem('users')) || []

        localStorage.setItem("users", JSON.stringify([...prevUsers, userInputVal]));
      navigate('/login')
      console.log(userInputVal)
    }
    

  };

  useEffect(() => {
    const currUser= JSON.parse(localStorage.getItem("loggedUser"))
    if(currUser){
     navigate('/')
    }
     }, [])

  return (
    <>
      <section>
        <div className="signup">
          <div className="signupbox">
            <h2 className="signupTitle">Sign Up</h2>
            <p className="signupText">It's quick and easy</p>
          </div>

          <form className="signup-form" action="">
            <div className="name">
              <input
                className="firstName"
                type="text"
                name="firstName"
                id="fname"
                placeholder="First Name"
                required
                onChange={getData}
              />
              {error.firstName && (
              <span className="error">{error.firstName}</span>
            )}
              <input
                className="lastName"
                type="text"
                name="lastName"
                id="lname"
                placeholder="Last Name"
                required
                onChange={getData}
              />
               {error.lastName && (
              <span className="error">{error.lastName}</span>
            )}
            </div>
            <div className="otherdetails">
              <input
                className="signup-email"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={getData}
                onBlur={handleBlur}
                required
              />
              {error.email && (
              <span className="error">{error.email}</span>
            )}

              <input
                className="signup-password"
                type="password"
                name="password"
                id="pass"
                placeholder="New Password"
                required
                onChange={getData}
              />
              {error.password && (
              <span className="error">{error.password}</span>
            )}
              <div>
                <label className="gender">Gender</label>
                <br />
                <input type="radio" name="gender" id="male" onChange={getData} />
                <label className="labMale" htmlFor="1">
                  Male
                </label>
                <input type="radio" name="gender" id="female" onChange={getData} />
                <label className="labMale" htmlFor="2">
                  Female
                </label>
                <input type="radio" name="gender" id="others" onChange={getData} />
                <label className="labMale" htmlFor="3">
                  Others
                </label>
              </div>
            </div>
            <p className="termscondition">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive notifications from us and can opt
              out at any time
            </p>

            <button className="signup-button" onClick={handleAddData}>
              Sign Up
            </button>
            <p className="p">Already have an account <span><NavLink to='/login'>SignIn</NavLink></span></p>

          </form>
         
        </div>
      </section>
    </>
  );
}

export default Signup;
