function getNewRandomNum(start, end) {
    let num
    function inner() {
        let newNum = num
        while (newNum == num) {
            let rand = Math.random();
            console.log(rand);
            newNum = Math.round(rand * end) + start
        }
        num = newNum
        return num
    }

    return inner
}

let func = getNewRandomNum(0, 10)
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
console.log(func())
