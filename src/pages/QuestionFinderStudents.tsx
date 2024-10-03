import { useState, useEffect } from "react";
import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import Filters from "@/shared/Filters"; // Update the path according to your structure
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import {
    ChartBarIcon
  } from "@heroicons/react/24/solid";
import { any } from "prop-types";

  interface Question {
    question: string;
    marks: string;
  }
const QuestionFinderStudents = () => {

  const [questions, setQuestions] = useState<Question[]>([]);

  const getQuestions = async () => {
    try {

        const response = await fetch("http://localhost:5000/questions");
        const jsonData = await response.json();

        setQuestions(jsonData);
        
    } catch (err) {
      if (err instanceof Error) {
          console.error(err.message);
      } else {
          console.error("An unknown error occurred", err);
      } 
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

const handleFilter = (filteredChoices: any) => {
  console.log(filteredChoices);

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(filteredChoices)) {
    if (value !== null && value !== undefined && value != "") { // Check for both null and undefined
      params.append(key, value.toString()); // Convert to string if necessary
  }
  }

  // Generate the query string
  const queryString = params.toString(); // e.g., "marks=10&module=module1&subject=subject1"

  if(queryString) {
    // Use the query string in your GET request
    const url = `http://localhost:5000/questions/filter?${queryString}`;

    

    const getFilteredQuestions = async () => {
      try {
        console.log("object");
          const response = await fetch(url);
          const jsonData = await response.json();

          setQuestions(jsonData);
          
      } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("An unknown error occurred", err);
        } 
      }
    };
    getFilteredQuestions()
  } else {
    getQuestions();
  }

  
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
          {questions.map(question => (
              <div
                className="flex justify-between items-center px-8 py-4 border-b my-2 border-primary-200"
              >
                <p className="text-primary-500 py-2">{question.question}</p>
                <p className="text-primary-500 py-2 ">({question.marks})</p>
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
