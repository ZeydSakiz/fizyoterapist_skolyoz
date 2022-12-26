import mongoose from 'mongoose';
import Express  from 'express';


const Schema = mongoose.Schema

const doctorsSchema = new Schema({
city:{
    type: String,
    require: true
},
name: {
    type: String,
    require: true
},
surname: {
    type: String,
    require: true
},

telephone: {
    type: Number,
    require: true

},
location:{
    type: String,
    require: true
},
certificate:{
    type: String,
    require:true
}

}, {timestamps: true});



const doctor = mongoose.model('doctor',doctorsSchema);

export default doctor;
