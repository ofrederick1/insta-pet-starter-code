import React, { useState } from "react";

import { Form, FormGroup, Input, Label } from "reactstrap";
import PetButton from "../../custom/PetButton";
import { API_LOGIN } from "../../../constants/endpoints";

const Login = (props) => {
  // TODO: Create state variables for email and password using the useState hook. The initial value for email should be a user that is already in your DB for testing purposes.  Same with the password.

  const [email, setEmail] = useState("test3@test.com");
  const [password, setPassword] = useState("password1234");

  function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  async function login() {
    try {
      // Headers
    
      // Request Body
    
      // Request Options
     
      // Send Request

      // Response Object
     
      // Update Token from the App.jsx file
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="d-flex justify-content-center mt-5"
        style={{ height: "50vh" }}
      >
        <div
          className="secondary-background p-5 rounded"
          style={{ width: "450px", height: "370px" }}
        >
          <h2 className="text-center font-primary bold">LOGIN FORM</h2>
          {/* Form Goes Here */}
          <Form>
            {/* Form Group for Email */}
           
            {/* Form Group End Email */}
            {/* ----------------------------- */}
            {/* Form Group for Password */}
            
            {/* Form Group End Password */}

            {/* Button Here */}
            <PetButton onClick={handleSubmit}>LOGIN</PetButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
