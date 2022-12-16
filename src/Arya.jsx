import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
//CRUD is here
const Arya = () => {
    const [users, setUsers] = useState([]);
    const [usernameInput, setUsernameInput] = useState('');
    const [editedUsernameInput, setEditedUsernameInput] = useState('');
    const [isShowing, setIsShowing] = useState(false);

    const addUser = () => {
        setUsers((users) => [
            ...users,
            { id: nanoid(), name: usernameInput, isEdited: false },
        ]);
        setUsernameInput('');
    };

    const deleteUser = (id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    };

    const isEditedToggle = (id) => {
        setUsers((users) =>
            users.map((user) =>
                user.id === id ? { ...user, isEdited: !user.isEdited } : user
            )
        );
    };

    const editUser = (id) => {
        setUsers((users) =>
            users.map((user) =>
                user.id === id
                    ? { ...user, name: editedUsernameInput, isEdited: false }
                    : user
            )
        );
    };

    return (
        <div>
            <h1>This is Arya</h1>
            <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
            />
            <button onClick={addUser}>Add Github User</button>
            <div>
                {users.map((user) => {
                    return user.isEdited ? (
                        <div key={user.id}>
                            <input
                                type="text"
                                value={
                                    editedUsernameInput === ''
                                        ? user.name
                                        : editedUsernameInput
                                }
                                onChange={(e) =>
                                    setEditedUsernameInput(e.target.value)
                                }
                            />
                            <button onClick={() => isEditedToggle(user.id)}>
                                Unedit User
                            </button>
                            <button onClick={() => editUser(user.id)}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <div key={user.id}>
                            <h2>User's Name: {user.name} </h2>
                            <button onClick={() => isEditedToggle(user.id)}>
                                Edit User
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                Delete User
                            </button>
                        </div>
                    );
                })}
            </div>

            <button onClick={() => setIsShowing(!isShowing)}>
                {isShowing
                    ? 'Hide the List of Users'
                    : 'Show the List of Users'}
            </button>

            {isShowing &&
                users.map((user) => {
                    return (
                        <Link key={user.id} to={`/aryausers/${user.name}`}>
                            <h2>Show {user.name}'s details</h2>
                        </Link>
                    );
                })}
        </div>
    );
};

export default Arya;
