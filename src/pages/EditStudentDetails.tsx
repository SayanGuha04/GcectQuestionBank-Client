import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar";
import BigButton from "@/shared/BigButton";
import HText from "@/shared/HText";
import { useState } from "react";
import Swal from "sweetalert2";


const EditStudentDetails = () => {

  const [ uploadSuccessful, setUploadSuccessful ] = useState(false);

  const handleAdd = async () => {
    
    const { value: formValues } = await Swal.fire({
      title: "Add Student Details",
      html: `
      <input id="studentID" class="swal2-input" placeholder="Student ID">
      <input id="password" type="password" class="swal2-input" placeholder="Set password">
    `,
      focusConfirm: false,
      preConfirm: () => {
        const studentID = (
          document.getElementById("studentID") as HTMLInputElement
        ).value;
        const password = (
          document.getElementById("password") as HTMLInputElement
        ).value;

        if (!studentID || !password) {
          Swal.showValidationMessage("Please enter all fields!");
          return false; // Prevent form submission
        }

        return { studentID, password };
      },
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });

    if (!formValues) return;

    const jsonObject = {
      key1: formValues.studentID,
      key2: formValues.password,
    };

    try {

      const body = {
        name: formValues.studentID,
        password: formValues.password,
        type: "Student"
      };

      const response = await fetch(
          "http://localhost:5000/auth/register/student", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(body)
      });
      
      const parseRes = await response.json();

      if (parseRes.token) {
          setUploadSuccessful(true);
      } else {
          setUploadSuccessful(false);
      }
      

    } catch (err) {
      if (err instanceof Error) {
          console.error(err.message);
      } else {
          console.error("An unknown error occurred");
      }
    }

    if (uploadSuccessful) {
      Swal.fire({
        title: "Added Student!",
        html: `Student ID: ${jsonObject.key1}<br>Password: ${jsonObject.key2}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

  };

  const handleEdit = async () => {
    // Step 1: First prompt
    const { value: firstInput } = await Swal.fire({
      title: "Edit Student Details",
      html: `
        <input id="firstInput" class="swal2-input" placeholder="Student ID">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const input = (
          document.getElementById("firstInput") as HTMLInputElement
        ).value;
        if (!input) {
          Swal.showValidationMessage("Please enter the Student ID!");
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
      title: "Edit Student Details",
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

    try {

      const body = {
        name: firstInput,
        password: secondInput
      };

      const response = await fetch(
          "http://localhost:5000/auth/edit/student", {
          method: "PUT",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(body)
      });
      
      const parseRes = await response.json();      

    } catch (err) {
      if (err instanceof Error) {
          console.error(err.message);
      } else {
          console.error("An unknown error occurred");
      }
    }

    // Step 3: Show final confirmation
    Swal.fire({
      title: "Student Details Edited",
      html: `Student ID: ${firstInput}<br>Password: ${secondInput}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleDelete = async () => {
    // Step 1: Prompt for Student ID
    const { value: studentId } = await Swal.fire({
      title: "Delete Student",
      html: `
        <input id="studentIdInput" class="swal2-input" placeholder="Student ID">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const input = (
          document.getElementById("studentIdInput") as HTMLInputElement
        ).value;
        if (!input) {
          Swal.showValidationMessage("Please enter the Student ID!");
          return false; // Prevent proceeding if the input is invalid
        }
        return input;
      },
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    });

    // Exit if the user canceled or provided no input
    if (!studentId) return;

    // Step 2: Confirmation of deletion
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete the student with ID: ${studentId}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      // Step 3: Handle the deletion logic here

      try {

        const body = {
          name: studentId
        };
  
        const response = await fetch(
            "http://localhost:5000/auth/delete/student", {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        
        const parseRes = await response.json();      
  
      } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("An unknown error occurred");
        }
      }

      Swal.fire({
        title: "Deleted!",
        text: `Student with ID: ${studentId} has been deleted.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
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
            text="Add Student"
            imgPath="../src/assets/add.png"
            onClick={handleAdd}
          />
          <BigButton
            text="Edit Student"
            imgPath="../src/assets/edit.png"
            onClick={handleEdit}
          />
          <BigButton
            text="Delete Student"
            imgPath="../src/assets/delete.png"
            onClick={handleDelete}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default EditStudentDetails;
