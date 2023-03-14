const targetString = "To be or not to be, that is the question."
const characters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./;-=' ";
const casesPerGen = 100;
//Note: casesPerGen may be inaccurate because it will default to the nearest multiple of 4

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
const sort = (cases) => {
    if (cases.length <= 1) {
        return cases;
    };
    const pivotIndex = Math.floor(Math.random() * cases.length)
    const pivot = cases[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < cases.length; i++) {
        if (i === pivotIndex) {
            continue;
        } else if (cases[i].fitness > pivot) {
            left.push(cases[i]);
        } else {
            right.push(cases[i]);
        };
    };
    return sort(left).concat([pivot], sort(right));
};


const randomCharacterGenerator = (string) => {
    const index = Math.floor(Math.random() * string.length);
    return string[index];
};

const zeroGeneration = (stringLength) => {
    const casesInGen = Math.round(casesPerGen / 4) * 4
    const zeroGen = [];
    const cases = [];
    for (let i = 0; i < casesInGen; i++) {
        const letters = [];
        for (let j = 0; j < stringLength; j++) {
            letters.push(randomCharacterGenerator(characters));
        };
        cases.push(letters.join(''));
    };
    for (i = 0; i < cases.length; i++) {
        zeroGen.push(fitness(cases[i]));
    };
    return sort(zeroGen);
};

//previousGen is an sorted array of objects
const nextGeneration = (previousGen) => {
    const casesInGen = Math.round(casesPerGen / 4) * 4
    const cutOff = (casesInGen / 4) - 1;
    const parents = previousGen.map(i => i.string).slice(0, cutOff);
    const pairedParents = [];
    for (let i = 0; i < parents.length - 1; i += 2) {
        pairedParents.push({ parent1: parents[i], parent2: parents[i + 1] });
    };
    for (let i = 0; i < pairedParents.length; i++) {

    }
};