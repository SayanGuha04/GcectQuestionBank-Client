import React from "react";

type CourseNameProps = {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
};

const CourseName: React.FC<CourseNameProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-4 w-max py-2 bg-primary-200"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CourseName;
