let MyMongoose=require("mongoose")

let MotorandPumpQuestions=MyMongoose.Schema({
    MotorPump:Array,
})

let MotorPumpQues=MyMongoose.model("MotorandPumpQuestions",MotorandPumpQuestions)
module.exports=MotorPumpQues;