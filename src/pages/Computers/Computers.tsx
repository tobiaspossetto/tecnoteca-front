import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ListComputers } from "./components/ListComputers";
import { ModalComputer } from "./components/ModalComputer";
export interface ComputersInterface {}

const Computers: React.FC<ComputersInterface> = () => {
  return (
    <Stack>
      <Stack direction="row" spacing={4}></Stack>
      <Stack align="center">
        <ModalComputer />
      </Stack>
      <ListComputers />
    </Stack>
  );
};

export default Computers;
