// level {1/2/3}

// level2
// 1. Write a function to remove all even numbers from an Array.

function removeEven(numbers) {
    return numbers.filter(even => even % 2 !== 0);
}

const numbersBe = removeEven([1, 2, 4, 3, 11, 13, 5]);
console.log('All odd numbers are', numbersBe);

// 2. Replace all the vowels in a string with uppercase vowels.

const inputString = 'Elie';
const replaceVowels = (str = '') => {
    const matchingVowels = 'aeiou';
    const resultString = '';
    for (let i = 0; i < inputString.length; i++){
        const temp = inputString[i];
        if (matchingVowels.includes(temp)) {
            resultString += (i + 1);
        } else {
            resultString += temp;
        };
    };
    return resultString;
}


// 3. Write a function to find the maximum number in an array.
const InputArray = [1, 3, 4, 6, 7, 8, 2, 5];
const maximun = InputArray[0];

for (var i = 0; i < InputArray.length; i++){
    if (maximun < InputArray[i]) {
        maximun = InputArray[i];
    }
}

console.log(maximun);