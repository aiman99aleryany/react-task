import React, { useState } from 'react';
import { nanoid } from 'nanoid';
const animal_init = {
    id: nanoid(),
    type: null, // display this
    journeysNo: 0, // display this
    isHere: false, // display this
};

//<form> with one input field (Animal's type) and one button (save Animal type)
//<button> that says either Go on a Journey or Return from the Journey (depends on
//isHere)
//
//
const App = () => {
    const [input, setInput] = useState('');
    const [animal, setAnimal] = useState(animal_init);

    const toGoOnJourney = 'Go on a Journey';

    const toGoBackJourney = 'Return from the Journey';

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const saveAnimalType = () => {
        setAnimal((oldSpecs) => ({ ...oldSpecs, type: input }));
        setInput('');
    };

    const toggleisHere = () => {
        if (animal.isHere) {
            setAnimal((oldSpecs) => ({
                ...oldSpecs,
                isHere: !animal.isHere,
                journeysNo: animal.journeysNo + 1,
            }));
        } else {
            setAnimal((oldSpecs) => ({ ...oldSpecs, isHere: !animal.isHere }));
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={saveAnimalType}>save Animal Type</button>
            <button onClick={toggleisHere}>
                {animal.isHere ? toGoOnJourney : toGoBackJourney}
            </button>
            {animal.journeysNo}
            {animal.type}
            {!animal.isHere && 'Animal is Here'}
        </div>
    );
};

export default App;
