let MyMongoose=require("mongoose")

let ChangingRecord=MyMongoose.Schema({
    ChecklistHistory:Array,
})

let Record=MyMongoose.model("ChecklistChangingRecord",ChangingRecord)
module.exports=Record;


