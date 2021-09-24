const greeting = function(time) {
    if (time === "morning") {
        return "Good morning!";
    } else if (time === "evening") {
        return "Good evening!";
    } else if (time === "night") {
        return "Good night!";
    } else {
        return "ERROR";
    }
}

module.exports = greeting; 