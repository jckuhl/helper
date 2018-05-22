#! /usr/bin/env node

const dict = require('./dict.json');
const flatten = require('lodash.flatten');
const has = require('lodash.has');

function find(keyword, option) {
    keyword = keyword.toLowerCase();
    let localDict = dict;
    let dictArray = [];
    Object.values(localDict).forEach( (value)=> {
        dictArray.push(value);
    });
    dictArray = flatten(dictArray).filter(entry=> {
        return has(entry, keyword);
    });
    try {
        console.log(`\n\n*****  ${dictArray[0][keyword].name.trim()}  *****\n\n`);
        console.log("Use:", dictArray[0][keyword].use);
        console.log("Example:", dictArray[0][keyword].example);
        console.log("Parameters: ", dictArray[0][keyword].parameters);
        console.log("Returns: ", dictArray[0][keyword].returns)
        console.log("Is on the following prototypes: ", dictArray[0][keyword].prototypes);
        console.log("More information: ", dictArray[0][keyword].mdn)
        console.log(`\n\n**********\n\n`);
    } catch(error) {
        console.log(`The keyword ${keyword} was not found`);
    }
}

find(process.argv[2], process.argv[3]);