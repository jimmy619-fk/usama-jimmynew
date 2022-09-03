let MyMongoose=require("mongoose")

let TankandPipelineQuestions=MyMongoose.Schema({
    TankandPipeline:Array,
})

let tankandpipelineQuestion=MyMongoose.model("QuestionsForTankandPipeline",TankandPipelineQuestions)
module.exports=tankandpipelineQuestion;