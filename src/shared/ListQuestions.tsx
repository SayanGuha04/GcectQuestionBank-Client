import React, { Fragment, useEffect, useState, FC } from "react";
import EditQuestion from "./EditQuestion";

// Define the Question interface as discussed above
// Define the Question interface with string types for IDs
interface Question {
    qid: string;
    quid: string;
    question: string;
    subid: string;
    moduleid: string;
}

const ListQuestions: FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const deleteQuestion = async (id: string) => {
        try {
            await fetch(`http://localhost:5000/questions/${id}`, {
                method: "DELETE",
            });

            setQuestions(questions.filter((question) => question.quid !== id));
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("An unknown error occurred", err);
            }
        }
    };

    const getQuestions = async () => {
        try {
            const response = await fetch("http://localhost:5000/questions");
            const jsonData: Question[] = await response.json();

            setQuestions(jsonData);
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("An unknown error occurred", err);
            }
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 table-striped">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question) => (
                        <tr key={question.quid}>
                            <td>{question.question}</td>
                            <td>
                                <EditQuestion question={question} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteQuestion(question.quid)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListQuestions;
