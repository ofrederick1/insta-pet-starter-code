import { Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import PetButton from "../../custom/PetButton";

// API Endpoint (Replace with actual API URL)
import { API_SIGNUP } from "../../../constants/endpoints";

const SignUp = (props) => {
  // TODO: Create state variables for first name, last name, email, and password using the useState hook. The initial value for first name should be "John", the initial value for last name should be "Doe", the initial value for email should be "

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  // TODO: Create a function called handleSubmit that will console.log("Click Worked")
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Click Worked");
    signUp();
  }

  // TODO: Create the function responsible for adding the new user to the database

  //body
  async function signUp() {
    try {
      const requestBody = {
        firstName,
        lastName,
        email,
        password,
      };
//headers
      const response = await fetch(API_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("Signup Response:", data);

      // Handle response 
      if (data.sessionToken) {
        props.updateToken(data.sessionToken);
      }
    } catch (error) {
      console.error(error);
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
          style={{ width: "450px", height: "530px" }}
        >
          <h2 className="text-center font-primary bold">SIGN UP FORM</h2>
          {/* Form Goes Here */}
          <Form>
            {/* Form Group for First Name */}
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            {/* Form Group End First Name */}

            {/* Form Group for Last Name */}
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            {/* Form Group End Last Name */}

            {/* Form Group for Email */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            {/* Form Group End Email */}
            {/* Form Group for Password */}
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* Form Group End Password */}
            <PetButton onClick={handleSubmit}>
              SIGN UP
            </PetButton>

          
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
