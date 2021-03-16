const fs = require('fs');

const txt = 'Welcome to my file..You are awesome!'

// Writing file Asynchronously 
fs.writeFile('simple.txt', txt, function(err, data) {
    
    if(!err){ //if not error
        console.log('File writing over!');
    }else{
        console.log(err);
    }
});

console.log('Program has been ended');