import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const INIT_VALUE = {
    id: nanoid(),
    type: null,
    journeysNo: 0,
    isHere: false,
};

const App = () => {
    const [input, setInput] = useState('');
    const [animal, setAnimal] = useState(INIT_VALUE);

    const { type, journeysNo, isHere } = animal;

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const addType = () => {
        if (input === '') return;
        setAnimal((oldSpecs) => ({ ...oldSpecs, type: input ? input : type }));
        setInput('');
    };

    const toggleStatus = () => {
        setAnimal((oldSpecs) => ({
            ...oldSpecs,
            isHere: !isHere,
            journeysNo: isHere ? journeysNo + 1 : journeysNo,
        }));
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={addType}>Add Type</button>
            <button onClick={toggleStatus}>
                {isHere ? 'Come back from journey' : 'Go on a journey'}
            </button>
            <h1>info About the animal</h1>
            <ul>
                <li>Animal type: {type}</li>
                <li>Number of journeys: {journeysNo}</li>
                <li>Status: {!isHere ? 'Animal is Here' : 'Animal is not here'}</li>
            </ul>
        </div>
    );
};

export default App;
