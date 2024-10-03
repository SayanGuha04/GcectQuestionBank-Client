import React, { useEffect, useState } from "react";
import ActionButton from "@/shared/ActionButton";
import CourseDropdown from "@/shared/dropdowns/CourseDropdown";
import DepartmentDropdown from "@/shared/dropdowns/DepartmentDropdown";
import SemesterDropdown from "@/shared/dropdowns/SemesterDropdown";
//import YearDropdown from "@/shared/dropdowns/YearDropdown";
//import TypeDropdown from "@/shared/dropdowns/TypeDropdown";
import CourseNameDropdown from "@/shared/dropdowns/CourseNameDropdown";
import ModuleNameDropdown from "@/shared/dropdowns/ModuleNameDropdown";
import MarksDropdown from "@/shared/dropdowns/MarksDropdown";
import courseNameOptions from "@/shared/data/courseName"; 
import moduleOptions from "@/shared/data/moduleName"; 
import semesterOptions from "@/shared/data/semesterOptions";
//import yearOptions from "@/shared/data/yearOptions";
import marksOptions from "@/shared/data/marksOptions";
//import typeOptions from "@/shared/data/typeOptions";
import courseOptions from "@/shared/data/courseOptions";
import departmentOptions from "@/shared/data/departmentOptions";

type FiltersProps = {
    onFilter: (choices: any) => void;
  };

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  //const [selectedYear, setSelectedYear] = useState("");
  //const [selectedType, setSelectedType] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [selectedModuleName, setSelectedModuleName] = useState("");
  const [selectedMarks, setSelectedMarks] = useState("");

  const onReset = () => {
    setSelectedCourse(courseOptions[0]);
    setSelectedDepartment(departmentOptions[0]);
    setSelectedSemester(semesterOptions[0]);
    //setSelectedYear(yearOptions[0]);
    //setSelectedType(typeOptions[0]);
    setSelectedCourseName(nameOptions[0]);
    setSelectedModuleName(moduleNameOptions[0]);
    setSelectedMarks(marksNameOptions[0]);
    location.reload();
  };

  // Add logic here to update the options based on selected values
  // For example, filter courseNameOptions based on selectedCourse and selectedDepartment

  const [nameOptions, setNameOptions] = useState<string[]>([]);
  useEffect(() => {
    courseNameOptions() // Call the function that returns a promise
        .then(data => {
            setNameOptions(data); // Set the options when the promise resolves
        })
        .catch(error => {
            console.error('Error fetching course names:', error); // Handle any errors
        });
  }, []); // Empty dependency array to run only once

  const [moduleNameOptions, setModuleNameOptions] = useState<string[]>([]);
  useEffect(() => {
    moduleOptions().then(data => { setModuleNameOptions(data)})
  },[]); // Empty dependency array to run only once
  const [marksNameOptions, setMarksNameOptions] = useState<string[]>([]);
  useEffect(() => {
    marksOptions().then(data => { setMarksNameOptions(data)})
  },[]); // Empty dependency array to run only once


  const handleFilter = () => {
    const filteredChoices = {
        marks: (selectedMarks === "All Marks" ? null : selectedMarks),
        module: (selectedModuleName === "All Modules" ? null : selectedModuleName),
        subject: (selectedCourseName === "All Subjects" ? null : selectedCourseName),
        sem: (selectedSemester === "All Semesters" ? null : selectedSemester),
        degree: (selectedCourse === "All courses" ? null : selectedCourse),
        isCS: (selectedDepartment === "CSE" ? true : null),
        isIT: (selectedDepartment === "IT" ? true : null),
        isCT: (selectedDepartment === "CT" ? true : null)
    };

    onFilter(filteredChoices); // Call the parent's onFilter function with filteredChoices
};

  // onFilter = () => {
  //   console.log(filteredChoices);
  //   const getQuestions = async () => {
  //     try {
  
  //         const response = await fetch("http://localhost:5000/questions/filter", {
  //           method: 'GET',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(filteredChoices),
  //         });
  //         const jsonData = await response.json();
  
  //         setQuestions(jsonData);
          
  //     } catch (err) {
  //       if (err instanceof Error) {
  //           console.error(err.message);
  //       } else {
  //           console.error("An unknown error occurred", err);
  //       } 
  //     }
  //   };
  // }

  return (
    <div>
      <div className="flex justify-center gap-4 mb-2 flex-wrap">
        <CourseDropdown
          options={courseOptions}
          selectedValue={selectedCourse}
          onChange={setSelectedCourse}
        />
        <DepartmentDropdown
          options={departmentOptions}
          selectedValue={selectedDepartment}
          onChange={setSelectedDepartment}
        />
        <SemesterDropdown
          options={semesterOptions}
          selectedValue={selectedSemester}
          onChange={setSelectedSemester}
        />
        {/* <YearDropdown
          options={yearOptions}
          selectedValue={selectedYear}
          onChange={setSelectedYear}
        /> */}
        {/* <TypeDropdown
          options={typeOptions}
          selectedValue={selectedType}
          onChange={setSelectedType}
        /> */}
        <CourseNameDropdown
          options={nameOptions}
          selectedValue={selectedCourseName}
          onChange={setSelectedCourseName}
        />
        <MarksDropdown
          options={marksNameOptions}
          selectedValue={selectedMarks}
          onChange={setSelectedMarks}
        />
        <ModuleNameDropdown
          options={moduleNameOptions}
          selectedValue={selectedModuleName}
          onChange={setSelectedModuleName}
        />
        <ActionButton
          height="50px"
          width="150px"
          text="Filter"
          textSize="16px"
          onClick={handleFilter}
        />
        <ActionButton
          height="50px"
          width="150px"
          text="Reset"
          textSize="16px"
          onClick={onReset}
        />
      </div>
    </div>
  );
};

export default Filters;
