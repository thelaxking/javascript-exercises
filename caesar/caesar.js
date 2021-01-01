const caesar = function (string, shift) {
    let answer = string.split('').map(function (word) {
        let char = word
        if ((/[a-zA-Z]/).test(char) == true) {
            char = shiftChar(char, shift);
            return char;
        } else {
            return char;
        }
    }).join('');
    return answer;
};

function shiftChar(char, shift) {
    let code = char.charCodeAt();
    let newCode = code + (shift % 26);
    let letter = '';
    if ((code >= 65 && code <= 90) && newCode < 65) {
        newCode = 91 - (65 - newCode);
        letter = letter + String.fromCharCode(newCode);
    } else if ((code >= 65 && code <= 90) && newCode > 90) {
        newCode = 64 + (newCode - 90);
        letter = letter + String.fromCharCode(newCode);
    } else if ((code >= 97 && code <= 122) && newCode < 97) {
        newCode = 123 - (97 - newCode);
        letter = letter + String.fromCharCode(newCode);
    } else if ((code >= 97 && code <= 122) && newCode > 122) {
        newCode = 96 + (newCode - 122);
        letter = letter + String.fromCharCode(newCode);
    } else {
        letter = letter + String.fromCharCode(newCode);
    }
    return letter;
};

module.exports = caesar