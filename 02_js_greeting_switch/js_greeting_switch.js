const greetingSwitch = function(timer) {
    switch(timer) {
        case "morning":
            return "Good Morning"
        case "evening":
            return "Good Evening"
        case "night":
            return "Good Night"
        default:
            return "ERROR";
    }
};

module.exports = greetingSwitch;
