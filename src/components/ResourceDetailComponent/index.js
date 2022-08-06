import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactTable from "../ReactTable";
import { BsChevronLeft } from "react-icons/bs";
import { FaSistrix } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import SortMenu from "./sortMenu";

import {
  Border,
  CardImage,
  CardName,
  Main,
  ReturnHome,
  ImgDiv,
  Spacing,
  Gray,
  UpdateBtn,
  TableTopSection,
  SearchWithSort,
  BorderSearch,
  Input,
} from "./styledComponent";

const ResourceDetailComponent = () => {
  const resource = useSelector((store) => store.details.resource_details);
  let resourceItem = useSelector((store) => store.details.resource_item);

  const [input, setInput] = useState("");

  return resource.id === undefined ? (
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
    <>
      <Main>
        <Link to="/">
          <ReturnHome>
            <BsChevronLeft />
            <p>Resources</p>
          </ReturnHome>
        </Link>
        <div>
          <Border>
            <ImgDiv>
              <CardImage src={resource.icon_url} alt="icon-url" />
            </ImgDiv>

            <Spacing>
              <CardName>{resource.title}</CardName>
              <Gray>{resource.id}</Gray>
              <a
                href={resource.link}
                target="_blank"
                style={{ color: "#0B69FF", fontWeight: "bold" }}
                rel="noreferrer"
              >
                {resource.link}
              </a>
            </Spacing>
          </Border>
          <Gray>{resource.description}</Gray>
        </div>
        <UpdateBtn>Update</UpdateBtn>

        <TableTopSection>
          <h1>Items</h1>
          <SearchWithSort>
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
                onChange={(event) => setInput(event.target.value)}
              />
            </BorderSearch>
          </SearchWithSort>
          <div>{<SortMenu />}</div>
        </TableTopSection>

        <ReactTable resourceItems={resourceItem} />
      </Main>
    </>
  );
};

export default ResourceDetailComponent;
