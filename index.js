


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import conn from './db.js';
import doctor from './models/doctors.js';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



const index = express();
conn();
doctor();
dotenv.config();



function aramaSayfasi(){
    window.location.href="http://localhost:1000/ara";
  }





let btnAra;


export function noSec (){
let secilen = Document.getElementById("sehirler").value;

return secilen;
};










 


