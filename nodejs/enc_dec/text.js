const fs = require('fs');

let base64Image = fs.readFileSync('logo.txt')

fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
})
