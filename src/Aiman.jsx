import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const Aiman = () => {
    const [input, setInput] = useState('');
    const [editedInput, setEditedInput] = useState('');
    const [users, setUsers] = useState([]);
    const [isShowing, setIsShowing] = useState(false);

    const handleInput = (e) => setInput(e.target.value);

    const handleEditedInput = (e) => setEditedInput(e.target.value);

    const clearEdited = () => setEditedInput('');

    const addUser = () => {
        setUsers((oldUsers) => {
            const newUser = {
                id: nanoid(),
                content: input,
                isEdited: false,
                timeStamp: Date.now(),
            };
            return [...oldUsers, newUser];
        });
        setInput('');
    };

    const toggleEdit = (userId) => {
        setUsers((oldUsers) =>
            oldUsers.map((oldUser) => {
                setEditedInput(oldUser.content);
                return oldUser.id === userId
                    ? { ...oldUser, isEdited: !oldUser.isEdited }
                    : oldUser;
            })
        );
    };

    const deleteUser = (userId) => {
        setUsers((oldUsers) =>
            oldUsers.filter((oldUser) => oldUser.id !== userId)
        );
    };

    const editUser = (userId) => {
        setUsers((oldUsers) =>
            oldUsers.map((oldUser) =>
                oldUser.id === userId
                    ? {
                          ...oldUser,
                          content: editedInput,
                          timeStamp: Date.now(),
                      }
                    : oldUser
            )
        );
    };

    const showLinks = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map(({ id, content, timeStamp, isEdited }) => {
                    return isEdited ? (
                        <li key={id}>
                            <h2>{content}</h2>
                            <div>
                                <input
                                    type="text"
                                    value={editedInput}
                                    onChange={handleEditedInput}
                                />
                                <button onClick={() => toggleEdit(id)}>
                                    UnEdit
                                </button>
                                <button onClick={() => editUser(id)}>
                                    Confirm
                                </button>
                                <button onClick={clearEdited}>Clear</button>
                            </div>
                        </li>
                    ) : (
                        <li key={id}>
                            <time>{String(new Date(timeStamp))}</time>
                            <div>
                                <span>{content}</span>
                                <div>
                                    <button onClick={() => toggleEdit(id)}>
                                        Edit
                                    </button>
                                    <button onClick={() => deleteUser(id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div>
                {users.length >= 1 ? (
                    <button onClick={showLinks}>
                        {isShowing ? 'Hide Links' : 'Show Links'}
                    </button>
                ) : null}
            </div>
            <div>
                {isShowing &&
                    users.map(({ id, content, timeStamp }) => (
                        <div key={id}>
                            <span>Link was created at:</span>
                            <time>{String(new Date(timeStamp))}</time>
                            <div>
                                <Link to={`/aimanusers/${content}`}>
                                    {' '}
                                    link {content}'s data{' '}
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Aiman;
