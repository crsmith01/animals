import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        // want to add a random animal to the array
        setAnimals([...animals, getRandomAnimal()])
        // not using push method because we don't want to modify the existing array - we don't want to modify the state directly!!!
        // ...animals is a spread operator - takes all the elements in the array and spreads them out. Then we add on the new random animal
        // animals.push(getRandomAnimal());
    }

    // i.e. 'cat' is the first argument (animal is literally a string of 'cat')
    // whatever we return from this function 
    // index and key is React-specific
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

// // count is just to explain state
// function App() {
//     // Array desctructuring - fancy way to get access to the piece of state and the setter function
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             {/* <button onClick={() => console.log('button was clicked')}>Add Animal</button>  */}
//             <button onClick={handleClick}>Add Animal</button>
//             {/* When user does something, update the piece of state. causes React to rerender the component (so entire App function is called again)*/}
//             <div>Number of animals: {count}</div>
//         </div>
//     );
// }

export default App;