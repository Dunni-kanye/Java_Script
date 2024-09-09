function HighestLowest(numbers) {
    let highestNumber = numbers[0];
    let lowestNumber = numbers[0];

    for (let count = 1; count < numbers.length; count++) {
        if (numbers[count] > highestNumber) {
            highestNumber = numbers[count];
        }

        if (numbers[count] < lowestNumber) {
            lowestNumber = numbers[count];
        }
    }

    console.log("Highest Number:", highestNumber);
    console.log("Lowest Number:", lowestNumber);
}

HighestLowest([2, 3, 6, 7, 8]);







