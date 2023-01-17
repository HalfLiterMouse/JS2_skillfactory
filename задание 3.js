function SumValues(val1) {
    return function (val2) {
        return val1 + val2;
    };
}

console.log(SumValues(41)(12));