import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API_PET_CREATE } from "../../constants/endpoints";
import PetButton from "../custom/PetButton";

const PetCreate = (props) => {

  // TODO: Create state variables for title, description, and imageURL using the useState hook. The initial value for title should be "Awesome Pet", the initial value for description should be "No accidents today!", and the initial value for imageURL should be "https://images.unsplash.com/photo-1687360440731-d124aea41a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80".

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    console.log("Submit Clicked");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Pet Post</h2>
        <Form className="w-100">
          
          <PetButton onClick={handleSubmit}>Submit</PetButton>
        </Form>
      </div>
    </>
  );
};

export default PetCreate;
