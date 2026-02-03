const repeatString = function(word, times) {
    let _word = '';
    if (times < 0) return 'ERROR'
    else {
        for (let i = 0; i < times; i++) {
            _word += word;            
        }
        return _word;
    }
};

// Do not edit below this line
module.exports = repeatString;
