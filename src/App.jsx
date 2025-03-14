import React, { useState, useEffect } from "react";
import "./App.css";
import MainHeader from "./components/header-section/MainHeader";
import NavigationBar from "./components/navigation-section/NavigationBar";
import Auth from "./components/auth/Auth";
import MainIndex from "./components/pet-section/MainIndex";


function App() {
// ! Create a state variable called token and a function called setToken using the useState hook. The initial value of token should be an empty string.
const [token, setToken] = useState("");

// ! Create a function called updateToken that will update the token state variable and save the token to local storage. The function should take in a newToken parameter.
function updateToken(newToken) {
  setToken(newToken)
  localStorage.setItem('token', newToken)
}

// ! Create a useEffect hook that will run when the component mounts and only run once. The useEffect hook should check if there is a token in local storage and if there is, it should set the token state variable to the token in local storage.
useEffect(() => {
    let storedToken = localStorage.getItem("token")
    if (storedToken){
      setToken(storedToken)
    }
}, []);



// ! ---------
  return (
    <div>
      <MainHeader/>
      <NavigationBar/>
     {/* <{!token ? <Auth updateToken = {updateToken} /> : <MainIndex} /> */}

{!token && <Auth updateToken = {updateToken} />} {token && <MainIndex token = {token}/>}
    </div>
  ); 
}

export default App;
