let MyMongoose=require("mongoose")

let GeneratorQuestions=MyMongoose.Schema({
    Generator:Array,
})

let GeneratorQuestion=MyMongoose.model("QuestionsForGenerator",GeneratorQuestions)
module.exports=GeneratorQuestion;