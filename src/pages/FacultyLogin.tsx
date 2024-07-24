import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import HText from "@/shared/HText";
import TeacherImage from "@/assets/teacherSample.png";
import COEImage from "@/assets/coeSample.png";
import ActionButton from "@/shared/ActionButton";
import { useNavigate } from "react-router-dom";

type Props = {};

const FacultyLogin = (props: Props) => {
  const navigate = useNavigate();
  const handleTeacherLogin = () => {
    navigate("/teacher-login");
  };
  const handleCoeLogin = () => {
    navigate("/coe-login");
  };

  return (
    <div>
      <Navbar searchButtonNeeded={false} backToHome={true} />
      <div className="mt-36 ml-10">
        <HText>GCECT Question Bank</HText>
      </div>
      <div className="flex justify-center">
        <div className="bg-primary-100 w-max rounded-3xl mb-20">
          <div className="flex justify-center py-10">
            <HText>Faculty Login</HText>
          </div>
          <div className="flex justify-evenly">
            <div className="flex-col justify-evenly px-10 py-5">
              <img
                src={TeacherImage}
                alt="Image of Teacher"
                width={200}
                height={200}
                className="pb-5"
              />
              <div className="flex justify-center">
                <ActionButton
                  height="50px"
                  width="160px"
                  text="Teacher Login"
                  textSize="20px"
                  onClick={handleTeacherLogin}
                ></ActionButton>
              </div>
            </div>
            <div className="flex-col justify-evenly px-10 py-5">
              <img
                src={COEImage}
                alt="Image of Controller of Examinations"
                width={200}
                height={200}
                className="pb-5"
              />
              <div className="flex justify-center">
                <ActionButton
                  height="50px"
                  width="160px"
                  text="COE Login"
                  textSize="20px"
                  onClick={handleCoeLogin}
                ></ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FacultyLogin;
