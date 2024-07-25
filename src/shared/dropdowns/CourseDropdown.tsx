import React from "react";

type CourseDropdownProps = {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
};

const CourseDropdown: React.FC<CourseDropdownProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-4  py-2 w-max bg-primary-200"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CourseDropdown;
