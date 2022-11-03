import { compus, reservasCompus } from "@/data";
import { getComputers } from "@/redux/states";
import { getComputersReservations } from "@/redux/states/computerReserve";
import { Button, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { ListComputers } from "./components/ListComputers";
import { ListReservas } from "./components/ListReservas";
import { ModalComputer } from "./components/ModalComputer";
import { ModalRequerirCompu } from "./components/ModalRequerirCompu";
export interface ComputersInterface {}

const Computers: React.FC<ComputersInterface> = () => {
  //Redux - useDispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComputers(compus))
    dispatch(getComputersReservations(reservasCompus))
},[])
  return (
    <div style={{minHeight: "calc(100vh - 150px - 140px)", width:"100%"}}>
     <div style={{margin:"50px"}}>
      <ModalRequerirCompu/>
     </div>
     <ListReservas/>
      <div  style={{margin:"50px"}}>
        <ModalComputer />
      </div>
      <ListComputers />
      
    </div>
  );
};

export default Computers;
