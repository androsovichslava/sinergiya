const data = [[2, 5], [3, 4], [8, 7]];

function processData(data) {
    //your code here
    const result = data.map(elem => elem[0] - elem[1]).reduce((a, c) => a * c, 1);
    return result;
}

processData(data);