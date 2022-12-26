import mongoose from 'mongoose';
import Express  from 'express';

const Schema = mongoose.Schema

const iletiSchema = new Schema({
    name:{
        type: String,
    require: true
    },
    email:{
        type: String,
    require: true
    },
    konu: {
        type: String,
    require: false
    },
    mesaj:{
        type: String,
    require: true
    },
    date:{type: Date, default:Date.now}

     }, {timestamps: true});

     const ileti = mongoose.model('ileti',iletiSchema);

     export default ileti;






