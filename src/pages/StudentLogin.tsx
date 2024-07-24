import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import HText from "@/shared/HText";
import LoginBox from "@/shared/LoginBox";

const StudentLogin = () => {
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
        />
      </div>

      <Footer />
    </div>
  );
};

export default StudentLogin;
