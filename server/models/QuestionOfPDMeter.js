let MyMongoose=require("mongoose")

let PDMETERQuestions=MyMongoose.Schema({
    PDMeter:Array,
})

let pdmeterQuestion=MyMongoose.model("QuestionsForPDMeter",PDMETERQuestions)
module.exports=pdmeterQuestion;