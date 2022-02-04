import React from "react";
import { Container, Box, Typography } from "@mui/material";
import headImage from "../assets/silver-plus-header.png";

const Home = (props) => {
    return ( <
        Container component = "main"
        maxWidth = "lg" >
        <
        Box justifyContent = "center"
        width = "auto" >
        <
        Typography gutterBottom variant = "h4"
        component = "h1"
        align = "center" >
        Put your text here { " " } <
        /Typography>{" "} <
        /Box>{" "} <
        Box justifyContent = "center"
        width = "auto" >
        <
        img src = { headImage }
        alt = "header"
        width = { 1024 }
        />{" "} <
        /Box>{" "} <
        /Container>
    );
};

export default Home;