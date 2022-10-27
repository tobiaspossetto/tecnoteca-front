import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ListComputers } from "./components/ListComputers";
import { ListReservas } from "./components/ListReservas";
import { ModalComputer } from "./components/ModalComputer";
import { ModalRequerirCompu } from "./components/ModalRequerirCompu";
export interface ComputersInterface {}

const Computers: React.FC<ComputersInterface> = () => {
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
