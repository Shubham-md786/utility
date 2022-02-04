const ms = require('ms');//npm i ms

let str = "1h25m15s";
let dur = str.match(/\d+[ymwdhms]/gi);

let ttime = 0

dur.forEach(element =>{
        let time = ms(element)
        console.log(time)
        ttime += time
})
console.log(ttime)
