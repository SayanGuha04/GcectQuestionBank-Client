import React, { useState, useEffect, useCallback } from "react";
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
  const [animation, setAnimation] = useState<
    "slideInRight" | "slideInLeft" | "slideOutRight" | "slideOutLeft" | "none"
  >("none");
  const [isHovering, setIsHovering] = useState(false);

  const handlePrevSlide = () => {
    setAnimation("slideOutRight");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setAnimation("slideInLeft");
    }, 500); // Duration of the slide-out transition
  };

  const handleNextSlide = () => {
    setAnimation("slideOutLeft");
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setAnimation("slideInRight");
    }, 500); // Duration of the slide-out transition
  };

  // Handle auto-slide functionality
  const startAutoSlide = useCallback(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        handleNextSlide();
      }
    }, 5000); // 5000 ms = 5 seconds

    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    const clearInterval = startAutoSlide();

    return () => {
      clearInterval();
    };
  }, [startAutoSlide]);

  return (
    <section className="py-32 ml-5 relative">
      <HText>GCECT Question Bank</HText>
      <div className="flex justify-around">
        <div className="relative py-6 overflow-hidden">
          <div
            className={`relative h-[540px] w-[900px] transition-transform duration-500 ${animation === "slideInLeft" ? "animate-slideInLeft" : animation === "slideInRight" ? "animate-slideInRight" : ""}`}
          >
            <img
              src={slides[currentSlide].imgSrc}
              alt="Slide Image"
              className="rounded-lg object-cover h-full w-full blur-sm"
            />
          </div>
          <div className="top-0 absolute flex-col justify-around h-full pt-10 pb-8 px-10">
            <h1 className="text-8xl font-black text-primary-500">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-4xl font-light text-primary-500 pt-5 pb-4">
              {slides[currentSlide].subheading}
            </p>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <ActionButton
                height="50px"
                width="220px"
                text="Checkout Questions"
                textSize="20px"
              />
            </div>

            <div
              className="absolute bottom-10 left-4 flex space-x-2 px-8 py-3"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
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
