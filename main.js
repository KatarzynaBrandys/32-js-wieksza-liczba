let num1 = 2;
let num2 = 5;
function getParameters (num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num1 == num2) {
        return ("Liczby są równe")
    } else {
        return num2
    }
}

console.log(getParameters(num1, num2));