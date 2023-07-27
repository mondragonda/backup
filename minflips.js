// Min flips to create substrings of non alternate elements 
// binary passwords
const minFlips = (pwd) => {
    const initialChar = pwd[0];
    let currentFlips = 0;
    let currentStringIndex = 0;
    for (const char of pwd) {
        if (char !== initialChar){
            currentFlips += 1;
            const stringRemainingSlice = pwd.slice(currentStringIndex + 1);
            const currentSubstringEvenLength = (currentStringIndex + 1) % 2 === 0;
            const allRemainingSubstringElementsSum = stringRemainingSlice.split('').map((number) => Number(number)).reduce((prev, current) => prev + current, 0);
            const allRemainingSubstringNonAlternateElements = allRemainingSubstringElementsSum === 0 || allRemainingSubstringElementsSum === stringRemainingSlice.length;
            if (currentSubstringEvenLength && allRemainingSubstringNonAlternateElements) {
                return currentFlips;
            }
        }
        currentStringIndex += 1;
    }
    return NaN;
} 

const result = minFlips("111011000");
console.log("min flips for non alternate elements substrings: ", result);
