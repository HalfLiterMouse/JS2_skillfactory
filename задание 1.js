function Even(K) {
    return K % 2 == 0;
};

function Odd(O) {
    return O % 2 != 0;
};

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15];
for (var i = 0, k = 0; i < arr.length; i++) {
    if (Even(arr[i]))
        {k++}

}
for (var i = 0, o = 0; i < arr.length; i++) {
    if (Odd(arr[i]))
        o++;

}

let checkNull = arr.includes(0);

if ('true') {
    console.log("Содержит ноль: да");
} else { 
    console.log("Содержит ноль: нет") };

console.log("Количество четных: ", k);
console.log("Количество нечетных: ", o);
