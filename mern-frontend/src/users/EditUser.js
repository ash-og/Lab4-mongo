import React from "react";

const EditUser = ({user}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                    placeholder=""
                    value={user.name}
                />
            </td>
            <td>
                <input
                    type="text"
                    className="mt-1 w-full rounded-xl border-gray-300 shadow-sm"
                    placeholder=""
                    value={user.age}
                />
            </td>
        </tr>
    );
};

export default EditUser