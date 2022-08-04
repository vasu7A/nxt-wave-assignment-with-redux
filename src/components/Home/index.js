import React from "react";

import ResourceCardComponent from "../ResourceCardComponent";

import {
  Main,
  CustomButton,
  DivForButtons,
  Border,
  Input,
  BorderSearch,
} from "./styledComponent";

import { FaSistrix } from "react-icons/fa";

const Home = () => {
  return (
    <Main>
      <DivForButtons>
        <Border>
          <CustomButton selected>Resource</CustomButton>
          <CustomButton>Request</CustomButton>
          <CustomButton>users</CustomButton>
        </Border>
      </DivForButtons>
      <BorderSearch>
        <FaSistrix
          style={{
            height: "20px",
            width: "20px",
            paddingLeft: "7px",
            backgroundColor: "white",
          }}
        />
        <Input type="input" placeholder="search" />
      </BorderSearch>
      <ResourceCardComponent />
    </Main>
  );
};

export default Home;
