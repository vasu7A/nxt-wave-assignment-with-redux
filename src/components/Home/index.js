import React, { useState } from "react";
import ResourceCardComponent from "../ResourceCardComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterData } from "../Redux/Actions/HomePageAction";
import { FaSistrix } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import { resourceDetails } from "../Redux/Actions/ResourcePageAction";

import {
  Main,
  CustomButton1,
  CustomButton2,
  CustomButton3,
  DivForButtons,
  Border,
  BorderSearch,
  Input,
  UnOrderedList,
} from "./styledComponent";

const Home = () => {
  const [resourceData, setResourceData] = useState([]);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();
  const allResources = useSelector((store) => store.allResources.resources);

  useEffect(() => {
    getResources();
  }, []);

  const getResources = async () => {
    const apiUrl =
      " https://media-content.ccbp.in/website/react-assignment/resources.json";
    const response = await fetch(apiUrl);
    const result = await response.json();
    setResourceData([...result]);
    dispatch(fetchData(result));
  };

  const onToggleTags = (tag) => {
    setTags(tag);
    dispatch(filterData({ data: [...resourceData], tag: tag }));
  };

  const getDetailsPage = async (id) => {
    const data = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    );
    const response = await data.json();
    dispatch(resourceDetails(response));
  };

  return allResources.length < 1 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  ) : (
    <Main>
      <DivForButtons>
        <Border>
          <CustomButton1
            condition={tags === ""}
            onClick={() => onToggleTags("")}
          >
            Resource
          </CustomButton1>
          <CustomButton2
            condition={tags === "request"}
            onClick={() => onToggleTags("request")}
          >
            Request
          </CustomButton2>
          <CustomButton3
            condition={tags === "user"}
            onClick={() => onToggleTags("user")}
          >
            users
          </CustomButton3>
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
        <Input
          type="input"
          placeholder="search"
          onChange={(event) => setSearch(event.target.value)}
        />
      </BorderSearch>
      <UnOrderedList>
        {allResources
          .filter((eachCard) =>
            eachCard.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((eachFilteredCard) => (
            <ResourceCardComponent
              eachFilteredCard={eachFilteredCard}
              key={eachFilteredCard.id}
              getDetailsPage={getDetailsPage}
            />
          ))}
      </UnOrderedList>
    </Main>
  );
};
export default Home;
