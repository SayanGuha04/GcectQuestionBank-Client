import { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditQuestion from "./EditQuestion";
interface Question {
    qid: string;  // Now using string instead of number
    question: string;
    marks: string;
    quid: string; // Use string instead of number for consistency
    subid: string;
    moduleid: string;
}



interface FormData {
    name: string;
    marks: string;
}

interface AddQuestionProps {
    setAuth: (auth: boolean) => void;
}

const AddQuestion: React.FC<AddQuestionProps> = ({ setAuth }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [formData, setFormData] = useState<FormData>({ name: '', marks: '' });

    const { subid, moduleid } = useParams<{ subid: string; moduleid: string }>();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddQuestion = async () => {
        const body = {
            question: formData.name,
            marks: formData.marks,
            moduleid: moduleid,
            subid: subid
        };

        await fetch("http://localhost:5000/questions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        handleCloseModal();
        getQuestions(); // Refresh questions list
    };

    const getQuestions = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getQuestions/${moduleid}`);
            const jsonData = await response.json();
            // Ensure qid is a number
            const parsedData = jsonData.map((question: Question) => ({
                ...question,
                qid: Number(question.qid) // Parse qid as number
            }));
            setQuestions(parsedData);
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
    };
    

    const deleteQuestion = async (id: string) => {
        try {
            await fetch(`http://localhost:5000/questions/${id}`, {
                method: "DELETE"
            });

            setQuestions(questions.filter(question => question.quid !== id));
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <Fragment>
            <div className="container mt-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
                    onClick={handleOpenModal}
                >
                    Add Question
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-lg font-semibold">Add New Question</h5>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseModal}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Question:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                                    Marks:
                                </label>
                                <input
                                    type="text"
                                    id="marks"
                                    name="marks"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    value={formData.marks}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-400 text-white rounded"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={handleAddQuestion}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-3">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Question</th>
                                <th className="border px-4 py-2">Edit</th>
                                <th className="border px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map(question => (
                                <tr key={question.quid}>
                                    <td className="border px-4 py-2">{question.question}</td>
                                    <td className="border px-4 py-2">
                                        <EditQuestion question={question} />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                            onClick={() => deleteQuestion(question.quid)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default AddQuestion;
