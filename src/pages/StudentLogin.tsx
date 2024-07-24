import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import LoginBox from "@/shared/LoginBox";
import React from "react";

type Props = {};

const StudentLogin = (props: Props) => {
  return (
    <div>
      <Navbar searchButtonNeeded={false} backToHome={true} />
      <LoginBox
        heading="Student Login"
        studentIdLabel="Student ID"
        passwordLabel="Password"
        enterStudentIdPlaceholder="Enter Roll No."
        enterPasswordPlaceholder="Enter password"
        buttonText="Login"
      />
      <Footer />
    </div>
  );
};

export default StudentLogin;
