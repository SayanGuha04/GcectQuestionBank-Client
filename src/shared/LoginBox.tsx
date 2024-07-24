import React from "react";

interface LoginProps {
  heading: string;
  studentIdLabel: string;
  passwordLabel: string;
  enterStudentIdPlaceholder: string;
  enterPasswordPlaceholder: string;
  buttonText: string;
}

const LoginBox: React.FC<LoginProps> = ({
  heading,
  studentIdLabel,
  passwordLabel,
  enterStudentIdPlaceholder,
  enterPasswordPlaceholder,
  buttonText,
}) => {
  return (
    <div className="bg-primary-200 p-4 rounded-md">
      <h2 className="text-center text-lg font-bold">{heading}</h2>
      <div className="mt-4">
        <label htmlFor="studentId" className="block text-sm font-medium">
          {studentIdLabel}
        </label>
        <input
          type="text"
          id="studentId"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder={enterStudentIdPlaceholder}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="password" className="block text-sm font-medium">
          {passwordLabel}
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder={enterPasswordPlaceholder}
        />
      </div>
      <div className="mt-4">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LoginBox;
