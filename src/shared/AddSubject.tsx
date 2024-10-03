import { Fragment } from "react";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Subject {
  subid: number;
  subject: string;
}

interface FormData {
  name: string;
  degree: string;
  semester: string;
  cs: boolean;
  it: boolean;
  ct: boolean;
}

interface AddSubjectProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSubject: React.FC<AddSubjectProps> = ({ setAuth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    degree: "",
    semester: "",
    cs: false,
    it: false,
    ct: false,
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddSubject = async () => {
    const body = {
      subject: formData.name,
      degree: formData.degree,
      isCS: formData.cs,
      isIT: formData.it,
      isCT: formData.ct,
      sem: formData.semester,
    };

    const response = await fetch("http://localhost:5000/addSubject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    handleCloseModal();
  };

  const getSubjects = async () => {
    try {
        const response = await fetch("http://localhost:5000/getAllSubjects");
        const jsonData: Subject[] = await response.json();
        setSubjects(jsonData);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error("An unexpected error occurred", err);
        }
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (subid: number) => {
    navigate(`/add-module/${subid}`);
  };

  return (
    <Fragment>
      <div className="container mx-auto mt-8 p-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleOpenModal}
        >
          Add Subject
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-lg font-bold">Add New Subject</h5>
                <button className="text-gray-500 hover:text-red-500" onClick={handleCloseModal}>
                  &times;
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-semibold">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border p-2 rounded"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="degree" className="text-sm font-semibold">Degree:</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    className="border p-2 rounded"
                    value={formData.degree}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="semester" className="text-sm font-semibold">Semester:</label>
                  <input
                    type="text"
                    id="semester"
                    name="semester"
                    className="border p-2 rounded"
                    value={formData.semester}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="cs"
                    name="cs"
                    className="h-4 w-4"
                    checked={formData.cs}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="cs" className="text-sm font-semibold">CS</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="it"
                    name="it"
                    className="h-4 w-4"
                    checked={formData.it}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="it" className="text-sm font-semibold">IT</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="ct"
                    name="ct"
                    className="h-4 w-4"
                    checked={formData.ct}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="ct" className="text-sm font-semibold">CT</label>
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={handleAddSubject}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <button
              key={subject.subid}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
              onClick={() => handleButtonClick(subject.subid)}
            >
              {subject.subject}
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AddSubject;
