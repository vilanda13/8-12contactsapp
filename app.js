const validator = require('validator');
const chalk = require('chalk');

//console.log(validator.isEmail('vilandaharsono1311@gmail.com'));
//console.log(validator.isMobilePhone('0822345678', 'id-ID'));
//console.log(validator.isNumeric('0822345678'));

//console.log(chalk.italic.bgBlue.black('Hello World'));
const nama = 'Vilanda';
const pesan = chalk`Lorem, ipsum dolor {bgRed.black sit amet} consectetur {bgGreen.italic.black adipisicing}S elit. Nama saya : ${nama}`;
console.log(pesan);
