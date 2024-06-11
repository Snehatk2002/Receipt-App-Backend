const mongoose  =require("mongoose")
const schema =mongoose.Schema(
{
"recipeid":{type:String,required:true},
"recipename":{type:String,required:true},
"ingredients":{type:String,required:true},
"image":{type:String,required:true}
}
)
let recipemodel=mongoose.model("recipes",schema)
module.exports={recipemodel}
