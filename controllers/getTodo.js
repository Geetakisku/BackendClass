// import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
            //fetch all Todo items from database
            const Todos =await Todo.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:Todos,
                message:"Entire Todo Data is fetched",
            });
}
catch(err){
    console.error(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:'Server Error',
    });
  }
}

// exports.gettodos =async(req,res) => {
//     try {

//     }
//     catch (err){

//     }
// }