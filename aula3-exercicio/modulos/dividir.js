function dividir (num1, num2) {
    if(num1 === 0 || num2 === 0) {
        return "não se pode dividir por zero"
    } else {
        return num1 / num2;
    }
}

module.exports = dividir