import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./compoents/login/login";
import Typemaintainance from "./compoents/Type_of_maintainance/typemaintainance";
import Header from "./compoents/header/header";

import Slider from "./compoents/slider/slider";
import Cards from "./compoents/cards/cards";   
import Equipments from "./compoents/equipmets/equipmets";
import Equipments2 from "./compoents/equipments2/equipments2";
import Aboutus from "./compoents/aboutus/aboutus";
import Admin from "./compoents/admin/admin";
import Contactus from "./compoents/contactus/contactus";
import { AdminDashboard } from "./compoents/AdminDashboard/AdminDashboard";
import Preventive from "./compoents/preventive/preventive";
import Motorms from "./compoents/motorMStable/motorms.js";
import Footer from "./compoents/footer/footer";
import Showusers from "./compoents/AdminDashboard/Showusers";
import Selectmotortoview from "./compoents/AdminDashboard/Selectmotortoview";
import Showmsddata from "./compoents/AdminDashboard/Showmsddata";
import Showhsddata from "./compoents/AdminDashboard/Showhsddata";
import Valvestable from "./compoents/Valvestable/Valvestable";
import ValvestableServer from "./compoents/AdminDashboard/Valvestable";
import Selectvalvesview from "./compoents/AdminDashboard/Selectvalvsview";
import Valveshsddata from "./compoents/AdminDashboard/Valvesviewhsddata";
import Valvesmsdsddata from "./compoents/AdminDashboard/Valvesviewmsddata";
import Generator from "./compoents/Generator/Generator";
import Gentable from "./compoents/AdminDashboard/Generatortableshow";
import Gendata from "./compoents/AdminDashboard/Gendata";
import Pdmeters from "./compoents/PD METERS/Pdmeters";
import LoadingArms from "./compoents/LoadinArms/LoadingArms";
import Tanksandpipelines from "./compoents/TANKS&PIPELINES/Tanksandpipelines";
import PDmeterscardshow from "./compoents/AdminDashboard/PDmetercardshow";
import PDmeterdata from "./compoents/AdminDashboard/PDmeterdata";
import Loadigarmscard from "./compoents/AdminDashboard/Loadingarmscard";
import Loadigarmsdata from "./compoents/AdminDashboard/Loadingarmsdata";
import Tanksandpipelinescard from "./compoents/AdminDashboard/Taksandpipelinescard";
import Tanksandpipelinesdata from "./compoents/AdminDashboard/Tanksandpipelinesdata";
import Showmotordecantingdata from "./compoents/AdminDashboard/Showmotordecantingdata";
import { Modifypage } from "./compoents/ModifyChecklists/MOdifyPage";
import Modifymotorandpump from "./compoents/ModifyChecklists/ModifyMotorandpump";
import ModifyValvestable from "./compoents/ModifyChecklists/Modifyvalves";
import Modifygenerator from "./compoents/ModifyChecklists/Modifygen";
import Modifytanksandpipelines from "./compoents/ModifyChecklists/Modifytanksandpipelines";
import Modifyloadingarms from "./compoents/ModifyChecklists/Modifyloadingarms";
import Modifypdmeter from "./compoents/ModifyChecklists/Modifypdmeter";
import Historydata from "./compoents/AdminDashboard/History";
import Showmotorandpumphistory from "./compoents/AdminDashboard/Showmotorandpumphistory";
import Showloadingarmhistory from "./compoents/AdminDashboard/ShowLoadigarmhistory";
import Showgeneratorhistory from "./compoents/AdminDashboard/Showgeneratorhistory";
import Showtankandpipelineshistory from "./compoents/AdminDashboard/Showtankandpipelinehistory";
import Showvalveshistory from "./compoents/AdminDashboard/Showvalveshistory";
import Showpdmeterhistory from "./compoents/AdminDashboard/Showpdmeterhistory";
import Firepumps from "./compoents/Firepumps/Firepumps";
import Firepumpsss from "./compoents/Firepumps/Firepumps";
import Showfirepumpshistory from "./compoents/AdminDashboard/Showfirepumpshistory";
import Firepumpcard from "./compoents/AdminDashboard/Firepumpscard";
import Firepumpdata from "./compoents/AdminDashboard/Firepumpdata";
import Modifyfirepump from "./compoents/ModifyChecklists/Modifyfirefump";
import Amsequipments from "./compoents/AdminDashboard/Amsequipments";
import TanksASMdata from "./compoents/AdminDashboard/TanksASMdata";
import MotorandpumpsASMdata from "./compoents/AdminDashboard/Motorandpumpasmdata";
import GeneratorASMdata from "./compoents/AdminDashboard/GeneratorsASMdata";
import Firepumpchecklistt from "./compoents/Firepumps/Firepumpchecklist";
import LoadingarmsASMdata from "./compoents/AdminDashboard/LoadingarmsAsmdata";
import ValvesASMdata from "./compoents/AdminDashboard/ValveASMdata";
import PdmeterASMdata from "./compoents/AdminDashboard/PdmeterASMdata";
import FirepumpsASMdata from "./compoents/AdminDashboard/firepumpsASMdata";
import Greasingcal from "./compoents/GreasigCalculator/Greasingcal";
import Ouncing from "./compoents/Ouncingcalculation/Ouncingcalculation";
import UpCommingPopUp from "./compoents/UpCommingPopUp/UpCommingPopUp";
import { useSelector } from "react-redux";
import StoreData from "../src/store/store";
import axios from "axios";
import CalculatorCard from "./compoents/CalculatorCard/CalculatorCard";
import RuntoFailures from "./compoents/RuntoFailures/RuntoFailures";
import SuggestionandFeedback from "./compoents/RuntoFailures/SuggestionandFeedback/SuggestionandFeedback";
import EquipmentFailure from "./compoents/RuntoFailures/EquipmentFailure/EquipmentFailure";
import AdminSuggestionShowing from "./compoents/AdminDashboard/AdminSuggestionShowing";
import EquipmentFailuresShowing from "./compoents/AdminDashboard/EquipmentFailuresShowing";
import InventoryCard from "./compoents/AdminDashboard/InventoryCard";
import TotalProductInInventory from "./compoents/AdminDashboard/TotalProductInInventory";

import MonthExpire from "./compoents/AdminDashboard/MonthExpire";
import AddInventory from "./compoents/AdminDashboard/AddInventory";
import WithdrawInventory from "./compoents/AdminDashboard/WithdrawInventory";
import DeleteInventory from "./compoents/AdminDashboard/DeleteInventory";
import HistoryInventory from "./compoents/AdminDashboard/HistoryInventory";
import InventoryQuantityZero from "./compoents/AdminDashboard/InventoryQuantityZero";
import InventoryWithQuantityZerolist from "./compoents/AdminDashboard/InventoryWithQuantityZerolist";
import InventoryQuantityZeroAddUp from "./compoents/AdminDashboard/InventoryQuantityZeroAddUp";
import InventoryDeleteHistory from "./compoents/AdminDashboard/InventoryDeleteHistory";
import InventoryWithdrawHistory from "./compoents/AdminDashboard/InventoryWithdrawHistory";
import InventoryInstalleditem from "./compoents/AdminDashboard/InventoryInstalleditem";
import CreateNewUsers from "./compoents/AdminDashboard/AdminCreateNewUsers";
import Headerofadmin from "./compoents/header/headerofadmin";

export default function App() {
  let Dats = useSelector((comming) => {
    return comming.Userlogin.CurrentUser;
  });

  useEffect(() => {
    StoreData.dispatch({
      type: "UPDATE_LOADING",
      status: true,
    });

    axios
      .post("/session-check", { token: localStorage.getItem("token") })
      .then((resp) => {
        StoreData.dispatch({
          type: "UPDATE_LOADING",
          status: false,
        });

        if (resp.data) {
          StoreData.dispatch({
            type: "PresentUser",
            payload: resp.data,
          });
        } else {
          StoreData.dispatch({
            type: "USER_LOGOUT",
            payload: resp.data,
          });
        }
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/typemaintainance"
            element={
              <>
                <Header></Header>
                <Slider></Slider>
                {/* <Cards></Cards> */}
                <Typemaintainance />
                <Aboutus />
                {/* <Contactus /> */}
                <Footer />
              </>
            }
          />
          <Route path="/slider" element={<Slider />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/admin12" element={<Admin />} /> */}
          {/* <Route path="/contact" element={<Contactus />} /> */}
          <Route
            path="/admin"
            element={
              <>
                {/* <Header></Header> */}
                <Headerofadmin />
                <AdminDashboard />
              </>
            }
          />
          <Route path="/pre" element={<Preventive />} />
          <Route
            path="/equipments"
            element={
              <>
                <Header />
                <Equipments2 />
              </>
            }
          />
          <Route
            path="/equipments2"
            element={
              <>
                <Header />
                <Equipments2 />
              </>
            }
          />
          <Route
            path="/motorms"
            element={
              <>
                <Header />
                <Motorms />
              </>
            }
          ></Route>
          <Route
            path="/footer"
            element={
              <>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/showusers"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showusers />
              </>
            }
          ></Route>
          <Route
            path="/motorwork"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Selectmotortoview />
              </>
            }
          ></Route>
          <Route
            path="/showmsddata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showmsddata />
              </>
            }
          ></Route>
          <Route
            path="/showhsddata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showhsddata />
              </>
            }
          ></Route>
          <Route
            path="/valves"
            element={
              <>
                <Header />
                <ValvestableServer />
              </>
            }
          ></Route>
          <Route
            path="/valvesview"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Selectvalvesview />
              </>
            }
          ></Route>
          <Route
            path="/valveshsddata"
            element={
              <>
                <Header />
                <Valveshsddata />
              </>
            }
          ></Route>
          <Route
            path="/valvesmsddata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Valvesmsdsddata />
              </>
            }
          ></Route>
          <Route
            path="/Valvestable"
            element={
              <>
                <Header />
                <Valvestable />
              </>
            }
          ></Route>
          <Route
            path="/Generatorquestions"
            element={
              <>
                <Header />
                <Generator />
              </>
            }
          ></Route>
          <Route
            path="/Gentable"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Gentable />
              </>
            }
          ></Route>
          <Route
            path="/Gendata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Gendata />
              </>
            }
          ></Route>
          <Route
            path="/pdmeter"
            element={
              <>
                <Header />
                <Pdmeters />
              </>
            }
          ></Route>
          <Route
            path="/loadingarms"
            element={
              <>
                <Header />
                <LoadingArms />
              </>
            }
          ></Route>
          <Route
            path="/tanksandpipelines"
            element={
              <>
                <Header />
                <Tanksandpipelines />
              </>
            }
          ></Route>
          <Route
            path="/pdmetercard"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <PDmeterscardshow />
              </>
            }
          ></Route>
          <Route
            path="/pdmeterdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <PDmeterdata />
              </>
            }
          ></Route>
          <Route
            path="/loadingarmscard"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Loadigarmscard />
              </>
            }
          ></Route>
          <Route
            path="/Loadingarmsdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Loadigarmsdata />
              </>
            }
          ></Route>
          <Route
            path="/Tanksandpiplinescard"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Tanksandpipelinescard />
              </>
            }
          ></Route>
          <Route
            path="/tanksandpipelinesdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Tanksandpipelinesdata />
              </>
            }
          ></Route>
          <Route
            path="/showmotordecantingdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showmotordecantingdata />
              </>
            }
          ></Route>
          <Route
            path="/aboutuss"
            element={
              <>
                <Header />
                <Aboutus />
              </>
            }
          ></Route>
          <Route
            path="/modify"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifypage />
              </>
            }
          ></Route>
          <Route
            path="/modifymotorandpump"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifymotorandpump />
              </>
            }
          ></Route>
          <Route
            path="/modifyvalves"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <ModifyValvestable />
              </>
            }
          ></Route>
          <Route
            path="/modifygen"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifygenerator />
              </>
            }
          ></Route>
          <Route
            path="/modifytanksandpipelines"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />

                <Modifytanksandpipelines />
              </>
            }
          ></Route>
          <Route
            path="/modifyloadingarms"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifyloadingarms />
              </>
            }
          ></Route>
          <Route
            path="/modifypdmeter"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifypdmeter />
              </>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Historydata />
              </>
            }
          ></Route>
          <Route
            path="/showmotorandpumphistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showmotorandpumphistory />
              </>
            }
          ></Route>
          <Route
            path="/showloadingarmhistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showloadingarmhistory />
              </>
            }
          ></Route>
          <Route
            path="/showgeneratorhistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showgeneratorhistory />
              </>
            }
          ></Route>
          <Route
            path="/showtankandpipelineshistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showtankandpipelineshistory />
              </>
            }
          ></Route>
          Showvalveshistory
          <Route
            path="/showvalveshistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showvalveshistory />
              </>
            }
          ></Route>
          <Route
            path="/showpdmeterhistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showpdmeterhistory />
              </>
            }
          ></Route>
          <Route
            path="/fire"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Firepumpsss />
              </>
            }
          ></Route>
          <Route
            path="/showfirepumpshistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Showfirepumpshistory />
              </>
            }
          ></Route>
          <Route
            path="/firepumpcard"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Firepumpcard />
              </>
            }
          ></Route>
          <Route
            path="/firepumpdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Firepumpdata />
              </>
            }
          ></Route>
          <Route
            path="/modifyfirepump"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Modifyfirepump />
              </>
            }
          ></Route>
          <Route
            path="/ams"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Amsequipments />
              </>
            }
          ></Route>
          <Route
            path="/tanksasmdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <TanksASMdata />
              </>
            }
          ></Route>
          <Route
            path="/motorandpumpsASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <MotorandpumpsASMdata />
              </>
            }
          ></Route>
          <Route
            path="/generatorASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <GeneratorASMdata />
              </>
            }
          ></Route>
          <Route
            path="/firepumpchecklistt"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <Firepumpchecklistt />
              </>
            }
          ></Route>
          <Route
            path="/loadingarmsASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <LoadingarmsASMdata />
              </>
            }
          ></Route>
          <Route
            path="/valvesASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <ValvesASMdata />
              </>
            }
          ></Route>
          <Route
            path="/pdmeterASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <PdmeterASMdata />
              </>
            }
          ></Route>
          <Route
            path="/firepumpASMdata"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <FirepumpsASMdata />
              </>
            }
          ></Route>
          <Route
            path="/greasingcal"
            element={
              <>
                <Header />
                <Greasingcal />
              </>
            }
          ></Route>
          <Route
            path="/ouncing"
            element={
              <>
                <Header />
                <Ouncing />
              </>
            }
          ></Route>
          <Route
            path="/CommingSoon"
            element={
              <>
                <Header />
                <UpCommingPopUp />
              </>
            }
          ></Route>
          <Route
            path="/Calculator"
            element={
              <>
                <Header />
                <CalculatorCard />
              </>
            }
          ></Route>
          {/* Run to Failures */}
          <Route
            path="/RuningToFailures"
            element={
              <>
                <Header />
                <RuntoFailures />
              </>
            }
          ></Route>
          {/* Suggestion */}
          <Route
            path="/Suggestion"
            element={
              <>
                <Header />
                <SuggestionandFeedback />
              </>
            }
          ></Route>
          {/* EquipmentFailure */}
          <Route
            path="/Failure"
            element={
              <>
                <Header />
                <EquipmentFailure />
              </>
            }
          ></Route>
          <Route
            path="/AdSugg"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <AdminSuggestionShowing />
              </>
            }
          ></Route>
          <Route
            path="/AdmFail"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <EquipmentFailuresShowing />
              </>
            }
          ></Route>
          <Route
            path="/ADinvent"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryCard />
              </>
            }
          ></Route>
          <Route
            path="/totalPro"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <TotalProductInInventory />
              </>
            }
          ></Route>
          <Route
            path="/expire"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <MonthExpire />
              </>
            }
          ></Route>
          <Route
            path="/addPro"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <AddInventory />
              </>
            }
          ></Route>
          <Route
            path="/remo"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <WithdrawInventory />
              </>
            }
          ></Route>
          <Route
            path="/del"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <DeleteInventory />
              </>
            }
          ></Route>
          <Route
            path="/histo"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <HistoryInventory />
              </>
            }
          ></Route>
          <Route
            path="/QuanZero"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryQuantityZero />
              </>
            }
          ></Route>
          <Route
            path="/QuantityZerolist"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryWithQuantityZerolist />
              </>
            }
          ></Route>
          <Route
            path="/QuantityZeroAddUp"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryQuantityZeroAddUp />
              </>
            }
          ></Route>
          <Route
            path="/DeleHistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryDeleteHistory />
              </>
            }
          ></Route>
          <Route
            path="/WithDraHistory"
            element={
              <>
                {/* <Header /> */}
                <Headerofadmin />
                <InventoryWithdrawHistory />
              </>
            }
          ></Route>
          <Route
            path="/Installed"
            element={
              <>
                <Headerofadmin />
                {/* <Header /> */}
                <InventoryInstalleditem />
              </>
            }
          ></Route>{" "}
          <Route
            path="/Create"
            element={
              <>
                <Headerofadmin />
                {/* <Header /> */}
                <CreateNewUsers />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
