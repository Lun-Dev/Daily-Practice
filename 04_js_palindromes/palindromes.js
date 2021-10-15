const palindromes = function(str) {
    const cleaning = /[$-/:-?{-~@#!"^_`\[\]\s]/g;
    const rawTxt = str.toLowerCase().replace(cleaning, '').split('')
    const rawStr = rawTxt.toString();
    const revStr = rawTxt.reverse().join(',');
        return rawStr === revStr;
}

// Do not edit below this line
module.exports = palindromes;
