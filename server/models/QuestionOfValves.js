let MyMongoose=require("mongoose")

let ValvesQuestions=MyMongoose.Schema({
    Valves:Array,
})

let ValvesQues=MyMongoose.model("QuestionsForValves",ValvesQuestions)
module.exports=ValvesQues;