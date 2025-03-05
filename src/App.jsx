import React, { useState, useEffect } from "react";
import "./App.css";
import MainHeader from "./components/header-section/MainHeader";
import NavigationBar from "./components/navigation-section/NavigationBar";
import Auth from "./components/auth/Auth";
import MainIndex from "./components/pet-section/MainIndex";

function App() {
// TODO: Create a state variable called token and a function called setToken using the useState hook. The initial value of token should be an empty string.

// TODO: Create a function called updateToken that will update the token state variable and save the token to local storage. The function should take in a newToken parameter.


// TODO: Create a useEffect hook that will run when the component mounts and only run once. The useEffect hook should check if there is a token in local storage and if there is, it should set the token state variable to the token in local storage.


  return (
    <div>
      <h3>Hello from App</h3>
      {/* TODO: Import and Mount Main Header */}
      {/* TODO: Import and Mount Navigation Bar */}
      {/* TODO: Import and mount Auth */}
    </div>
  );
}

export default App;
