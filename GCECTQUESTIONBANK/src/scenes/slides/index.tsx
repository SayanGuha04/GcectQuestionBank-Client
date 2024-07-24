import React, { useState } from "react";
import HText from "@/shared/HText";
import Campus from "@/assets/collegeCampus.jpg";
import Exam from "@/assets/writingPaper.jpg";
import SampleGraph from "@/assets/sampleGraph.png";
import ActionButton from "@/shared/ActionButton";
import SwitchButton from "@/shared/SwitchButton";

// Define an array of slides
const slides = [
  {
    imgSrc: Campus,
    heading: "The GCECT\nQuestion Bank\nMakes it easier",
    subheading: "Get question papers ready on the go",
  },
  {
    imgSrc: Exam,
    heading: "Test yourself\non a generated\nquestion paper",
    subheading: "And get a score with helpful insights",
  },
  {
    imgSrc: SampleGraph,
    heading: "See trends on\nPrevious Year\nQuestion Papers",
    subheading: "To grasp important questions",
  },
];

const Slides: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="py-32 ml-5 relative">
      <HText>GCECT Question Bank</HText>
      <div className="flex justify-around">
        <div className="relative py-6">
          <img
            src={slides[currentSlide].imgSrc}
            alt="Slide Image"
            height={630}
            width={900}
            className="rounded-lg blur-sm brightness-125 to-transparent"
          />
          <div className="top-0 absolute flex-col justify-around h-full py-9 px-10">
            <h1 className="text-8xl font-black text-primary-500 ">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-4xl font-light text-primary-500 pt-5 pb-4">
              {slides[currentSlide].subheading}
            </p>
            <ActionButton
              height="50px"
              width="220px"
              text="Checkout Questions"
              textSize="20px"
            />
            <div className="absolute bottom-10 left-4 flex space-x-2 px-8 py-3">
              <SwitchButton text="<" onClick={handlePrevSlide} />
              <SwitchButton text=">" onClick={handleNextSlide} />
            </div>
          </div>
        </div>
        <div className="bg-primary-200 p-8 rounded-2xl h-max max-h-min w-80">
          <h2 className="font-semibold text-2xl mb-4">Notice Box</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Maths(BS101) Mid Sem-I Paper Uploaded</li>
            <li>Physics (BS201) Mid Sem-I Paper Uploaded</li>
            <li>DSA (BS101) Mid Sem-I Paper Uploaded </li>
            <li>CO (BS101) Mid Sem-I Paper Uploaded </li>
            <li>Electrical (BS101) Mid Sem-I Paper Uploaded</li>
            <li>English (BS101) Mid Sem-I Paper Uploaded</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slides;
