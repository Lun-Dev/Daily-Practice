const sumAll = function(startingNum, endingNum) {
    if (startingNum > 0 && 
        endingNum > 0 && 
        typeof startingNum === "number" && 
        typeof endingNum === "number") { //Numbers must be positive and number data type
    const newStartingNum = Math.min(startingNum, endingNum) // Find the lowest number between startingNum & endingNum
    const newEndingNum = Math.max(startingNum, endingNum) // Find the highest number between startingNum & endingNum
    let newTotal = 0 // A new total with a starting value of 0
    for (let i = newStartingNum; i < newEndingNum +1; i++){
        newTotal += i // Using newStartingNum as a start, ends with newEndingNum + 1; Adds to newTotal
    }
    return newTotal // Return the newTotal new value
    } else {
        return "ERROR" // If the numbers were negative or non-number, returns an error
    }
}

console.log(sumAll(1,5))