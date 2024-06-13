const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcryptjs")//encryption
const {blogmodel}=require("./models/blog")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://Chandanapk:vishnuchandu1357@cluster0.bemah3y.mongodb.net/blogappDB?retryWrites=true&w=majority&appName=Cluster0")
//to make the password encrypted
const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)

}

app.post('/signup',async(req,res)=>{
    let input=req.body
    let hashedPassword=await generateHashedPassword(input.password)//hashed password
    console.log(hashedPassword)
    input.password=hashedPassword // for passing hashed password to the input
    let blog=new blogmodel(input)
    blog.save()
    res.json({"status":"success"})
    })


app.listen(8072,()=>{
    console.log("server started")
})    
