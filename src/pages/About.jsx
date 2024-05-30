import React, { useState } from 'react'
import { jwtDecode } from "jwt-decode";
import {GoogleLogin } from '@react-oauth/google';
function About() {
    const [userData, setUserData] = useState(null);
  return (
    <div className='App'>
    <h2>React Google Sign-In</h2>
    {!userData && (
      <GoogleLogin
        className="sign"
        onSuccess={credentialResponse => {
          const details = jwtDecode(credentialResponse.credential);
          const userData = {
            picture: details.picture,
            name: details.name,
            email: details.email
          };
          setUserData(userData);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    )}
    {userData && (
      <div>
        <h3>Logged in</h3>
        <img src={userData.picture} alt="Profile" />
        <h3>Name: {userData.name}</h3>
        <p>Email: {userData.email}</p>
      </div>
    )}
  </div>
  )
}

export default About