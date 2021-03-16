// To check the file if they exist or not 

const fs = require('fs');

fs.access('simple.txt', (err) =>{
    if(!err){
        console.log( 'File exists!');
    }else{
        console.log('File does not exist');
    }
});

console.log('File Name: ' + __filename);