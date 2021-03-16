const yargs = require('yargs');

console.log(yargs.argv.filename);

if(yargs.argv.filename){
    console.log(yargs.argv.filename);
}else{
    console.log('Enter Filename');
};
