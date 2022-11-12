const Mongoose = require("mongoose");
const{config} = require('dotenv');
config()

async function connect(uri){
   try {
    Mongoose.connect(uri || process.env.MONGO_DB)
    console.log("connected to mongodb");
   } catch ( error) {
      console.log(error.message);
   }
}

module.exports = connect
