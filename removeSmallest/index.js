function removeSmallest(numbers) {
    let sortArr = Array.from(numbers).sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    let min = sortArr[0];
    console.log(sortArr)
    // console.log(numbers)

    // let index = numbers.find(min);
    let exist = false;
    let result = numbers.filter(elem => {
        if (elem !== min) {
            return true;
        }
        if (elem === min && !exist) {
            exist = true;
            return false;
        }

        if (elem === min && exist) {

            return true;
        }


    }
    );
    return result;
}
let arr = [285, 124, 104, 337, 18, 321, 380, 380, 180, 330, 277, 233, 22];

console.log(removeSmallest(arr));