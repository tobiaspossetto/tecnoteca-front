import { useState } from "react";

import "./App.css";
import { Computers, ListComputers } from "./pages";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaBeer } from "react-icons/fa";
import { Navbar } from "./globalComponents/Navbar";
import styled from "styled-components";
import { background } from "@chakra-ui/react";
import { Footer } from "./globalComponents/Footer";
import { Avatar } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
        <Provider store={store}>

        
            <div className="App">
                <Navbar />

                {/* <div style={{
    backgroundRepeat: 'no-repeat',
    backgroundSize:"cover",
    backgroundPosition: "bottom",
    backgroundAttachment: "fixed",
    width:"100%", height:"700px", backgroundImage:"url('https://arqa.com/wp-content/uploads/2022/07/sergio-panigo-_71s8307.jpg')"}} /> */}

                <Box sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            boxShadow: 2,
                            borderBottom: 1,
                            borderColor: "divider",
                            backgroundColor: "orange",
                        }}
                    >
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            sx={{ p: "10px" }}
                            aria-label="basic tabs example"
                        >
                            <Tab
                                label="Computadoras"
                                {...a11yProps(0)}
                                sx={{
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                }}
                            />
                            <Tab
                                label="Salas"
                                {...a11yProps(1)}
                                sx={{
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                }}
                            />
                            <Tab
                                label="VR BOX"
                                {...a11yProps(2)}
                                sx={{
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                }}
                            />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Computers />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
                <Footer />
            </div>
            </Provider>
        </>
    );
}

export default App;
