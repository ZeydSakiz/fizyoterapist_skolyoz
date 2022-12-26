import mongoose from 'mongoose';

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
    dbName: "vtys",
    useNewUrlParser: true,
    useUnifiedTopology: true,

    }).then(()=>{
console.log("connected corerectly.");

    }).catch(() => {
        console.log("DB connection err:" + (err));
    });
    
};
export default conn;
