import React from "react";

// Returns editable inputs for the selected user 

const EditUser = ({ handleUpdateUser, newUserData }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                    placeholder=""
                    value={newUserData.name}
                    onChange={handleUpdateUser}
                />
            </td>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-xl border-gray-300 shadow-sm"
                    placeholder=""
                    value={newUserData.age}
                    onChange={handleUpdateUser}
                />
            </td>
            <td><button type="submit">Save</button></td>
        </tr>
    );
};

export default EditUser;