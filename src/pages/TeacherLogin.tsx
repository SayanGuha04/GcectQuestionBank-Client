import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import HText from "@/shared/HText";
import LoginBox from "@/shared/LoginBox";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

interface TeacherLoginProps {
  setTeacherAuth: (boolean: boolean) => void;
}


const TeacherLogin: React.FC<TeacherLoginProps> = ({setTeacherAuth}) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };



  const handleLogin = async() => {
    
    if (!name || !password ) {
      return alert("Please fill in all fields");
    }


    try {

      const body = {name, password};

      const response = await fetch(
          "http://localhost:5000/auth/login/teacher", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        
        try {
          const response = await fetch("http://localhost:5000/isteacher", {
            method: "GET",
            headers: {token: localStorage.token}
          });

          const verify = await response.json();
          setTeacherAuth(verify);

        } catch (err) {
          console.log(err);
          setTeacherAuth(false);
        }
        
         // Set authenticated state
    } else {
        setTeacherAuth(false);
        alert(`Invalid ID/Password (${parseRes.error} token)`);
    }

  } catch (err) {
      console.error(err);
  }
  };

  return (
    <div>
      <Navbar searchButtonNeeded={false} backToHome={true} />
      <div className="mt-36 ml-10">
        <HText>GCECT Question Bank</HText>
      </div>

      <div className="flex justify-center mt-10 mb-40">
        <LoginBox
          heading="Teacher Login"
          IdLabel="Teacher ID"
          passwordLabel="Password"
          enterIdPlaceholder="Enter ID"
          enterPasswordPlaceholder="Enter password"
          buttonText="Login"
          onClick={handleLogin}
          name={name}
          password={password}
          onNameChange={handleNameChange}
          onPasswordChange={handlePasswordChange}
        />
      </div>

      <Footer />
    </div>
  );
};

export default TeacherLogin;
