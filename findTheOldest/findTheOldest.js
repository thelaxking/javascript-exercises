let findTheOldest = function (people) {
const age = people.sort(function (a, b) {
        if (a.yearOfDeath == undefined) {
            let dateNow = Date.now();
            a.yearOfDeath = dateNow.getFullYear();
        } else if (b.yearOfDeath == undefined) {
            let dateNow = new Date();
            b.yearOfDeath = dateNow.getFullYear();
        };
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });

    return age[0];
}

module.exports = findTheOldest
