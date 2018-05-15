// Write your cade below:
function main(guessNumber, randomNumber) {
    //var randomNumber = '';
    var number1 = [];
    var number2 = [];
    var result = '';
    var aNumber = 0;
    var bNumber = 0;
    number1 = guessNumber.split('');
    // for (let i = 0; i < 4; i++) {
    //     randomNumber += Math.floor(Math.random() * 10);
    // }
    var number2 = randomNumber.split('');
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (number1[i] == number2[j]) {
                if (i == j)
                    aNumber++;
                else
                    bNumber++;
            }
        }
    }
    result += aNumber + 'A' + bNumber + 'B';
    return result;
};

module.exports = main;