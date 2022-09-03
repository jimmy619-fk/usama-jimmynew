let UsersSch = require("./models/Users");
let QuestionSch = require("./models/Question");
let QuestionofMotorandPump = require("./models/MotorandPump");
let QuestionOfValves = require("./models/QuestionOfValves");
let QuestionOfPDmeter = require("./models/QuestionOfPDMeter");
let QuestionOfGenerator = require("./models/QuestionOfGenerator");
let QuestionOfLoadingArms = require("./models/QuestionOfLoadingArms");
let QuestionOfTankandPipeline = require("./models/QuestionOfTankPipline");
let ChecklistChangingRecord = require("./models/CheckListChangingRecord");
let QuestionOfFirePump = require("./models/QuestionOfFirepump");
let Sugges = require("./models/Suggestion");
let DeletingHistoryModel = require("./models/DelHistroyModel");
let EquipmentFailure = require("./models/EquipmentFailure");
let InventoryModel = require("./models/InventoryModel");
let WithdrawHistory = require("./models/WithdrawHistoryModel");
const mongoose = require("mongoose");
let moment = require("moment");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("./build"));
app.use(express.json());
let jsonwebtoken = require("jsonwebtoken");

let notifierSkelton = require("./models/NewTimeSChemA");
// const { updateOne } = require("./models/Users");
// let FirePump = [
//   {
//     Name: "Pressure at pump staratup ",

//     Extra_info: "",
//   },
//   {
//     Name: "Motor running time (min.) ",

//     Extra_info: "",
//   },
//   {
//     Name: "Suction pressure ",

//     Extra_info: "",
//   },
//   {
//     Name: "Discharge pressure ",

//     Extra_info: "",
//   },
//   {
//     Name: "Temperature and tightness of shaft seal packing",

//     Extra_info: "",
//   },
//   {
//     Name: "Level of water supply (suction tank should be over flowed)",

//     Extra_info: "",
//   },
//   {
//     Name: "Water temperature in suction tank and reservior",

//     Extra_info: "",
//   },
//   { Name: "Pump room temperature", Extra_info: "" },
//   { Name: "Engine instrument readings RPM ", Extra_info: "" },
//   { Name: "Oil pressure ", Extra_info: "" },
//   { Name: "Temperature ", Extra_info: "" },
//   { Name: "Crankcase oil Ievel", Extra_info: "" },
//   {
//     Name: "Last oil change/Next oil change",

//     Extra_info: "",
//   },
//   {
//     Name: "Amperes",

//     Extra_info: "",
//   },

//   {
//     Name: "Conditon of battery charger ",

//     Extra_info: "",
//   },
//   {
//     Name: "Last time battery charged (Battery electrlyte level normal)",

//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system strainer condition",

//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system temperature ",

//     Extra_info: "",
//   },
//   {
//     Name: "Operation of room ventilation dampers and fans (if provided)",

//     Extra_info: "",
//   },
//   {
//     Name: "inspection of drive belts/Hose (replace as per manufacturer recommendation)",

//     Extra_info: "",
//   },
// ];

// let bbb = new QuestionOfFirePump();
// bbb.FirePump = FirePump;
// bbb.save();

// let Questions = [
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Are volute casing bolts evenly tightened?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Inlet pressure reading/ Outlet pressure reading",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Is coupling guard is on its place?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Is coupling evenly tightened enough?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Is their any weird noise comming after all this inspection?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration and Noise",
//     CRITERIA: "Coupling Greasing.",
//     Extra_info: "",
//   },
//   {
//     Name: "LEACKAGE",
//     CRITERIA: "Check for stuffing box condition.",
//     Extra_info: "",
//   },
//   { Name: "LEACKAGE", CRITERIA: "Mechanical Seals condition.", Extra_info: "" },
//   { Name: "LEACKAGE", CRITERIA: "Packing Condition.", Extra_info: "" },
//   { Name: "LEACKAGE", CRITERIA: "Wear ring condition.", Extra_info: "" },
//   { Name: "BEARING CONDITION", CRITERIA: "Greasing.", Extra_info: "" },
//   { Name: "BEARING CONDITION", CRITERIA: "Bearing oil level.", Extra_info: "" },
//   {
//     Name: "BEARING CONDITION",
//     CRITERIA: "Is there any declourization in bearing lubricant?",
//     Extra_info: "",
//   },
//   {
//     Name: "BEARING CONDITION",
//     CRITERIA: "Temperature of bearings.",
//     Extra_info: "",
//   },

//   {
//     Name: "SIDE ACTIVITIES/INSPECTION?SUGGESTION",
//     CRITERIA: "Check the earthing.",
//     Extra_info: "",
//   },
//   {
//     Name: "SIDE ACTIVITIES/INSPECTION?SUGGESTION",
//     CRITERIA: "Clean the pump from dust.",
//     Extra_info: "",
//   },
//   {
//     Name: "SIDE ACTIVITIES/INSPECTION?SUGGESTION",
//     CRITERIA: "Check for any corrosion.",
//     Extra_info: "",
//   },
//   {
//     Name: "SIDE ACTIVITIES/INSPECTION?SUGGESTION",
//     CRITERIA: "Gasket condition.",
//     Extra_info: "",
//   },
//   {
//     Name: "SIDE ACTIVITIES/INSPECTION?SUGGESTION",
//     CRITERIA: "Check for Voltages and compare readings.",
//     Extra_info: "",
//   },
// ];

// let Questionsofvalves = [
//   {
//     Name: "Check Points",
//     CRITERIA: "Ensure the permission for shutdown.",
//     Extra_info: "",
//   },
//   {
//     Name: "Check Points",
//     CRITERIA: "Preliminary visual inspection.",
//     Extra_info: "",
//   },
//   {
//     Name: "Check Points",
//     CRITERIA: "Check the tightness of the bolts (body & flange).",
//     Extra_info: "",
//   },
//   {
//     Name: "Check Points",
//     CRITERIA: "Open the drain and look for leak.",
//     Extra_info: "",
//   },
//   {
//     Name: "Visual Inspection",
//     CRITERIA: "Check for tag number on the valve.",
//     Extra_info: "",
//   },
//   {
//     Name: "Visual Inspection",
//     CRITERIA: "Check external coating.",
//     Extra_info: "",
//   },
//   {
//     Name: "LVisual Inspection",
//     CRITERIA: "Check for any cracks on the valve",
//     Extra_info: "",
//   },
//   {
//     Name: "Visual Inspection",
//     CRITERIA: "Check for any cracks nuts-bolts.",
//     Extra_info: "",
//   },
//   {
//     Name: "Visual Inspection",
//     CRITERIA: "Actuator shaft Condition.",
//     Extra_info: "",
//   },
//   {
//     Name: "Visual Inspection",
//     CRITERIA: "Isolation of the valve (testing value).",
//     Extra_info: "",
//   },
//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Check for leaks at Valve hand.",
//     Extra_info: "",
//   },
//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Check leaks in flanges.",
//     Extra_info: "",
//   },
//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Check for body leak.",
//     Extra_info: "",
//   },
//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Seat leakage test at high pressure.",
//     Extra_info: "",
//   },

//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Check the yolk clamp bolt is not loose.",
//     Extra_info: "",
//   },
//   {
//     Name: "Leackage Inspection",
//     CRITERIA: "Air Leackage from pneumatic components.",
//     Extra_info: "",
//   },
// ];

// let Questionsofgenerator = [
//   {
//     Name: "DC Electrical System",
//     CRITERIA: "Battery Electrolyte level.",
//     Extra_info: "",
//   },
//   {
//     Name: "DC Electrical System",
//     CRITERIA: "battery connections/ cables/ casing,",
//     Extra_info: "",
//   },
//   {
//     Name: "DC Electrical System",
//     CRITERIA: "electrical starter/ alternator generator.",
//     Extra_info: "",
//   },
//   {
//     Name: "AC Electrical System",
//     CRITERIA: "AC Wiring.",
//     Extra_info: "",
//   },
//   {
//     Name: "AC Electrical System",
//     CRITERIA: "Battery Charger.",
//     Extra_info: "",
//   },
//   {
//     Name: "AC Electrical System",
//     CRITERIA: "Control panel/switch gear.",
//     Extra_info: "",
//   },
//   {
//     Name: "AC Electrical System",
//     CRITERIA: "AC Generator voltage regulator.",
//     Extra_info: "",
//   },
//   {
//     Name: "AC Electrical System",
//     CRITERIA: "Electrical system accessories & components",
//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system",
//     CRITERIA: "Engine coolant level.",
//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system",
//     CRITERIA: "Radiator core/heat exchanger.",
//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system",
//     CRITERIA: "Coolant lines/connections/hoses & connections.",
//     Extra_info: "",
//   },
//   {
//     Name: "Cooling system",
//     CRITERIA: "Water jacket heater(s).",
//     Extra_info: "",
//   },
//   {
//     Name: "Lubrication System",
//     CRITERIA: "Engine Oil Level.",
//     Extra_info: "",
//   },
//   {
//     Name: "Lubrication System",
//     CRITERIA: "oil leaks (hoses,connectors).",
//     Extra_info: "",
//   },
//   {
//     Name: "Lubrication System",
//     CRITERIA: "Generator Bearings.",
//     Extra_info: "",
//   },
//   {
//     Name: "Lubrication System",
//     CRITERIA: "Fan drive bearing.",
//     Extra_info: "",
//   },
// ];

// let Questionsofpdmeter = [
//   {
//     Name: "Strainer",
//     CRITERIA: "No evidence of leaks.",
//     Extra_info: "",
//   },
//   {
//     Name: "Strainer",
//     CRITERIA: "Drain valve closed and plugged, drain valve wired closed/sealed.",
//     Extra_info: "",
//   },
//   {
//     Name: "Air Eliminator ",
//     CRITERIA: "No evidence of leakage from vent.",
//     Extra_info: "",
//   },
//   {
//     Name: "Air Eliminator",
//     CRITERIA: "Vent is not plugged or blanked off.",
//     Extra_info: "",
//   },
//   {
//     Name: "Meter & Display",
//     CRITERIA: "Confirm stock reconciliation is within acceptable limits.",
//     Extra_info: "",
//   },
//   {
//     Name: "Meter & Display",
//     CRITERIA: "Are all numerals easily readable.",
//     Extra_info: "",
//   },
//   {
//     Name: "Counter/Display operation",
//     CRITERIA: "Is the volume delivered shown clearly?",
//     Extra_info: "",
//   },
// ];

// let Questionsofloadingarms = [
//   {
//     Name: "Movement",
//     CRITERIA:
//       "Is the loading arm movement smooth and easy for operator to move into position?",
//     Extra_info: "",
//   },
//   {
//     Name: "Dropper/diffuser",
//     CRITERIA:
//       "Is the drop tube and diffuser positioned with the required distance from the bottom of the truck compartment when loading in all positions?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leaks ",
//     CRITERIA:
//       "Is there no evidence of leaks or product weeping of from any of the swivel joints?",
//     Extra_info: "",
//   },
//   {
//     Name: "Valves",
//     CRITERIA:
//       "If fitted, does the deadman valve function correctly and has not been modified? ",
//     Extra_info: "",
//   },
//   {
//     Name: "Identification",
//     CRITERIA:
//       "Is the product loaded through the loading arm identified clearly and legibly?",
//     Extra_info: "",
//   },
//   {
//     Name: "Integrity",
//     CRITERIA:
//       "Is there no evidence of damage caused by impact or misuse of arm?",
//     Extra_info: "",
//   },
// ];

// let Questionsoftanksandpipelines = [
//   {
//     Name: "Corrosion",
//     CRITERIA: "Any corrosion at support points or fixtures?",
//     Extra_info: "",
//   },
//   {
//     Name: "Corrosion",
//     CRITERIA: "Any areas with scale, pits, or rust?",
//     Extra_info: "",
//   },
//   {
//     Name: "Corrosion ",
//     CRITERIA: "Any significant corrosion of flange bolts?",
//     Extra_info: "",
//   },
//   {
//     Name: "Corrosion",
//     CRITERIA: "Any coating or paint deterioration?",
//     Extra_info: "",
//   },
//   {
//     Name: "Corrosion",
//     CRITERIA: "Any corrosion between flanges?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration",
//     CRITERIA: "Any significant vibration observed?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration",
//     CRITERIA: "Any pipe distortion observed?",
//     Extra_info: "",
//   },
//   {
//     Name: "Vibration",
//     CRITERIA: "Any evidence of excessive movement?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any shoes off their supports?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any hangers missing or damaged?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any spring hangers bottomed-out?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any problems with support braces?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any corrosion of supports?",
//     Extra_info: "",
//   },
//   {
//     Name: "Pipe Support",
//     CRITERIA: "Any loose or broken brackets?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leakage Inspection",
//     CRITERIA: "Any leaks from the process?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leakage Inspection",
//     CRITERIA: "Are any valves leaking?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leakage Inspection",
//     CRITERIA: "Any evidence of past leaks?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leakage Inspection",
//     CRITERIA: "Any leaks from steam tracing?",
//     Extra_info: "",
//   },
//   {
//     Name: "Leakage Inspection",
//     CRITERIA: "Any leaks at leak repair clamps?",
//     Extra_info: "",
//   },
// ];

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.umiux.mongodb.net/?retryWrites=true&w=majority",
  (err, connection) => {
    console.log(err || connection);
  }
);

//// Total Users
app.post("/admin", async (req, res) => {
  let DataBaseUser = await UsersSch.find({}, { Password: 0 });
  res.json(DataBaseUser);
});

////////Creating new user by admin

let notiFicatiooon = [
  { Name: "Pdmeter" },
  { Name: "Motor-Pump" },
  { Name: "Tank-Pipeline" },
  { Name: "LoadingArms" },
  { Name: "Valves" },
  { Name: "Generator" },
  { Name: "Fire-Pump" },
];

app.post("/CreatingUser", async (req, res) => {
  try {
    // console.log(req.body.Name);
    let fFF = await UsersSch.findOne({ Name: req.body.Name });

    if (fFF) {
      // console.log("already exists");
      res.send({ success: false, message: "User Name Already Exited" });
    } else {
      let newing = new UsersSch();
      newing.Name = req.body.Name;
      newing.Password = req.body.Password;
      newing.Address = req.body.Address;
      newing.PhoneNo = req.body.PhoneNo;
      newing.Rank = req.body.Rank;
      newing.Allow = true;
      newing.Role = req.body.Role;
      newing.save();

      for (let index = 0; index < notiFicatiooon.length; index++) {
        let addTimeDate = new notifierSkelton();
        addTimeDate.notificationDate = moment().format("YYYY MM DD");
        addTimeDate.Showing = false;
        addTimeDate.Name = notiFicatiooon[index].Name;
        addTimeDate.User = req.body.Name;
        await addTimeDate.save();
      }

      res.send({ success: true, message: "Successful Created" });
    }
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

// for changing true false
app.post("/ChangingUserAuthorization", async (req, res) => {
  await UsersSch.findOneAndUpdate(
    { Name: req.body.Power.Name },
    { Allow: req.body.Power.Allow }
  ).exec();
  res.end("Successfully Succeeded");
});

// Name: "Jamshaid";
// Password: "jimmy619";
// Address: "Jhang";
// PhoneNo: 3163861600;
// Rank: "Admin";
// Allow:true

///Ending User Data

// MOTOR AND PUMP SECTIONS

app.post("/motorms", async (req, res) => {
  let jgvvghv = await QuestionofMotorandPump.find({});
  res.json(jgvvghv);
});

app.post("/QuestionOfMotorAndPumpAfterChange", async (req, res) => {
  await QuestionofMotorandPump.updateOne(
    { _id: "6283a0c133b2e78dfb137e44" },
    { MotorPump: req.body }
  );

  res.end("Successfully Done ");
});

// let CurrentTime = moment().format("MM YYYY");

app.post("/showmsddata", async (req, res) => {
  let Showmddata = await QuestionSch.find({
    PumpCategory: "PS-PMG",
    Type: "Motor",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  // console.log(Showmddata);
  res.json(Showmddata.reverse());
});

app.post("/showhsddata", async (req, res) => {
  let Showmddata = await QuestionSch.find({
    PumpCategory: "PS-HSD",
    Type: "Motor",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(Showmddata.reverse());
});

app.post("/alldataofMotor", async (req, res) => {
  let Showmddata = await QuestionSch.find({
    Type: "Motor",
  });
  // console.log(Showmddata);
  res.json(Showmddata.reverse());
});

// Motor and pump Ending

// valves starting

app.post("/valves", async (req, res) => {
  let valvesData = await QuestionOfValves.find({});
  res.json(valvesData);
});

app.post("/showValvedata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Valves",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(ShoValvedata.reverse());
});

app.post("/showAllValvedata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Valves",
  });
  res.json(ShoValvedata.reverse());
});

app.post("/QuestionOfValvesAfterChange", async (req, res) => {
  await QuestionOfValves.updateOne(
    { _id: "6285c24a60c9069ea48dc9d8" },
    { Valves: req.body }
  );

  res.end("Successfully Done ");
});

/// valves is Ending

/// Generator is Starting
app.post("/genertor", async (req, res) => {
  let GeneratorData = await QuestionOfGenerator.find({});
  res.json(GeneratorData);
});

app.post("/showgeneratordata", async (req, res) => {
  let gendata = await QuestionSch.find({
    Type: "Generator",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(gendata.reverse());
});

app.post("/showALLgeneratordata", async (req, res) => {
  let gendata = await QuestionSch.find({
    Type: "Generator",
  });
  res.json(gendata.reverse());
});

app.post("/QuestionOfGeneratorAfterChange", async (req, res) => {
  await QuestionOfGenerator.updateOne(
    { _id: "6285d9cbcc0b8f9901ca8368" },
    { Generator: req.body }
  );
  // console.log(req.body);
  res.end("Successfully Done ");
});

/// Generator Ending

/// PDMETER STARTING

app.post("/pdmeterQuestion", async (req, res) => {
  let PdmeterData = await QuestionOfPDmeter.find({});
  res.json(PdmeterData);
});

app.post("/showPdmeterdata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "PD-METER",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(ShoValvedata.reverse());
});

app.post("/showALLPdmeterdata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "PD-METER",
  });
  res.json(ShoValvedata.reverse());
});

app.post("/QuestionOfPDmeterAfterChange", async (req, res) => {
  await QuestionOfPDmeter.updateOne(
    { _id: "6285c37a022d15d5ebece460" },
    { PDMeter: req.body }
  );

  res.end("Successfully Done ");
});

////PdEMTER ENDING

/// Loading Arms Starting

app.post("/loadingarmsQuestion", async (req, res) => {
  let LoadingArmsData = await QuestionOfLoadingArms.find({});
  res.json(LoadingArmsData);
});

app.post("/showigLoadigArmsData", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Loading Arms",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(ShoValvedata.reverse());
});

app.post("/showigALLLoadigArmsData", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Loading Arms",
  });
  res.json(ShoValvedata.reverse());
});

app.post("/QuestionOfLoadingArmsAfterChange", async (req, res) => {
  await QuestionOfLoadingArms.updateOne(
    { _id: "6285c835b3f76986a40170d0" },
    { LoadingArms: req.body }
  );
  res.end("Successfully Done ");
});

/// Loading Arms Ending

/// TankandPipeline Starting

app.post("/tanksandPipelineQuestion", async (req, res) => {
  let TankandPipelineData = await QuestionOfTankandPipeline.find({});
  res.json(TankandPipelineData);
});

app.post("/showTankadPipeline", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "TankPipeline",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  // console.log(ShoValvedata);
  res.json(ShoValvedata.reverse());
});

app.post("/showALLTankadPipeline", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "TankPipeline",
  });
  // console.log(ShoValvedata);
  res.json(ShoValvedata.reverse());
});

app.post("/QuestionOfTankandPipelineAfterChange", async (req, res) => {
  await QuestionOfTankandPipeline.updateOne(
    { _id: "6285d96225c504341ab23625" },
    { TankandPipeline: req.body }
  );
  res.end("Successfully Done ");
});

/// Tank and Pipeline Ending

// valves starting

app.post("/valves", async (req, res) => {
  let valvesData = await QuestionOfValves.find({});
  res.json(valvesData);
});

app.post("/showValvedata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Valves",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(ShoValvedata.reverse());
});

app.post("/showAllValvedata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "Valves",
  });
  res.json(ShoValvedata.reverse());
});

app.post("/QuestionOfValvesAfterChange", async (req, res) => {
  await QuestionOfValves.updateOne(
    { _id: "6285c24a60c9069ea48dc9d8" },
    { Valves: req.body }
  );

  res.end("Successfully Done ");
});

/// FirePump is // FirePump starting

app.post("/FirePumpQuestion", async (req, res) => {
  let valvesData = await QuestionOfFirePump.find({});
  res.json(valvesData);
});

app.post("/showFireMonthlyPumpdata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "FirePump",
    CurrentMMYYYY: moment().format("MM YYYY"),
  });
  res.json(ShoValvedata.reverse());
});

app.post("/showAllfirePumpdata", async (req, res) => {
  let ShoValvedata = await QuestionSch.find({
    Type: "FirePump",
  });
  res.json(ShoValvedata.reverse());
});

app.post("/ChecklistChangingRecord", async (req, res) => {
  await QuestionOfFirePump.updateOne(
    { _id: "6285c24a60c9069ea48dc9d8" },
    { Valves: req.body }
  );

  res.end("Successfully Done ");
});

/// FirePump is Ending

// request for checking the data
app.post("/typemaintainance", async (req, res) => {
  // console.log("typemaintainance", req.body);
  let DataBaseUser = await notifierSkelton.find({ User: req.body.User });
  // console.log(DataBaseUser);
  res.json(DataBaseUser);
});

// updatetimer

app.post("/MotorandPumpTime", async (req, res) => {
  // console.log(typeof req.body.newTime);

  try {
    // console.log("req.body", req.body, req.query.Cat, req.query.myid);
    let resp = await notifierSkelton
      .findOneAndUpdate(
        { Name: req.query.Cat, User: req.query.myid },
        { notificationDate: req.body.newTime }
      )
      .exec();
    // console.log(resp);
    res.send({ success: true, message: "done" });
  } catch (error) {
    res.send(error);
  }
});

app.post("/findingthepopupdetail", async (req, res) => {
  // console.log(req.body.Data);
  try {
    // console.log("req.body", req.body, req.query.Cat, req.query.myid);
    let resp = await notifierSkelton.find({ User: req.body.Data }).exec();
    // console.log(resp);
    res.json(resp);
  } catch (error) {
    res.send(error);
  }
});

// app.post("/Dataentery", async (req, res) => {
//   let meraUser = new notifierSkelton();

//   meraUser.notificationDate = "2022 05 22";
//   meraUser.Showing = false;
//   meraUser.Name = "Valves";
//   meraUser.User = "User2";

//   meraUser.save();

//   res.end("Successful");
// });

////////////////////////////////// Suggestion for the user Working
app.post("/Suggestion", async (req, res) => {
  let meraData = new Sugges();
  meraData.Name = req.body.Name;
  meraData.PhoneNo = req.body.PhoneNo;
  meraData.Email = req.body.email;
  meraData.Subject = req.body.subject;
  meraData.Message = req.body.Message;
  meraData.Category = "Suggestion";
  meraData.Date = moment().format("LLL");
  meraData.save();
  res.end("Successful");
});

app.post("/SuggestionForTheAdmin", async (req, res) => {
  let Dataa = await Sugges.find({});
  res.json(Dataa.reverse());
});

// /////////////////EquipmentFailure is Starting

app.post("/EquipmentFailure", async (req, res) => {
  let Tempabc = new EquipmentFailure();
  Tempabc.Name = req.body.Name;
  Tempabc.PhoneNo = req.body.PhoneNo;
  Tempabc.Email = req.body.email;
  Tempabc.Subject = req.body.subject;
  Tempabc.Message = req.body.Message;
  Tempabc.Category = "EquipmentFailure";
  Tempabc.EquipmentNo = req.body.EquipmentNo;
  Tempabc.Action = req.body.Action;
  Tempabc.Date = moment().format("LLL");
  Tempabc.save();
  res.end("Successful");
});

app.post("/EquipmentFailureForTheAdmin", async (req, res) => {
  let Dataa = await EquipmentFailure.find({});
  res.json(Dataa.reverse());
});

////// User UserName and Password Chceking

app.post("/LoginGoing", async (req, res) => {
  // console.log(req.body);
  let userMlilgya = await UsersSch.findOne(
    {
      Name: req.body.name,
      Password: req.body.password,
      Allow: true,
    },
    { Password: 0 }
  );
  // console.log(30);

  if (userMlilgya) {
    jsonwebtoken.sign(
      { id: userMlilgya._id },
      "cat says mioon in fsd",
      { expiresIn: "1h" },
      (err, data) => {
        res.json({
          success: true,
          userMlilgya,
          nishani: data,
        });
      }
    );
  } else {
    res.json({
      success: false,
      message: "404 Sir you User Name or Password is wrong ",
    });
  }
});

app.post("/session-check", (req, res) => {
  // console.log(req.body);
  jsonwebtoken.verify(
    req.body.token,
    "cat says mioon in fsd",
    async (err, data) => {
      if (data) {
        let user = await UsersSch.findById(data.id);

        res.json(user);
      } else {
        res.json(null);
      }
    }
  );
});
//////////////////////////InventoryModel//////

app.post("/InventoryAddingItem", async (req, res) => {
  try {
    let CheckId = await InventoryModel.find({ ProductId: req.body.ProductId });

    if (CheckId.length) {
      res.json({ Message: "Id ready Have Please Change it", Id: 1 });
    } else {
      let Tempp = new InventoryModel();
      Tempp.ProductName = req.body.ProductName;
      Tempp.ProductCategory = req.body.ProductCategory;
      Tempp.Quantity = req.body.ProductQuantity;
      Tempp.ProductId = req.body.ProductId;
      Tempp.AddingDate = req.body.AddItemDate;
      Tempp.ExpireDate = req.body.ProductExpireDate;
      Tempp.Mansefacture = req.body.ProductManufacture;
      Tempp.Class = req.body.ProductClass;
      Tempp.PersonName = req.body.AddingPersonName;
      Tempp.Installed = req.body.Install;
      Tempp.save();
      res.json({ Message: "Successful", id: 2 });
    }
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

/// Total Data Finding Not Installed

app.post("/FindingAllInventoryitem", async (req, res) => {
  try {
    let TotalItem = await InventoryModel.find({
      Quantity: { $gt: 0 },
      Installed: "No",
    });
    res.json(TotalItem.reverse());
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

/// Total Data Finding which is installed

app.post("/FindingAllInventoryitemInstalled", async (req, res) => {
  try {
    let TotalItem = await InventoryModel.find({
      // Quantity: { $gt: 0 },
      Installed: "Yes",
    });
    res.json(TotalItem.reverse());
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

//////Expire item of this Month

app.post("/ExpireitemofthisMonth", async (req, res) => {
  try {
    let TotalItem = await InventoryModel.find({
      ExpireDate: { $regex: moment().format("YYYY-MM") },
    });

    res.json(TotalItem.reverse());
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

/////////////WithdrawItemSearchData//////

app.post("/WithdrawItemSearchData", async (req, res) => {
  try {
    let Searc = await InventoryModel.findOne({
      ProductId: req.body.Search,
      Quantity: { $gt: 0 },
    });

    if (Searc) {
      res.json(Searc);
    } else {
      res.json({ Message: "Product Id Not Found" });
    }
  } catch (error) {
    res.end("Error Happened or Contact with Software Team");
  }
});

/////////withdraw Data Updater////////

app.post("/withdrawdataUpdater", async (req, res) => {
  try {
    let Upss = await InventoryModel.findOneAndUpdate(
      { _id: req.body._id },
      { Quantity: req.body.Quantity }
    );
    res.json({ Message: "Successfully Withdraw", Id: 1 });
  } catch (error) {
    res.json({
      Message: "Error Happened or Contact with Software Team",
      Id: 2,
    });
  }
});

////////////////WithdrawHistory////////////

app.post("/WithdrawHistory", async (req, res) => {
  try {
    let Tempp = new WithdrawHistory();
    Tempp.ProductName = req.body.ProductName;
    Tempp.ProductCategory = req.body.ProductCategory;
    Tempp.Quantity = req.body.Quantity;
    Tempp.ProductId = req.body.ProductId;
    Tempp.AddingDate = req.body.AddingDate;
    Tempp.ExpireDate = req.body.ExpireDate;
    Tempp.Mansefacture = req.body.Mansefacture;
    Tempp.Class = req.body.Class;
    Tempp.PersonName = req.body.PersonName;
    Tempp.WithdrawUser = req.body.WithdrawUser;
    Tempp.WithdrawTime = req.body.WithdrawDate;
    Tempp.WithdrawQuantity = req.body.WithdrawQuantity;
    Tempp.WithDrawPurpose = req.body.WithdrawPropose;
    Tempp.save();
    res.json("Successful");
  } catch (error) {
    res.json("Error");
  }
});

//////////////Delete Data Search finding

app.post("/DelSearchFind", async (req, res) => {
  try {
    let DelFind = await InventoryModel.findOne({ ProductId: req.body.Search });
    if (DelFind) {
      res.json(DelFind);
    } else {
      res.json({ Message: "Product Id Not Found" });
    }
  } catch (error) {
    res.json({ Message: "error happened Contact Software Team" });
  }
});

///////// Deleting the Product /////

app.post("/DeltheProduct", async (req, res) => {
  try {
    let hey = await InventoryModel.findOneAndDelete({ _id: req.body._id });
    res.json({ Message: "Done", Id: 1 });
  } catch (error) {
    res.json({ Message: "error happened Contact Software Team", Id: 2 });
  }
});

/////////////////DeletingHistoryModel/////////////

app.post("/DeletingHistory", async (req, res) => {
  try {
    let Tempp = new DeletingHistoryModel();
    Tempp.ProductName = req.body.ProductName;
    Tempp.ProductCategory = req.body.ProductCategory;
    Tempp.Quantity = req.body.Quantity;
    Tempp.ProductId = req.body.ProductId;
    Tempp.AddingDate = req.body.AddingDate;
    Tempp.ExpireDate = req.body.ExpireDate;
    Tempp.Mansefacture = req.body.Mansefacture;
    Tempp.Class = req.body.Class;
    Tempp.DeletingUser = req.body.DelUserName;
    Tempp.DeletingTime = req.body.DelDate;

    Tempp.save();
    res.json(" Deleting History Successful");
  } catch (error) {
    res.json("Error");
  }
});

//////////// WithdrawHistoryDisplaySetting

app.post("/withdrawhistoryShowing", async (req, res) => {
  try {
    let Finddoo = await WithdrawHistory.find({});
    res.json(Finddoo.reverse());
  } catch (error) {
    res.json({ Message: "Server Error Contact Software Team" });
  }
});

/////////////////DeletingHistoryModel History Finding/////
app.post("/FindingDelHistoryShowing", async (req, res) => {
  try {
    let DelSear = await DeletingHistoryModel.find({});
    res.json(DelSear.reverse());
  } catch (error) {
    res.json({ Message: "Server Error Contact Software Team" });
  }
});

//////////////////InventoryProductWithQuantityZero Search to Show//////
app.post("/inventoryItemWithQuantityZero", async (req, res) => {
  try {
    let QuanZero = await InventoryModel.find({ Quantity: { $eq: 0 } });

    if (QuanZero.length) {
      res.json(QuanZero);
    } else {
      res.json({ Message: "No any Product have Qunatity Zero" });
    }
  } catch (error) {
    res.json({ Message: "Qurey Server Error Contact Software Team" });
  }
});

///// Modify CheckList Data Saving Center

app.post("/ChecklistChangingRecord", async (req, res) => {
  // console.log("required", req.body.Data);
  // let jsbyhd = new ChecklistChangingRecord();
  //   // let abcb = [];
  //   // jsbyhd.ChecklistHistory = abcb;
  //   // await jsbyhd.save();

  await ChecklistChangingRecord.findOneAndUpdate(
    { _id: "6287d4e26083c5a3243271d5" },
    {
      $push: {
        ChecklistHistory: req.body.Data,
      },
    }
  );
  res.end("Done");
});

app.post("/CompleteData", async (req, res) => {
  let meraUser = new QuestionSch();
  meraUser.Type = req.query.myid;
  meraUser.Anwer = req.body.Feedback;
  meraUser.MainMessage = req.body.mainDescription;
  meraUser.PumpType = req.body.PumpType;
  meraUser.PumpCategory = req.body.PumpCategory;
  meraUser.SubmittedTime = req.body.SubmittingTime;
  meraUser.SubmittedBy = req.body.SubmittBy;
  meraUser.CurrentMMYYYY = req.body.ServerLog;
  meraUser.save();

  res.end("Successful");
});

// app.post("/ValvesData", async (req, res) => {
//   let meraUser = new QuestionSch();
//   meraUser.Type = req.query.myid;
//   meraUser.Anwer = req.body.Feedback;
//   meraUser.MainMessage = req.body.mainDescription;
//   meraUser.PumpType = req.body.PumpType;
//   meraUser.PumpCategory = req.body.PumpCategory;
//   meraUser.SubmittedTime = req.body.SubmittingTime;
//   meraUser.SubmittedBy = req.body.SubmittBy;

//   meraUser.save();

//   res.end("Successful");
// });
app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running");
});
