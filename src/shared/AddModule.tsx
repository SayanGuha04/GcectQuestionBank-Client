import { Fragment, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Module {
    moduleid: string;
    module: string;
}



interface FormData {
    name: string;
    degree: string;
    semester: string;
    cs: boolean;
    it: boolean;
    ct: boolean;
}

const AddModule = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modules, setModules] = useState<Module[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        degree: '',
        semester: '',
        cs: false,
        it: false,
        ct: false
    });

    const { subid } = useParams<{ subid: string }>();
    const navigate = useNavigate();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddModule = async () => {
        const body = {
            module: formData.name,
            subid: subid
        };

        await fetch("http://localhost:5000/addModule", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        handleCloseModal();
        getModules(); // Refresh module list after adding a new one
    };

    const getModules = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getModules/${subid}`);
            const jsonData = await response.json();
            setModules(jsonData);
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message); // TypeScript now knows that err is an Error
            } else {
                console.error("An unknown error occurred");
            }
        }
    };
    

    useEffect(() => {
        getModules();
    }, []);

    const handleButtonClick = (moduleid: string) => {
        navigate(`/add-question/${subid}/${moduleid}`);
    };

    return (
        <Fragment>
            <div className="container mx-auto mt-8 p-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={handleOpenModal}
                >
                    Add Module
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-lg font-semibold">Add New Module</h5>
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
                                    Name:
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
                                    onClick={handleAddModule}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mmt-8 grid grid-cols-2 gap-4">
                    {modules.map((module) => (
                        <button
                            key={module.moduleid}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                            onClick={() => handleButtonClick(module.moduleid)}
                        >
                            {module.module}
                        </button>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default AddModule;
