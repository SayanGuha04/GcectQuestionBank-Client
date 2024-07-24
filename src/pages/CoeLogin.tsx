import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import HText from "@/shared/HText";
import LoginBox from "@/shared/LoginBox";

const CoeLogin = () => {
  return (
    <div>
      <Navbar searchButtonNeeded={false} backToHome={true} />
      <div className="mt-36 ml-10">
        <HText>GCECT Question Bank</HText>
      </div>

      <div className="flex justify-center mt-10 mb-40">
        <LoginBox
          heading="COE Login"
          IdLabel="COE ID"
          passwordLabel="Password"
          enterIdPlaceholder="Enter ID"
          enterPasswordPlaceholder="Enter password"
          buttonText="Login"
        />
      </div>

      <Footer />
    </div>
  );
};

export default CoeLogin;
