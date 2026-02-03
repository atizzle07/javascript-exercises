const reverseString = function(message) {
    let _message = "";
    if (message === "") return "";
    else {
        _message = message.split("").reverse().join("");
        return _message
    }
};

// Do not edit below this line
module.exports = reverseString;
