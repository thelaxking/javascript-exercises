const caesar = function (string, shift) {
    let answer = '';
    let word = string.split('')

    for (i = 0; i < (word.length - 1); i++) {
        let char = word[i];
        if ((/[a-zA-Z]/).test(char) == true) {
            answer = answer + shiftChar(char, shift);
        } else {
            answer = answer + char;
        }
    };

    return answer;

    function shiftChar(char, shift) {
        let code = char.charCodeAt();
        let newCode = code + (shift % 24);
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
};

module.exports = caesar