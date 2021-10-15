// function fib(num) {
//     num = parseInt(num)
//     const arr = []
//     arr[0] = 1
//     arr[1] = 1
//       for (let i = 2; i < num; i++) {
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     switch(true) {
//         case (num < 0):
//           return "OOPS"
//       case (num.toString().slice(-1) === "1"):
//           return `${num}st fibonacci number is ${arr[arr.length-1]}`
//       case (num.toString().slice(-1) === "2"):
//           return `${num}nd fibonacci number is ${arr[arr.length-1]}`
//       case (num.toString().slice(-1) === "3"):
//           return `${num}rd fibonacci number is ${arr[arr.length-1]}`
//       case (num.toString().slice(-1) >= "4" && num.toString().slice(-1) <= "9" || num.toString().slice(-1) >= "0"):
//         return `${num}th fibonacci number is ${arr[arr.length-1]}`
//     } 
//   }

const fibonacci = function(num) {
    num = parseInt(num)
    const arr = []
    arr[0] = 1, arr[1] = 1
    for (let i = 2; i < num; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    switch(true) {
        case (num > 0):
            return arr[arr.length-1]
        default:
            return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
