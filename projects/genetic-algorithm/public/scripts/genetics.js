const list = document.getElementById("0")

const targetString = "To be or not to be, that is the question."
const characters = " ,./;-!='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const casesPerGen = 750;
const generations = 75;
const casesInGen = Math.round(casesPerGen / 4) * 4
const printedArray = [];
//Note: casesPerGen may be inaccurate because it will default to the nearest multiple of 4

const fitnessCalc = (string) => {
    let fitness = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === targetString[i]) {
            fitness++;
        };
    };
    return { string, fitness: fitness / targetString.length }
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
        letters.push(characters[Math.floor(Math.random() * characters.length)]);
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
    const word1 = [];
    const word2 = [];
    for (let i = 0; i < letters1.length; i++) {
        if (Math.random() < 0.5) {
            word1.push(letters1[i]);
            word2.push(letters2[i]);
        } else {
            word1.push(letters2[i]);
            word2.push(letters1[i]);
        };
    };
    offspring.push(fitnessCalc(word1.join('')), fitnessCalc(word2.join('')));
    return offspring;
};

//previousGen is an sorted array of objects
const nextGeneration = (previousGen) => {
    const cutOff = (casesInGen / 2);
    const parents = previousGen.slice(0, cutOff);
    const pairedParents = [];
    const nextGen = [];
    for(let i = 0; i < parents.length / 2; i++) {
        pairedParents.push([parents[i], parents[parents.length - 1 - i]])
    };
    for (let i = 0; i < pairedParents.length; i++) {
        const offspring = inheritance(pairedParents[i][0], pairedParents[i][1]);
        nextGen.push(offspring[0], offspring[1], offspring[2], offspring[3]);
    };
    return sort(nextGen);
};
const createLi = (text) => {
    const li = document.createElement("li");
    li.append(text);
    return li;
}

//TEST CODE DO NOT TOUCH
let currGen = zeroGeneration(targetString.length);
while(currGen[0].fitness < 1) {
    currGen = nextGeneration(currGen);
    list.append(createLi(JSON.stringify(currGen[0])))
};

