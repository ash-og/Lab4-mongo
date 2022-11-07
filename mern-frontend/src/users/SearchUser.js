import React, {Fragment, useState} from 'react';
import EditUser from './EditUser';
import ListUser from './ListUser';

const SearchUser = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [editUserId, setEditUserId] = useState(1);

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

    const handleEdit = (event, user) => {
        event.preventDefault();
        setEditUserId(user.id);
    }

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
                                    { editUserId === user.id ? (
                                        <EditUser user={user}/> 
                                    ) : (
                                        <ListUser user={user} handleEdit={handleEdit}/>
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
