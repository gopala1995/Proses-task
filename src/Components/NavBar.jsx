import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { AddUsers } from "./AddUsers";
import { AllUsers } from "./AllUsers";

const NavHead = styled(AppBar)`
  background: #0277bd;
`;
const Tab = styled(Toolbar)`
  font-size: 23px;
  margin-left: 80px;
`;

export const NavBar = () => {
  return (
    <>
      <NavHead position="static">
      <Toolbar>
        <Tab>Username</Tab>
        <Tab>MobileNo</Tab>
        <Tab>Email</Tab>
        <Tab>Address</Tab>
      </Toolbar>
    </NavHead>
    {/* <AddUsers/> */}
    <AllUsers/>
    </>
   
  );
};
