import React, { useState } from 'react';

interface EditQuestionProps {
    question: {
        qid: string;
        quid: string; // Using string instead of number
        subid: string;
        moduleid: string;
        question: string;
    };
}


const EditQuestion: React.FC<EditQuestionProps> = ({ question }) => {
    const [editedQuestion, setEditedQuestion] = useState(question.question);

    const updateQuestion = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const body = { question: editedQuestion };
            await fetch(`http://localhost:5000/questions/${question.quid}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            window.location.reload(); // Reload to reflect the changes
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error('An unknown error occurred', err);
            }
        }
    };

    return (
        <React.Fragment>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${question.quid}`}>
                Edit
            </button>

            <div className="modal" id={`id${question.quid}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Question</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" value={editedQuestion} onChange={(e) => setEditedQuestion(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" onClick={updateQuestion}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditQuestion;
