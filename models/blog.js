const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "emailid":String,
        "password":String
    }
)
let blogmodel=mongoose.model("blogs",schema)
module.exports={blogmodel}