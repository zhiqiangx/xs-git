#!/usr/bin/env node
const main = require('./index');
const args = process.argv.slice(2);
console.log('args', args);
main(args);
