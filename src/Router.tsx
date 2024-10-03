// src/Router.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import TeacherLogin from "./pages/TeacherLogin";
import CoeLogin from "./pages/CoeLogin";
import QuestionFinderStudents from "./pages/QuestionFinderStudents";

import AddQuestions from "./pages/AddQuestions";
import CoeDashboard from "./pages/CoeDashboard";
import EditStudentDetails from "./pages/EditStudentDetails";
import EditTeacherDetails from "./pages/EditTeacherDetails";
import EditSyllabus from "./pages/EditSyllabus";
import AddSubject from "./shared/AddSubject";
import AddModule from "./shared/AddModule";
import AddQuestion from "./shared/AddQuestion";

const AppRouter: React.FC = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [isTeacher, setIsTeacher] = useState(true);
  const [isCoe, setIsCoe] = useState(true);

  const setAuth = (boolean: boolean) => {
    setIsAuthenticated(boolean);
  } 
  const setStudentAuth = (boolean: boolean) => {
    setIsStudent(boolean);
  } 
  const setTeacherAuth = (boolean: boolean) => {
    setIsTeacher(boolean);
  } 
  const setCoeAuth = (boolean: boolean) => {
    setIsTeacher(boolean);
  } 

  async function isAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      
      parseRes === true ? setIsAuthenticated(true):setIsAuthenticated(false);
      

    } catch (err) {
      console.error(err);      
    }
  }

  async function isStudentAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/isstudent", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      
      parseRes === true ? setIsStudent(true):setIsStudent(false);
      

    } catch (err) {
      console.error(err);      
    }
  }

  
  async function isTeacherAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/isteacher", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();

      
      parseRes === true ? setIsTeacher(true):setIsTeacher(false);
      

    } catch (err) {
      console.error(err);      
    }
  }

  async function isCoeAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/iscoe", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      
      parseRes === true ? setIsCoe(true):setIsCoe(false);
      

    } catch (err) {
      console.error(err);      
    }
  }




  useEffect(() => {
    
    isTeacherAuth();
    isStudentAuth();
    isCoeAuth();
  },[]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        
        {/* Public Routes */}
        <Route path="/student-login" element={!isStudent ? <StudentLogin setStudentAuth={setStudentAuth} /> : <Navigate to="/question-finder-students" replace />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/teacher-login" element={!isTeacher ? <TeacherLogin setTeacherAuth={setTeacherAuth} /> : <Navigate to="/add-subject" replace />} />
        <Route path="/coe-login" element={!isCoe ? <CoeLogin setCoeAuth={setCoeAuth} /> : <Navigate to="/coe-dashboard" replace />} />

        {/* Protected Routes */}
        <Route path="/question-finder-students" element={isStudent ? <QuestionFinderStudents /> : <Navigate to="/student-login" replace />} />
        <Route path="/add-questions" element={isTeacher ? <AddQuestions /> : <Navigate to="/teacher-login" replace />} />
        <Route path="/coe-dashboard" element={isCoe ? <CoeDashboard /> : <Navigate to="/coe-login" replace />} />


        <Route path="/edit-student-details" element={isCoe ? <EditStudentDetails /> : <Navigate to="/coe-login" replace />} />
        <Route path="/edit-teacher-details" element={isCoe ? <EditTeacherDetails /> : <Navigate to="/coe-login" replace />} />
        <Route path="/edit-syllabus" element={isCoe ? <EditSyllabus /> : <Navigate to="/coe-login" replace />} />

        <Route path="/add-subject" element={<AddSubject setAuth={setIsAuthenticated} />} />
        <Route path="/add-module/:subid" element={<AddModule setAuth={setIsAuthenticated}/> } />
        <Route path="/add-question/:subid/:moduleid" element={<AddQuestion setAuth={setIsAuthenticated}/> } />


        
      

        


        {/* <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/coe-login" element={<CoeLogin />} />
        <Route
          path="/question-finder-students"
          element={<QuestionFinderStudents />}
        />
        <Route path="/add-questions" element={<AddQuestions />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
