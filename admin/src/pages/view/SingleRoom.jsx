import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleRoom = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data } = useFetch(`/rooms/${id}`);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src={data.photos && data.photos[0]}
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">{data.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{data.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Max People:</span>
                  <span className="itemValue">{data.maxPeople}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{data.desc}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Room Numbers:</span>
                  <span className="itemValue">
                    {data.roomNumbers &&
                      data.roomNumbers.map((room) => room.number) + " , "}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Hotel Name:</span>
                  <span className="itemValue">{data.city}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
