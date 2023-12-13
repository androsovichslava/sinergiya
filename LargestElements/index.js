function largest(n, array) {
    // Find the n highest elements in a list
    const result = [];
    const copy = [...array];
    copy.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    console.log(copy);
    if (n === 0) return [];
    for (let i = n; i > 0; i--) {
        result.push(copy[copy.length - i]);
    }
    console.log(result);
    return result;
}

const arr = [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5];
const arr2 = [9, 1, 50, 22, 3, 13, 2, 63, 5];

largest(2, arr);
largest(2, arr2);