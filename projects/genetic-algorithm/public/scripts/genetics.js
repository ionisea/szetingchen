const list = document.getElementById("0")
const input = document.getElementById('targetInput')
const run = document.getElementById('run')

//Parameters
let targetString = "To be or not to be, that is the question."
const characters = " ,./;-!='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const casesPerGen = 750;
const generations = 75;
//const wordMutationRate = 0.1;
//const letterMutationRate = 0.1;

// Note: casesPerGen may be inaccurate because it will default to the nearest multiple of 4
// Code is Below
const casesInGen = Math.round(casesPerGen / 4) * 4;
const printedArray = [];

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

// ty Ion for improving this one 
const inheritance = (parent1, parent2) => {
    const offspring = [parent1, parent2];
    let word1 = '';
    let word2 = '';
    for (let i = 0; i < parent1.string.length; i++) {
        if (Math.random() < 0.5) {
            word1 += (parent1.string[i]);
            word2 += (parent2.string[i]);
        } else {
            word1 += (parent2.string[i]);
            word2 += (parent1.string[i]);
        };
    };
    offspring.push(fitnessCalc(word1), fitnessCalc(word2));
    return offspring;
};

const mutate = (cases) => {
    const original = cases;
    const casesToMutate = [];
    for (let i = 0; i < original.length * wordMutationRate; i++) {
        const index = Math.floor(Math.random() * original.length)
        casesToMutate.push(original[index]);
        original = original.splice(index, 1);
    };
    for (let i = 0; i < casesToMutate.length; i++) {
        for (let j = 0; j < targetString.length * letterMutationRate; j++) {
            casesToMutate[i]
        }
    }
};

//previousGen is an sorted array of objects
const nextGeneration = (previousGen) => {
    const cutOff = (casesInGen / 2);
    const parents = previousGen.slice(0, cutOff);
    const pairedParents = [];
    const nextGen = [];
    for (let i = 0; i < parents.length / 2; i++) {
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

run.onclick = () => {
    list.textContent = '';
    targetString = input.value;
    let currGen = zeroGeneration(targetString.length);
    while (currGen[0].fitness < 1) {
        currGen = nextGeneration(currGen);
        list.append(createLi(JSON.stringify(currGen[0])));
    };
}

/*
//TEST CODE DO NOT TOUCH
let currGen = zeroGeneration(targetString.length);
while(currGen[0].fitness < 1) {
    currGen = nextGeneration(currGen);
    list.append(createLi(JSON.stringify(currGen[0])))
};
*/
