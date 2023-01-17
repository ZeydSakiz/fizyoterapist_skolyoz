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
    type: String,
    require: true

},
location:{
    type: String,
    require: true
},
certificate:{
    type: String,
    require:true
},
statement:{
    type: String,
}

}, {timestamps: true});



const doctor = mongoose.model('doctor',doctorsSchema);

export default doctor;
