const targetString = "To be or not to be, that is the question."
const characters = "abcdefghijlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,./;-=' ";
const casesPerGen = 100;
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
        zeroGen.push(fitnessCalc(cases[i]));
    };
    return sort(zeroGen);
};

//previousGen is an sorted array of objects
const nextGeneration = (previousGen) => {
    const casesInGen = Math.round(casesPerGen / 4) * 4
    const cutOff = (casesInGen / 4) - 1;
    const halfWord = targetString.length / 2
    const parents = previousGen.map(i => i.string).slice(0, cutOff);
    const pairedParents = [];
    const nextGen = [];
    for (let i = 0; i < parents.length - 1; i += 2) {
        pairedParents.push({
            parent1part1: parents[i].substring(0, halfWord), 
            parent1part2: parents[i].substring(halfWord),
            parent2part1: parents[i + 1].substring(0, halfWord),
            parent2part2: parents[i + 1].substring(halfWord),
        });
    };
    for (let i = 0; i < pairedParents.length; i++) {
        nextGen.push(
            fitnessCalc(pairedParents[i].parent1part1.concat(pairedParents[i].parent1part2)),
            fitnessCalc(pairedParents[i].parent1part1.concat(pairedParents[i].parent2part2)),
            fitnessCalc(pairedParents[i].parent2part1.concat(pairedParents[i].parent1part2)),
            fitnessCalc(pairedParents[i].parent2part1.concat(pairedParents[i].parent2part2)),
        );
    };
    return sort(nextGen);
};