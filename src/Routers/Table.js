import React, { } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";

function Table() {
  const BigData =  useSelector((state)=>state.dataKey)
  console.log(BigData);
  const navi = useNavigate();

  return (
    <div>
      <Navbar />
      <div id="topup">
        <h1>Student Details</h1>

        <button
          onClick={() => {
            navi("/addnewone");
          }}
          id="btn"
        >
          Add Student
        </button>
      </div>

      <table className="myTable" border={1}>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="re">Age</th>
            <th className="re">Cource</th>
            <th className="re">Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {BigData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className="cha">{item.age}</td>
              <td className="ch">{item.cource}</td>
              <td className="chb">{item.batch}</td>
              <td className="ch">
                <Link to="/edit" state={{ data: index }}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
