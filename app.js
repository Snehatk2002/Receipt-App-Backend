const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {recipemodel}=require("./models/recipe")

mongoose.connect("mongodb+srv://snehatk:6282011259@cluster0.jd3vcot.mongodb.net/recipedb?retryWrites=true&w=majority&appName=Cluster0")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input=req.body
    let recipe =new recipemodel(input)
    recipe.save()
    console.log(recipe)
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    recipemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.listen(8080,()=>{
    console.log("SERVER STARTED")
  })
    



