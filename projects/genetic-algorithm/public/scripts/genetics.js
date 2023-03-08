const targetString = "To be or not to be, that is the question."

const fitness = (string) => {
    const fitness = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === targetString[i]) {
            fitness++
        };
    };
    return { string, fitness }
};

const randomCharacterGenerator = () => {
    const randomNumber = Math.random();
    const characters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./;-=' ";
    const interval = 1 / characters.length;
    for (let i = 1; i <= characters.length; i++) {
        if (randomNumber < i * interval) {
            return characters[i];
        };
    };
};

const firstGenerationGeneration = (string, numOfCases) => {
    const firstGeneration = [];
    const cases = [];
    for (let i = 0; i < numOfCases; i++) {
        const letters = [];
        for (let j = 0; j < string.length; j++) {
            letters.push(randomCharacterGenerator);
        };
        cases.push(letters.reduce((str, s) => str.concat(s), ''));
    };
    for (i = 0; i < cases.length; i++) {
        firstGeneration.push(fitness(cases[i]));
    };
    return firstGeneration;
};

//previousGen is an array
const nextGenerationGeneration = (previousGen)