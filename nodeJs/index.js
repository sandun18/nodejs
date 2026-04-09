//const os = require("os");
//const path= require('path')
//import os from "node:os";
/*import {dirname,join} from "node:path";
import { readFile } from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname,'myname.txt'),"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data);
});
*/


import { log } from 'node:console';
import { readFile } from 'node:fs';
import { dirname,join } from "node:path";
import {fileURLToPath} from 'node:url';




const __filename =fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//log(__filename);
//log(__dirname);

readFile(join(__dirname,"read.txt"),{
    encoding:'utf-8'
},(err,data)=>{
    if(!err){
        log(data)
    }
});