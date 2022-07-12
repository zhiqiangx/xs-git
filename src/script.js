#!/usr/bin/env node
const main = require('./index');
console.log('process.argv', process.argv);
const args = process.argv.slice(2);

main(args);
// const args = require('args-parser')(process.argv);
console.info(args);
