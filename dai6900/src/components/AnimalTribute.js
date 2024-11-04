import React from 'react';
import './AnimalTribute.css'; // Import your CSS file

const AnimalTribute = () => {
 const animals = [
    { name: 'Grumpy Cat', image: require('../assets/animals/GrumpyCat.png'), date: '2012 - 2019' },
    { name: 'Keyboard Cat', image: require('../assets/animals/KeyboardCat.png'), date: '1984 - 1987' },
    { name: 'Gabe the Dog', image: require('../assets/animals/Gabe.png'), date: '2011 - 2017' },
    { name: 'Cheems', image: require('../assets/animals/Cheems.png'), date: '2011 - 2023' },
    { name: 'Staring Hamster', image: require('../assets/animals/StaringHamster.png'), date: '2019 - 2021' },
    { name: 'Harambe', image: require('../assets/animals/Harambe.png'), date: '1999 - 2016' },
    { name: 'Doge', image: require('../assets/animals/Doge.png'), date: '2005 - 2024' },
    { name: 'Peanut the Squirrel', image: require('../assets/animals/Peanut.png'), date: '2017 - 2024' },
    { name: 'Fred the Raccoon', image: require('../assets/animals/fred.png'), date: 'dob unknown - 2024' },
];


    // Array of frame classes
    const frameClasses = ['pulse-green', 'pulse-red', 'pulse-blue'];

    return (
        <div className="animal-container">
            <h2>Tribute to our fallen soldiers:</h2>
            {animals.map((animal, index) => {
                // Randomly select a frame class
                const randomFrameClass = frameClasses[Math.floor(Math.random() * frameClasses.length)];
                return (
                    <div key={index} className={`animal-entry frame ${randomFrameClass}`}>
                        <img src={animal.image} alt={animal.name} className="animal-image" />
                        <span className="animal-date">{animal.name}, {animal.date} 🐱💔</span>
                    </div>
                );
            })}
        </div>
    );
};

export default AnimalTribute;
