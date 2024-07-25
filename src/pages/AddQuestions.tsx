import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import ActionButton from "@/shared/ActionButton";
import Filters from "@/shared/Filters";
import HText from "@/shared/HText";
import { ChartBarIcon, PencilIcon } from "@heroicons/react/24/solid";

import { useNavigate } from "react-router-dom";

type Props = {};

const AddQuestions = (props: Props) => {
  const navigate = useNavigate();
  const handleFilter = () => {
    console.log("Filter applied");
    // Add your filter logic here
  };
  const handleFindQuestions = () => {
    navigate("/question-finder-teachers");
  };

  return (
    <div>
      <Navbar searchButtonNeeded={true} backToHome={true} />
      <div className="container mx-auto mt-32">
        <div className="flex justify-between px-10 mb-8">
          <HText>GCECT Question Bank</HText>
        </div>

        <Filters onFilter={handleFilter} />
        <div className="flex justify-end mb-8">
            <ActionButton
              height="50px"
              width="200px"
              text="Add Questions"
              textSize="16px"
              //TODO onclick
            />
            <div className="mx-2" />
            <ActionButton
              height="50px"
              width="200px"
              text="Generate Paper"
              textSize="16px"
              onClick={() => {}}
            />
          </div>
        <div className="bg-primary-100 py-4 mb-20">
          {Array(4)
            .fill("How does an induction motor start?")
            .map((question, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-8 py-4 border-b my-2 border-primary-200"
              >
                <p className="text-primary-500 py-2">{question}</p>
                <div className="flex">
                  <PencilIcon className="h-6 w-6" />
                  <div className="mx-1" />
                  <ChartBarIcon className="h-6 w-6" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddQuestions;
