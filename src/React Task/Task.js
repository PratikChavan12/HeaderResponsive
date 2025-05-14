import React, { useState } from "react";
import img1 from "../assets/images/logo192.png";
import { data } from "./TaskData";

const Task = () => {
  const [updatedCost, setUpdatedCost] = useState(8);
  const [updatedCostId, setUpdatedCostId] = useState(null);
  const [rentBtn, setRentBtn] = useState(false);
  const [rentBtnId, setRentBtnId] = useState(null);
  
  const handleBuyClick = (id, data) => {
    const cost = parseInt(data.cost);
    if (updatedCost && cost < updatedCost) {
      const finalCost = updatedCost - cost;
      setUpdatedCost(finalCost);
    } else if (updatedCost && cost === updatedCost) {
      setUpdatedCost(1);
    }
    setRentBtn(true);
    if (id) setRentBtnId(id);
  };

  const handleRent = (data, id) => {
    console.log(id);
    console.log(data);
    let rent = parseInt(data.rent);
    let cost = parseInt(data.cost);
    const updatedcost = updatedCostId === id ? updatedCost : cost;
    const finalCost = updatedcost + rent;
    setUpdatedCost(finalCost);
    setUpdatedCostId(id);
    console.log(updatedCost, data.level, rent, id);
  };

  return (
    <>
      <div
        className="bg-dark d-flex flex-column align-items-center"
        style={{ height: "680px" }}
      >
        <div
          className="border border-info mt-1 d-flex align-items-center justify-content-center px-2 py-2"
          style={{ width: "600px", height: "80px" }}
        >
          <input
            type="text"
            value={updatedCost}
            disabled
            className="w-75 text-white text-center"
            style={{ border: "2px solid pink", backgroundColor: "transparent" }}
          />
          <button className="btn btn-light w-25">Save</button>
        </div>
        <div
          className="border border-info mt-2 h-full p-4 overflow-auto"
          style={{ width: "600px" }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="row border border-success py-2 my-3"
              style={{ height: "120px" }}
            >
              <div className="col-2">
                <img
                  src={img1}
                  alt=""
                  className="object-fit-cover"
                  style={{ height: "75px" }}
                />
              </div>
              <div className="col-8">
                <label className="fs-6 text-white text-center">
                  <label className="fs-6 text-white text-center">
                    {JSON.stringify({
                      cost:
                        updatedCost && updatedCostId === item.time
                          ? updatedCost
                          : item.cost,
                      level: item.level,
                      rent: item.rent,
                      time: item.time,
                    })}
                  </label>
                </label>
                <div className="w-full">
                  <progress
                    max={item.time}
                    value={0}
                    className=""
                    style={{ width: "75%" }}
                  ></progress>
                </div>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary w-100 my-1"
                  disabled={updatedCost < item.cost}
                  onClick={() => handleBuyClick(item.time, item)}
                >
                  Buy
                </button>
                <button
                  className={`btn btn-danger w-100 my-1 ${
                    rentBtnId === item.time ? "" : "d-none"
                  }`}
                  onClick={() => handleRent(item, item.time)}
                >
                  Rent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Task;
