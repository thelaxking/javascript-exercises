const getTheTitles = function (array) {
    const result = array.map(function (a) {
        return a.title
    });
    return result;
};

module.exports = getTheTitles;
