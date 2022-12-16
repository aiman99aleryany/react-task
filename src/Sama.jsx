import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

// CRUD APP here
const Sama = () => {
    const [users, setUsers] = useState([]);
    const [isFetchUsers, setIsFetchUsers] = useState(false);

    const toggleEdit = (id) =>
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, isEdited: !user.isEdited } : user
            )
        );

    const handleUserAddition = (e) => {
        e.preventDefault();

        const { user } = e.currentTarget.elements;

        const newUser = { id: nanoid(), name: user.value, isEdited: false };

        setUsers([...users, newUser]);

        e.currentTarget.reset();
    };

    const handleUserEdit = (id, e) => {
        e.preventDefault();

        const { editedUser } = e.currentTarget.elements;

        setUsers(
            users.map((user) =>
                user.id === id
                    ? { ...user, name: editedUser.value, isEdited: false }
                    : user
            )
        );

        e.currentTarget.reset();
    };

    const handleUserDeletion = (id) =>
        setUsers(users.filter((user) => user.id !== id));

    return (
        <div>
            <form onSubmit={handleUserAddition}>
                <input type="text" name="user" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {users.map(({ id, name, isEdited }) =>
                    isEdited ? (
                        <form key={id} onSubmit={(e) => handleUserEdit(id, e)}>
                            <input
                                type="text"
                                name="editedUser"
                                defaultValue={name}
                            />
                            <button type="submit">Save</button>
                        </form>
                    ) : (
                        <li key={id}>
                            {name}
                            <button onClick={() => toggleEdit(id)}>Edit</button>
                            <button onClick={() => handleUserDeletion(id)}>
                                Delete
                            </button>
                        </li>
                    )
                )}
            </ul>
            <button onClick={() => setIsFetchUsers(true)}>Fetch Data</button>
            <div>
                {isFetchUsers &&
                    users.map(({ id, name }) => (
                        <Link key={id} to={`/samausers/${name}`}>
                            {name}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Sama;
