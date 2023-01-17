let inputValue = prompt("Введите значение от 2 до 1000");
let inputValueSqrt = Math.sqrt(inputValue);

if (inputValue < 2) {
    alert("Значение должно быть больше 1!")
} else if (inputValue <= 1000) {
    if (inputValue == 2 || inputValue == 3) {
        alert(inputValue + "- простое число")
    } else for (var i = 2; i <= inputValueSqrt; i++) {
        if (inputValue % i == 0) {
            alert(inputValue + ' - простое число')
        } else {
            alert(inputValue + '- не простое число');
        }
    }
} else { alert("Данные неверны!") }