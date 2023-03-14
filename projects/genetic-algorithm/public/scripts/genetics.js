const targetString = "To be or not to be, that is the question."
const characters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./;-=' ";

const fitness = (string) => {
    const fitness = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === targetString[i]) {
            fitness++;
        };
    };
    return { string, fitness }
};

//cases being an array of strings with the string and fitness
/*
const quickSort = (cases) => {
    if (cases.length <= 1) {
        return cases;
    };
    const pivot = cases[Math.floor(Math.random() * cases.length)];
    const left = [];
    const right = [];
    for (let i = 0; i < cases.length; i++) {
        if (cases[i] > pivot) {
            left.push(cases[i]);
        } else if (cases[i] < pivot) {
            right.push(cases[i]);
        };
    };
    return quickSort(left).concat([pivot], quickSort(right));
};
*/


const randomCharacterGenerator = (string) => {
    const index = Math.floor(Math.random() * string.length);
    return string[index];
};

const zeroGeneration = (string, numOfCases) => {
    const zeroGen = [];
    const cases = [];
    for (let i = 0; i < numOfCases; i++) {
        const letters = [];
        for (let j = 0; j < string.length; j++) {
            letters.push(randomCharacterGenerator(characters));
        };
        cases.push(letters.join(''));
    };
    for (i = 0; i < cases.length; i++) {
        zeroGen.push(fitness(cases[i]));
    };
    return zeroGen;
};

//previousGen is an array
const nextGeneration = (previousGen) => {

}