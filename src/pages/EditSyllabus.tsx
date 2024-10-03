import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import BigButton from "@/shared/BigButton";
import HText from "@/shared/HText";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type Props = {};

const EditSyllabus = (props: Props) => {
  const navigate = useNavigate();

  const handleAdd = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add Module",
      html: `
        <input id="course" class="swal2-input" placeholder="Enter course">
        <input id="department" class="swal2-input" placeholder="Enter department">
        <input id="semester" class="swal2-input" placeholder="Enter semester">
        <input id="courseName" class="swal2-input" placeholder="Enter course name">
        <input id="moduleName" class="swal2-input" placeholder="Enter module name">
        <input id="courseOutcome" class="swal2-input" placeholder="Enter course outcome">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const course = (document.getElementById("course") as HTMLInputElement)
          .value;
        const department = (
          document.getElementById("department") as HTMLInputElement
        ).value;
        const semester = (
          document.getElementById("semester") as HTMLInputElement
        ).value;
        const courseName = (
          document.getElementById("courseName") as HTMLInputElement
        ).value;
        const moduleName = (
          document.getElementById("moduleName") as HTMLInputElement
        ).value;
        const courseOutcome = (
          document.getElementById("courseOutcome") as HTMLInputElement
        ).value;

        if (!course || !department || !semester || !courseName || !moduleName || !courseOutcome) {
          Swal.showValidationMessage("Please enter all fields!");
        }

        return { course, department, semester, courseName, moduleName, courseOutcome };
      },
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });

    if (formValues) {
      Swal.fire({
        title: "Added Module!",
        html: `Module Name: ${formValues.moduleName}<br>CourseName: ${formValues.courseName}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = async () => {
    const { value: firstInput } = await Swal.fire({
      title: "Edit Module Details",
      html: `
        <input id="firstInput" class="swal2-input" placeholder="Teacher ID">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const input = (
          document.getElementById("firstInput") as HTMLInputElement
        ).value;
        if (!input) {
          Swal.showValidationMessage("Please enter the Teacher ID!");
          return false; // Returning false will prevent the next step
        }
        return input;
      },
      confirmButtonText: "Next",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });

    // Exit if the first input was canceled or invalid
    if (!firstInput) return;

    // Step 2: Second prompt
    const { value: secondInput } = await Swal.fire({
      title: "Edit Teacher Details",
      html: `
        <input id="secondInput" class="swal2-input" placeholder="Enter new password">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const input = (
          document.getElementById("secondInput") as HTMLInputElement
        ).value;
        if (!input) {
          Swal.showValidationMessage("Please enter the new password!");
          return false; // Returning false will prevent final submission
        }
        return input;
      },
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });

    // Exit if the second input was canceled or invalid
    if (!secondInput) return;

    // Step 3: Show final confirmation
    Swal.fire({
      title: "Teacher Details Edited",
      html: `Teacher ID: ${firstInput}<br>Password: ${secondInput}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleDelete = async () => {

  };
  return (
    <div>
      <div>
        <Navbar searchButtonNeeded={true} backToHome={true} />
        <div className="mt-36 ml-10">
          <HText>GCECT Question Bank</HText>
          <div className="py-2"></div>
          <HText>Welcome, Partha Haldar</HText>
        </div>
        <div className="py-28 flex items-center justify-around mx-5">
          <BigButton
            text="Add Syllabus"
            imgPath="../src/assets/add.png"
            onClick={handleAdd}
          />
          <BigButton
            text="Edit Syllabus"
            imgPath="../src/assets/edit.png"
            onClick={handleEdit}
          />
          <BigButton
            text="Delete Syllabus"
            imgPath="../src/assets/delete.png"
            onClick={handleDelete}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default EditSyllabus;
