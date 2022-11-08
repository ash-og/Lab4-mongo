import React, {Fragment, useState} from 'react';
import EditUser from './EditUser';
import ListUser from './ListUser';

const SearchUser = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [editUserId, setEditUserId] = useState(null);
    

    async function handleSearchUser(event) {
        event.preventDefault();
        setErrorMessage('');

        try {
            fetch('http://localhost:3100/users')
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data);
                });
        } catch (err) {
            // Remediation logic
            setErrorMessage('There was an error searching for the user');
        }
    }

    // Function to handle my edit event. Sets EditUserId to the user from the edit click

    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditUserId(user._id);
    };

    // // FIX THIS !!!!!!!!!

    // const handleEditUser = async (event) => {
    //     event.preventDefault();
    //     setStatusMessage('');

    //     let user = {
    //         'name': name,
    //         'age': age
    //     };

    //     try {
    //         fetch("http://localhost:3100//edit/:id", {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': "application/json"
    //             },
    //             body: JSON.stringify(user)
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setStatusMessage('User ' + user.name + ' edited');
    //             });
    //     } catch (err) {
    //         // Remediation logic
    //         setStatusMessage('There was an error creating the user');
    //     }
    // }

    return(
        <div className="flex items-center justify-center ">
            <div className="grid grid-flow-row auto-rows-max">
                <div className="flex border-2 border-gray-200 rounded">
                    <input type="text" className="px-4 py-2 w-80" placeholder="Search...">
                    </input>
                    <button className="px-4 text-white bg-gray-600" onClick={handleSearchUser}>
                        Search
                    </button>

                </div>
                <div>
                    <form>
                        <table className="table-auto">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchResults.map((user) => (
                                <Fragment>
                                    { editUserId === user._id ? (
                                        <EditUser key={user._id} user={user} /> 
                                    ) : (
                                        <ListUser key={user._id} user={user} handleEditClick={handleEditClick}/>
                                    )}                                       
                                </Fragment>
                            ))}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
