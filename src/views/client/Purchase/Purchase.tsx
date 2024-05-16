import {Route, Routes } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import All from "./components/All";
import Pay from "./components/Pay";
import Ship from "./components/Ship";
import Receive from "./components/Receive";
import Completed from "./components/Completed";
import Cancelled from "./components/Cancelled";
import Return from "./components/Return";
import { useEffect } from "react";

const Purchase = ({ setPage }: any) => {
    useEffect(() => {
        setPage("My Purchase");
    },[setPage])
    return (
        <>
            <div className="bg-[#F5F5F5] p-[15px]">
                <ProgressBar></ProgressBar>
                <Routes>
                    <Route path='' element={<All/>} />
                    <Route path='/pay' element={<Pay/>} />
                    <Route path='/ship' element={<Ship/>} />
                    <Route path='/receive' element={<Receive/>} />
                    <Route path='/completed' element={<Completed/>} />
                    <Route path='/cancelled' element={<Cancelled/>} />
                    <Route path='/return' element={<Return/>} />
                </Routes>
                <div className="box-border bg-white mt-[15px] h-[100px]">
                </div>
            </div>
        </>
    );
};

export default Purchase;
