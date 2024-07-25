// src/Router.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import TeacherLogin from "./pages/TeacherLogin";
import CoeLogin from "./pages/CoeLogin";
import QuestionFinderStudents from "./pages/QuestionFinderStudents";

import AddQuestions from "./pages/AddQuestions";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/coe-login" element={<CoeLogin />} />
        <Route
          path="/question-finder-students"
          element={<QuestionFinderStudents />}
        />
        <Route path="/add-questions" element={<AddQuestions />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
