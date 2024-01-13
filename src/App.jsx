import React from "react";
import {useState} from "react";


function App() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerAge, setRegisterAge] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginSubmit = () => {
    console.log("Login Form Data:", loginUsername, loginPassword);
  };

  const handleRegisterSubmit = () => {
    console.log("Register Form Data:", registerName, registerAge, registerPassword, confirmPassword);
  };

   return (
    <div className="mainDiv w-full h-screen p-20 flex flex-row place-content-evenly">
      <div className="LoginPart bg-white/[.08] flex flex-col p-20 pt-10 shadow-2xl rounded-3xl justify-center">
        <h1 className="text-center">Login</h1>
        <h2 className="pl-2">Username</h2>
        <input
          id="username"
          required
          type="text"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <h2 className="pl-2">Password</h2>
        <input
          id="password"
          required
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type="button" className="bg-black mt-2" onClick={handleLoginSubmit}>Log In</button>
      </div>


      <div className="bg-white/[.08] flex flex-col p-40 shadow-2xl rounded-3xl justify-evenly">
        <h1 className="text-center">Register</h1>
        <h2 className="pl-2">Name</h2>
        <input
          id="name"
          required
          type="text"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <h2 className="pl-2">Date Of Birth</h2>
        <input
          id="age"
          required
          type="date"
          className="p-4"
          value={registerAge}
          onChange={(e) => setRegisterAge(e.target.value)}
        />
        <h2 className="pl-2">Password</h2>
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        /> 
        <h2 className="pl-2">Confirm Password</h2>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" className="bg-black mt-2" onClick={handleRegisterSubmit}>Register</button>
      </div>


    </div>
    
  );
}

export default App;