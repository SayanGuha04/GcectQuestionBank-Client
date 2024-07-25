import React, { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import CourseDropdown from "@/shared/dropdowns/CourseDropdown";
import DepartmentDropdown from "@/shared/dropdowns/DepartmentDropdown";
import SemesterDropdown from "@/shared/dropdowns/SemesterDropdown";
import YearDropdown from "@/shared/dropdowns/YearDropdown";
import TypeDropdown from "@/shared/dropdowns/TypeDropdown";
import CourseNameDropdown from "@/shared/dropdowns/CourseNameDropdown";
import ModuleNameDropdown from "@/shared/dropdowns/ModuleNameDropdown";
import MarksDropdown from "@/shared/dropdowns/MarksDropdown";
import courseNameOptions from "@/shared/data/courseName"; 
import moduleOptions from "@/shared/data/moduleName"; 
import semesterOptions from "@/shared/data/semesterOptions";
import yearOptions from "@/shared/data/yearOptions";
import marksOptions from "@/shared/data/marksOptions";
import typeOptions from "@/shared/data/typeOptions";
import courseOptions from "@/shared/data/courseOptions";
import departmentOptions from "@/shared/data/departmentOptions";

type FiltersProps = {
    onFilter: () => void;
  };

const Filters: React.FC<FiltersProps> = ({ onFilter }) => {

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [selectedModuleName, setSelectedModuleName] = useState("");
  const [selectedMarks, setSelectedMarks] = useState("");

  const onReset = () => {
    setSelectedCourse(courseOptions[0]);
    setSelectedDepartment(departmentOptions[0]);
    setSelectedSemester(semesterOptions[0]);
    setSelectedYear(yearOptions[0]);
    setSelectedType(typeOptions[0]);
    setSelectedCourseName(courseNameOptions[0]);
    setSelectedModuleName(moduleOptions[0]);
    setSelectedMarks(marksOptions[0]);
  };

  // Add logic here to update the options based on selected values
  // For example, filter courseNameOptions based on selectedCourse and selectedDepartment

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
        <YearDropdown
          options={yearOptions}
          selectedValue={selectedYear}
          onChange={setSelectedYear}
        />
        <TypeDropdown
          options={typeOptions}
          selectedValue={selectedType}
          onChange={setSelectedType}
        />
        <CourseNameDropdown
          options={courseNameOptions}
          selectedValue={selectedCourseName}
          onChange={setSelectedCourseName}
        />
        <MarksDropdown
          options={marksOptions}
          selectedValue={selectedMarks}
          onChange={setSelectedMarks}
        />
        <ModuleNameDropdown
          options={moduleOptions}
          selectedValue={selectedModuleName}
          onChange={setSelectedModuleName}
        />
        <ActionButton
          height="50px"
          width="150px"
          text="Filter"
          textSize="16px"
          onClick={onFilter}
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
