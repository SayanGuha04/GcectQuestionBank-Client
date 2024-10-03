import React from "react";
import ActionButton from "./ActionButton";

interface LoginProps {
  heading: string;
  IdLabel: string;
  passwordLabel: string;
  enterIdPlaceholder: string;
  enterPasswordPlaceholder: string;
  buttonText: string;
  onClick?: () => void;
  name: string;
  password: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginBox: React.FC<LoginProps> = ({
  heading,
  IdLabel: studentIdLabel,
  passwordLabel,
  enterIdPlaceholder: enterStudentIdPlaceholder,
  enterPasswordPlaceholder,
  buttonText,
  onClick,
  name,
  password,
  onNameChange,
  onPasswordChange
}) => {
  return (
    <div className="bg-primary-100 p-6 rounded-lg w-full max-w-sm mx-auto">
      <h2 className="text-center text-2xl font-bold text-primary-500 mb-6">
        {heading}
      </h2>
      <div className="mb-4">
        <label
          htmlFor="studentId"
          className="block text-sm font-medium text-primary-400"
        >
          {studentIdLabel}
        </label>
        <input
          type="text"
          id="studentId"
          className="mt-1 block w-full border border-primary-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-primary-300"
          placeholder={enterStudentIdPlaceholder}
          value={name}
          onChange={onNameChange} // Add this line
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-primary-400"
        >
          {passwordLabel}
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full border border-primary-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:ring-primary-300"
          placeholder={enterPasswordPlaceholder}
          value={password}
          onChange={onPasswordChange} // Add this line
        />
      </div>
      <div className="flex justify-center">
        <ActionButton
          height="40px"
          width="100px"
          textSize="20px"
          text={buttonText}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default LoginBox;
