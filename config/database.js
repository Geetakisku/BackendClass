const mongoose = require("mongoose");

require("dotenv").config();

// ek function (dbConnect) create kr diya iska kaam hai node js ko mongodb se connect krna aur function k ander wrap kr diyaor export kra diya  
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }) 
    .then (() => console.log("DB ka Connection is Successful"))
    .catch ((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        // iska kya matlb hai
        process.exit(1);

    });
}

module.exports = dbConnect;