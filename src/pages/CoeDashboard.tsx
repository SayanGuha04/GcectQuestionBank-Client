import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import BigButton from "@/shared/BigButton";
import HText from "@/shared/HText";
import { useNavigate } from "react-router-dom";

type Props = {};

const CoeDashboard = (props: Props) => {
  const navigate = useNavigate();

  const handleStudent = () => {
    navigate("/edit-student-details");
  };

  const handleTeacher = () => {
    navigate("/edit-teacher-details");
  };

  const handleSyllabus = () => {
    navigate("/add-subject");
  };

  return (
    <div>
      <Navbar searchButtonNeeded={true} backToHome={true} />
      <div className="mt-36 ml-10">
        <HText>GCECT Question Bank</HText>
        <div className="py-2"></div>
        <HText>Welcome, Partha Haldar</HText>
      </div>
      <div className="py-28 flex items-center justify-around mx-5">
        <BigButton
          text="Edit Student Details"
          imgPath="../src/assets/student.png"
          onClick={handleStudent}
        />
        <BigButton
          text="Edit Teacher Details"
          imgPath="../src/assets/teacherSample.png"
          onClick={handleTeacher}
        />
        <BigButton
          text="Edit Syllabus"
          imgPath="../src/assets/book.png"
          onClick={handleSyllabus}
        />
      </div>

      <Footer />
    </div>
  );
};

export default CoeDashboard;
