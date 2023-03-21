const targetString = "To be or not to be, that is the question."
const characters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./;-=' ";
const casesPerGen = 100;
const casesInGen = Math.round(casesPerGen / 4) * 4
//Note: casesPerGen may be inaccurate because it will default to the nearest multiple of 4

const fitnessCalc = (string) => {
    let fitness = 0;
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
        } else if (cases[i].fitness > pivot.fitness) {
            left.push(cases[i]);
        } else {
            right.push(cases[i]);
        };
    };
    return sort(left).concat([pivot], sort(right));
};


const randomStringGenerator = (stringLength) => {
    const letters = [];
    for (let i = 0; i < stringLength; i++) {
        letters.push(characters[Math.floor(Math.random() * stringLength)]);
    };
    return letters.join('');
};

const zeroGeneration = (stringLength) => {
    const cases = Array(casesInGen).fill().map(() => randomStringGenerator(stringLength));
    const zeroGen = cases.map(i => fitnessCalc(i));
    return sort(zeroGen);
};

//placeholder
const inheritance = (parent1, parent2) => {
    const offspring = [parent1, parent2];
    const letters1 = parent1.string.split('');
    const letters2 = parent2.string.split('');
    for (let i = 0; i < letters1.length; i++) {
        const word1 = [];
        const word2 = [];
        if (Math.random() < 0.5) {
            word1.push(letters1[i]);
            word2.push(letters2[i]);
        } else {
            word1.push(letters2[i]);
            word2.push(letters1[i]);
        };

        offspring.push(word1.join(''), word2.join(''));
    };
    return offspring;
};

//previousGen is an sorted array of objects
const nextGeneration = (previousGen) => {
    const cutOff = (casesInGen / 4);
    const parents = previousGen.slice(0, cutOff);
    const pairedParents = [];
    const nextGen = [];
    while(parents.length > pairedParents.length) {
        //I'll figure this later, I'm trying to randomly pair parents up then run inheritance on them
    }
    return sort(nextGen);
};

//TEST CODE DO NOT TOUCH
let currGen = zeroGeneration(41);
console.log(currGen);