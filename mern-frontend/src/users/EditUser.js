import React, {useState} from 'react';

// Returns editable inputs for the selected user 

const EditUser = ({user, updateUserData}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [statusMessage, setStatusMessage] = useState('');

    const handleNameFieldChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleAgeFieldChange = (event) => {
        event.preventDefault();
        setAge(event.target.value);
    }

    const handleUpdateUser = async (event) => {
        event.preventDefault();
        setStatusMessage('');

        const updatedUser = {
            'name': name,
            'age': age
        };


        try {
            fetch("http://localhost:3100//updateuser/:id", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(updatedUser)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setStatusMessage('User ' + user.name + ' updated');
                });
        } catch (err) {
            // Remediation logic
            setStatusMessage('There was an error creating the user');
        }
    }

    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                    placeholder=""
                    value={updateUserData.name}
                    onChange={(e) => handleNameFieldChange(e)}
                />
            </td>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-xl border-gray-300 shadow-sm"
                    placeholder=""
                    value={updateUserData.age}
                    onChange={(e) => handleAgeFieldChange(e)}
                />
            </td>
            <td>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdateUser}>
                    Save User
                </button>
                <p className="text-red-900">
                    { statusMessage }
                </p>
            </td>
        </tr>

    );
};

export default EditUser