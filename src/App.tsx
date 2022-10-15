import { useState } from "react";
import {
  Button,
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import "./App.css";
import { Computers } from "./pages";
import { Stack } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";
import { Navbar } from "./globalComponents/Navbar";
function App() {
  return (
    <ChakraProvider>
      <Stack className="App" w='100vw' >
        <Navbar />
        <Tabs pt='30px' align="center" >
          <TabList>
            <Tab>Computadoras</Tab>
            <Tab>Salas</Tab>
            <Tab>VR Box</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
            <Computers />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
       
      </Stack>
    </ChakraProvider>
  );
}

export default App;
