import Emblem from "@/assets/emblem.png";
import CollegeLogo from "@/assets/collegelogo.png";
import ActionButton from "@/shared/ActionButton";
import SearchBar from "@/shared/SearchBar";
import { useNavigate } from "react-router-dom";

type Props = {
  searchButtonNeeded: boolean;
  backToHome: boolean;
};

const Navbar = ({ searchButtonNeeded = true, backToHome = false }: Props) => {
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = "bg-primary-500";
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    //TODO
  };
  const handleStudentLogin = () => {
    navigate("/student-login");
  };
  const handleBackToHome = () => {
    navigate("/");
  };
  const handleFacultyLogin = () => {
    navigate("/faculty-login")
  }

  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6 h-[110px]`}
      >
        <div className="w-full flex justify-between items-center px-2">
          {/* LEFT SIDE */}
          <div className="flex gap-4 items-center">
            <img src={Emblem} alt="Emblem" height={40} width={40} />
            <img src={CollegeLogo} alt="College Logo" height={60} width={60} />
            <div>
              <p className="text-primary-100 font-semibold text-lg">
                Government College of Engineering
                <br /> & Ceramic Technology
              </p>
              <p className="text-primary-200 font-semibold text-sm">
                An autonomous institution under MAKAUT
                <br />
                NAAC accredited A Grade
              </p>
            </div>
          </div>

          {/* MIDDLE SIDE */}
          {searchButtonNeeded && <SearchBar onSearch={handleSearch} />}

          {/* RIGHT SIDE */}
          {backToHome && (
            <div className="flex items-center gap-4">
              <ActionButton
                height="50px"
                width="145px"
                text="Back to Home"
                textSize="16"
                onClick={handleBackToHome}
              />
            </div>
          )}
          {!backToHome && (
            <div className="flex items-center gap-4">
              <ActionButton
                height="40px"
                width="145px"
                text="Faculty Login"
                textSize="16"
                onClick={handleFacultyLogin}
              />

              <ActionButton
                height="40px"
                width="145px"
                text="Student Login"
                textSize="16"
                onClick={handleStudentLogin}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
