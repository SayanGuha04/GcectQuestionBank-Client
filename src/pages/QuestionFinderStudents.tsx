import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import Filters from "@/shared/Filters"; // Update the path according to your structure
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import {
    ChartBarIcon
  } from "@heroicons/react/24/solid";

const QuestionFinderStudents = () => {
  const handleFilter = () => {
    console.log("Filter applied");
    // Add your filter logic here
  };

  return (
    <div>
      <Navbar searchButtonNeeded={true} backToHome={true} />

      <div className="container mx-auto mt-32">
        <div className="flex justify-between px-10 mb-8">
          <HText>GCECT Question Bank</HText>
          <ActionButton
            height="50px"
            width="200px"
            text="Generate Paper"
            textSize="16px"
            onClick={() => {}}
          />
        </div>

        <Filters onFilter={handleFilter} />
        <div className="bg-primary-100 py-4 mb-20">
          {Array(4)
            .fill("How does an induction motor start?")
            .map((question, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-8 py-4 border-b my-2 border-primary-200"
              >
                <p className="text-primary-500 py-2">{question}</p>
                <ChartBarIcon className="h-6 w-6"/>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuestionFinderStudents;
