import { Component } from "react";
import React from "react";
import ResourceCardComponent from "../ResourceCardComponent";
import { FaSistrix } from "react-icons/fa";

import {
  Main,
  CustomButton,
  DivForButtons,
  Border,
  BorderSearch,
  Input,
} from "./styledComponent";

const tabsList = [
  { tabId: "resources" },
  { tabId: "requests" },
  { tabId: "user" },
];

class Home extends Component {
  state = {
    active_tabId: tabsList[0].tabId,
  };

  getResources = async () => {
    const apiUrl =
      " https://media-content.ccbp.in/website/react-assignment/resources.json";
    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedResourceData = {
        title: fetchedData.title,
        iconUrl: fetchedData.icon_url,
        link: fetchedData.link,
        description: fetchedData.description,
        category: fetchedData.category,
        tag: fetchedData.tag,
        id: fetchedData.id,
      };
      this.setState({});
    }
  };

  componentDidMount() {
    this.getResources();
  }
  render() {
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
  }
}
export default Home;
