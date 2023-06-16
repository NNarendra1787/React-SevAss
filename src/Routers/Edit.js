import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editData } from "./slice";

// use of uselocation .state then we can access state object which store in perticuler location and the state object we can pass additional data with in different routs and data

function Edit() {
  const dispatch = useDispatch();
  const BigData = useSelector((state) => state.dataKey);

  const nav = useNavigate();

  const locat = useLocation().state.data;

  const currData = {
    name: BigData[locat].name,
    age: BigData[locat].age,
    cource: BigData[locat].cource,
    batch: BigData[locat].batch,
  };

  const handelWithCare = (e) => {
    currData[e.target.name] = e.target.value;
  };

  const Update = () => {
    dispatch(editData({currData, locat}));
    nav(-1);
  };

  const Comeback = () => {
    nav(-1);
  };

  return (
    <div className="myForm">
      <div className="formEle">
        <label>
          Name:
          <input
            name="name"
            onChange={handelWithCare}
            placeholder={BigData[locat].name}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            onChange={handelWithCare}
            placeholder={BigData[locat].age}
          />
        </label>
        <label>
          Cource:
          <input
            name="cource"
            onChange={handelWithCare}
            placeholder={BigData[locat].cource}
          />
        </label>
        <label>
          Batch:
          <input
            name="batch"
            onChange={handelWithCare}
            placeholder={BigData[locat].batch}
          />
        </label>
      </div>
      <div className="myButton">
        <button onClick={Comeback} id="bbbtn">
          Cancle
        </button>
        <button onClick={Update} id="bbtn">
          Update
        </button>
      </div>
    </div>
  );
}

export default Edit;
