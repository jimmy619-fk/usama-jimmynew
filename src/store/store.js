import { createStore, combineReducers } from "redux";
// import axios from "axios";
let initial = {
  CurrentUser: {},
  loading: false,
};

let Userlogin = (state = initial, action) => {
  switch (action.type) {
    case "PresentUser":
      state.CurrentUser = action.payload;

      break;
    case "loading":
      state.loading = action.status;
      break;
    case "USER_LOGOUT":
      state.CurrentUser = {};
      localStorage.removeItem("token");
      break;

    // case "ChangingData":
    // console.log("store data", action.payload);

    // axios.post("/ChecklistChangingRecord", {
    //   Data: action.payload,
    // });
    // break;
  }
  //   console.log(state.CurrentUser);

  return state;
};

let totalData = combineReducers({ Userlogin });
let StoreData = createStore(totalData);

export default StoreData;
