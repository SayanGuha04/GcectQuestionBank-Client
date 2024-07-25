import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import HText from "@/shared/HText";
import LoginBox from "@/shared/LoginBox";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const credentialsApproved = true;
  const navigate = useNavigate();
  const handleLogin = () => {
    if (credentialsApproved) {
      navigate("/question-finder-students");
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
          heading="Student Login"
          IdLabel="Student ID"
          passwordLabel="Password"
          enterIdPlaceholder="Enter Roll No."
          enterPasswordPlaceholder="Enter password"
          buttonText="Login"
          onClick={handleLogin}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StudentLogin;
