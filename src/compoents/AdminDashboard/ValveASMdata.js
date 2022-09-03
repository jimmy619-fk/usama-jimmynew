//shi styling component
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TanksASMdata.css";

import "./admindashboardchangewala.css";

import M from "materialize-css";
import { Table } from "react-materialize";

export default function ValvesASMdata() {
  let formRef = useRef();
  let [Data, SetData] = useState([]);

  useEffect(() => {
    axios
      .post("/showValvedata")
      .then((xyz) => {
        SetData(xyz.data);
        console.log(xyz.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const USERS = [
    {
      id: 1,
      tagnumber: "GV-PMG-1",
      valvetype: "Gate Valve",
      serailno: 1,
      location: "Metering Shed PMG Line 1",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },

    {
      id: 2,
      tagnumber: "GV-PMG-2",
      valvetype: "Gate Valve",
      serailno: 2,
      location: "Metering Shed PMG Line 2",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 3,
      tagnumber: "GV-PMG-3",
      valvetype: "Gate Valve",
      serailno: 3,
      location: "Metering Shed PMG Line 3",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 4,
      tagnumber: "GV-PMG-4",
      valvetype: "Gate Valve",
      serailno: 4,
      location: "Metering Shed PMG Line 4",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 5,
      tagnumber: "GV-PMG-5",
      valvetype: "Gate Valve",
      serailno: 5,
      location: "Metering Shed PMG Line 5",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 6,
      tagnumber: "GV-PMG-6",
      valvetype: "Gate Valve",
      serailno: 6,
      location: "Metering Shed PMG Line 6",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 7,
      tagnumber: "GV-PMG-7",
      valvetype: "Gate Valve",
      serailno: 7,
      location: "Metering Shed PMG Line 7",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 8,
      tagnumber: "GV-PMG-8",
      valvetype: "Gate Valve",
      serailno: 8,
      location: "Metering Shed PMG Line 8",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 9,
      tagnumber: "GV-PMG-9",
      valvetype: "Gate Valve",
      serailno: 9,
      location: "Metering Shed PMG Line 9",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 10,
      tagnumber: "GV-PMG-10",
      valvetype: "Gate Valve",
      serailno: 10,
      location: "Metering Shed PMG Line 10",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 11,
      tagnumber: "GV-HSD-1",
      valvetype: "Gate Valve",
      serailno: 11,
      location: "Metering Shed HSD Line 1",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 12,
      tagnumber: "GV-HSD-2",
      valvetype: "Gate Valve",
      serailno: 12,
      location: "Metering Shed HSD Line 2",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 13,
      tagnumber: "GV-HSD-3",
      valvetype: "Gate Valve",
      serailno: 13,
      location: "Metering Shed HSD Line 3",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 14,
      tagnumber: "GV-HSD-4",
      valvetype: "Gate Valve",
      serailno: 14,
      location: "Metering Shed HSD Line 4",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 15,
      tagnumber: "GV-HSD-5",
      valvetype: "Gate Valve",
      serailno: 15,
      location: "Metering Shed HSD Line 5",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 16,
      tagnumber: "GV-HSD-6",
      valvetype: "Gate Valve",
      serailno: 16,
      location: "Metering Shed HSD Line 6",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 17,
      tagnumber: "GV-HSD-7",
      valvetype: "Gate Valve",
      serailno: 17,
      location: "Metering Shed HSD Line 7",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 18,
      tagnumber: "GV-HSD-8",
      valvetype: "Gate Valve",
      serailno: 18,
      location: "Metering Shed HSD Line 8",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 19,
      tagnumber: "GV-HSD-9",
      valvetype: "Gate Valve",
      serailno: 19,
      location: "Metering Shed PMG Line 9",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 20,
      tagnumber: "GV-HSD-10",
      valvetype: "Gate Valve",
      serailno: 20,
      location: "Metering Shed PMG Line 10",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 21,
      tagnumber: "GV-PMG-11",
      valvetype: "Gate Valve",
      serailno: 20,
      location: "Pump Shed PMG Decantation",
      make: "EMA",
      class: "150 LB",
      size: "8'' X 1      ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 22,
      tagnumber: "GV-PMG-12",
      valvetype: "Gate Valve",
      serailno: 22,
      location: "Pump Shed PMG Decantation      ",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 1",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 23,
      tagnumber: "GV-HSD-11",
      valvetype: "Gate Valve",
      serailno: 23,
      location: "Pump Shed   HSD Decantation      ",
      make: "EMA",
      class: "150 LB",
      size: "8'' X 1",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 24,
      tagnumber: "GV-HSD-12",
      valvetype: "Gate Valve",
      serailno: 24,
      location: "Pump Shed   HSD Decantation      ",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 1",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 25,
      tagnumber: "GV-PMG-13",
      valvetype: "Gate Valve",
      serailno: 25,
      location: "Pump Shed   PMG Filling (All Suction Lines)      ",
      make: "EMA",
      class: "150 LB",
      size: "8'' X 5",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 26,
      tagnumber: "GV-PMG-14",
      valvetype: "Gate Valve",
      serailno: 26,
      location: "Pump Shed   PMG Filling (All Discharge Lines)      ",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 5",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 27,
      tagnumber: "GV-HSD-13",
      valvetype: "Gate Valve",
      serailno: 27,
      location: "Pump Shed   HSD Filling (All Suction Lines)      ",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 5",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 28,
      tagnumber: "GV-HSD-14",
      valvetype: "Gate Valve",
      serailno: 28,
      location: "Pump Shed   HSD Filling (All Discharge Lines)      ",
      make: "EMA",
      class: "150 LB",
      size: "4'' X 3",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 29,
      tagnumber: "GV-HSD-1",
      valvetype: "Gate Valve",
      serailno: 29,
      location: "Tank 01      ",
      make: "Pro Tek      ",
      class: "150 LB",
      size: "16'' X 1 '10'' X 2''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 30,
      tagnumber: "GV-HSD-2",
      valvetype: "Gate Valve",
      serailno: 30,
      location: "Tank 02      ",
      make: "EMA",
      class: "150 LB",
      size: "16'' X 1 '10'' X 4''8'' X 1''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 31,
      tagnumber: "GV-HSD-3",
      valvetype: "Gate Valve",
      serailno: 31,
      location: "Tank 03        ",
      make: "EMA",
      class: "150 LB",
      size: "16'' X 1 '10'' X 4''8'' X 1''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 32,
      tagnumber: "GV-HSD-4",
      valvetype: "Gate Valve",
      serailno: 32,
      location: "Tank 04      ",
      make: "EMA",
      class: "150 LB",
      size: "16'' X 1 '10'' X 4''8'' X 1''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 33,
      tagnumber: "GV-PMG-5",
      valvetype: "Gate Valve",
      serailno: 30,
      location: "Tank 05      ",
      make: "EMA",
      class: "150 LB",
      size: "16'' X 1 '12'' X 1''8'' X 1''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 34,
      tagnumber: "GV-PMG-6",
      valvetype: "Gate Valve",
      serailno: 34,
      location: "Tank 06      ",
      make: "EMA",
      class: "150 LB",
      size: "16'' X 4 '12'' X 1''8'' X 1''6'' X 2''4'' X 2''2'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 35,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 35,
      location: "Metering Shed      ",
      make: "EMA",
      class: "150 LB",
      size: "8'' X 2 '6'' X 1'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 36,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 36,
      location: "Behind Pump Shed      ",
      make: "EMA",
      class: "150 LB",
      size: "10'' X 2 '8'' X 1''2'' X 4'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 37,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 37,
      location: "Surge Line HSD & PMG      ",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 6 ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 38,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 38,
      location: "Receiver HSD & PMG      ",
      make: "G & O/EMA/VALEN      ",
      class: "150 LB",
      size: "16'' X 9 '6'' X 2''2'' X 4'",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 39,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 39,
      location: "API Seprator      ",
      make: "EMA",
      class: "150 LB",
      size: "3'' X 5 ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 40,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 40,
      location: "Gantry Bay 1,4,5,8 and 9       ",
      make: "KILNGER      ",
      class: "150 LB",
      size: "4'' X 5 ",
      seat: "13 Cr",
      body: "WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 41,
      tagnumber: "#123",
      valvetype: "Gate Valve",
      serailno: 41,
      location: "Fire Water Line      ",
      make: "EMA & LANDEE      ",
      class: "150 LB",
      size: "10'' X 9 '4'' X 6",
      seat: "13 Cr",
      body: "WCB",
      disc: "WCB",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 42,
      tagnumber: "#123",
      valvetype: "NRV      ",
      serailno: 42,
      location: "Pump House      ",
      make: "EMA      ",
      class: "150 LB",
      size: "6'' X 12 ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 43,
      tagnumber: "#123",
      valvetype: "NRV      ",
      serailno: 43,
      location: "Behind Pump Shed Surge Line      ",
      make: "EMA      ",
      class: "150 LB",
      size: "6'' X 2 ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 44,
      tagnumber: "#123",
      valvetype: "NRV      ",
      serailno: 44,
      location: "Tanks      ",
      make: "EMA      ",
      class: "150 LB",
      size: "16'' X 6 '6'' X 12",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 45,
      tagnumber: "#123",
      valvetype: "PSV       ",
      serailno: 45,
      location: "Pump Shed      ",
      make: "Farris      ",
      class: "N/A      ",
      size: "1.5'' X 4 '1'' X 1",
      seat: "13 Cr",
      body: "WCB",
      disc: "N/A      ",
      maxworkingpressure: "80 Psig      ",

      YEAROFMANUFACTURE: 2018,
    },
    {
      id: 46,
      tagnumber: "#123",
      valvetype: "PSV       ",
      serailno: 46,
      location: "Tanks      ",
      make: "N/A      ",
      class: "L8S      ",
      size: "('1/2'' X 1) X 24",
      seat: "N/A      ",
      body: "WCB",
      disc: "N/A",
      maxworkingpressure: "300 PSI      ",

      YEAROFMANUFACTURE: "N/A      ",
    },
    {
      id: 47,
      tagnumber: "#1du",
      valvetype: "Globe Valve",
      serailno: 47,
      location: "Pump House",
      make: "EMA",
      class: "150 LB",
      size: "6'' X 12 ",
      seat: "13 Cr",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 48,
      tagnumber: "#bgx",
      valvetype: "Ball Valve",
      serailno: 48,
      location: "Pig Receiver Line",
      make: "Landee",
      class: "ANSI 150 LB",
      size: "16'' X 2 ",
      seat: "A105 RPTFE",
      body: "A105",
      disc: "N/A",
      maxworkingpressure: "As per API 150",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 49,
      tagnumber: "#123",
      valvetype: "Ball Valve",
      serailno: 49,
      location: "Gantry Area",
      make: "KILNGER/EMA",
      class: "150 LB",
      size: "4'' X 50 ",
      seat: "N/A",
      body: "WCB",
      disc: "WCB",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: "N/A",
    },
    {
      id: 50,
      tagnumber: "#nd",
      valvetype: "Control Valve",
      serailno: "153971580540",
      location: "Surge Line HSD & PMG Behind Pump House",
      make: "Petrol Instrument      ",
      class: "63EG98HM95",
      size: "3'' X 2 ",
      seat: "N/A",
      body: "A216/WCB",
      disc: "WCB-I-13 Cr",
      maxworkingpressure: "As per API 600",

      YEAROFMANUFACTURE: 2016,
    },
    {
      id: 51,
      tagnumber: "#123",
      valvetype: "Control Valve",
      serailno: "1076-4D to 1085-4D",
      location: "Metering Shed",
      make: "Petrol Instrument",
      class: "150 LB",
      size: "4'' X 10 ",
      seat: "N/A",
      body: "WCB",
      disc: "N/A ",
      maxworkingpressure: "150 PSI",

      YEAROFMANUFACTURE: 2018,
    },
  ];

  // the value of the search field
  const [tagnumber, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.tagnumber.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <>
      {/* <div className="divwala">
        <div class="sidebarrchangewala">
          <a class="active" href="#home">
            ADMIN PANEL
          </a>
          <Link to="/showusers">Show Users</Link>
          <Link to="/motorwork">Motor Work</Link>
          <Link to="/valvesview">Valves</Link>
          <Link to="/Gentable">Generators</Link>
          <Link to="/pdmetercard">PD Meters</Link>
          <Link to="/loadingarmscard">Loading Arms</Link>
          <Link to="/Tanksandpiplinescard">Tanks-and-pipelines</Link>
          <Link to="/modify">Modify Your Checklists</Link>
          <Link to="/history">See History</Link>
          <Link to="/ams">AMS</Link>
        </div>
      </div> */}
      <div>
        <div class="container">
          <div>
            <h5>Valves Data </h5>
          </div>
          <table className="striped centered ">
            <tbody>
              <div className="container">
                <input
                  type="search"
                  value={tagnumber}
                  onChange={filter}
                  className="input"
                  placeholder="Search Here"
                />

                <div className="user-list"></div>
              </div>
            </tbody>
          </table>

          <table class=" responsive-table centered highlight ">
            <thead id="headwala">
              <tr>
                <th>ID</th>
                <th className="redkrdo">ASSET NUMBER</th>
                <th>Valve Type</th>
                <th>Serial Number</th>
                <th>Location</th>
                <th>Make</th>
                <th>Class</th>
                <th>Size (Inches)/ Qty</th>
                <th>Seat</th>
                <th>Body</th>
                <th>Disc</th>
                <th>Maximum Working Pressure</th>
                <th>Year of Manufacture</th>
              </tr>
            </thead>

            <tbody class="centered">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="redkrdo">{user.tagnumber}</td>
                    <td>{user.valvetype}</td>
                    <td> {user.serailno}</td>
                    <td>{user.location}</td>
                    <td>{user.make}</td>
                    <td> {user.class}</td>
                    <td> {user.size}</td>
                    <td> {user.seat}</td>
                    <td>{user.body}</td>
                    <td>{user.disc}</td>
                    <td>{user.maxworkingpressure}</td>
                    <td>{user.YEAROFMANUFACTURE}</td>
                  </tr>
                ))
              ) : (
                <h5>No results found!</h5>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="CalBut">
        <Link to="/ams">
          {/* <img src="/calculator.png" /> */}
          {/* <img src="budget.png" /> */}
          <img src="previous.png" />
        </Link>
      </div>
    </>
  );
}
