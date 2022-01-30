const beautify = require('beautify');



const Data = beautify(`{"a":1}`, {format: 'json'})

console.log(Data);
