import React from "react";

type ModuleNameDropdownProps = {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
};

const ModuleNameDropdown: React.FC<ModuleNameDropdownProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-4 py-2 bg-primary-200"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ModuleNameDropdown;
