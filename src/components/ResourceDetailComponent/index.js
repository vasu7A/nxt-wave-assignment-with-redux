import { Component } from "react";
import Header from "../Header";
import ReactTable from "../ReactTable";
import { BsChevronLeft, BsFilterRight } from "react-icons/bs";
import { FaSistrix } from "react-icons/fa";

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

class ResourceDetailComponent extends Component {
  state = {
    resourceDetails: [],
    isLoading: true,
    searchInput: "",
  };

  componentDidMount() {
    this.getSourceData();
  }

  getSourceData = async () => {
    const apiUrl =
      "https://media-content.ccbp.in/website/react-assignment/resource/1.json";
    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = {
        id: fetchedData.id,
        title: fetchedData.title,
        iconUrl: fetchedData.icon_url,
        link: fetchedData.link,
        description: fetchedData.description,
        resourceItems: fetchedData.resource_items,
      };
      this.setState({
        resourceDetails: updatedData,
        isLoading: false,
      });
    }
  };

  onBasedUserInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput, resourceDetails } = this.state;
    const {
      iconUrl,
      title,
      id,
      link,
      description,
      resourceItems,
    } = resourceDetails;

    return (
      <>
        <Header />
        <Main>
          <ReturnHome>
            <BsChevronLeft />
            <p>Resources</p>
          </ReturnHome>
          <div>
            <Border>
              <ImgDiv>
                <CardImage src={iconUrl} alt="icon-url" />
              </ImgDiv>

              <Spacing>
                <CardName>{title}</CardName>
                <Gray>{id}</Gray>
                <a
                  href={link}
                  target="_blank"
                  style={{ color: "#0B69FF", fontWeight: "bold" }}
                  rel="noreferrer"
                >
                  {link}
                </a>
              </Spacing>
            </Border>
            <Gray>{description}</Gray>
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
                  onChange={this.onBasedUserInput}
                />
              </BorderSearch>
              <BsFilterRight style={{ color: "#171F46", padding: "5px" }} />
              <p>Sort</p>
            </SearchWithSort>
          </TableTopSection>
          <ReactTable resourceItems={resourceItems} />
        </Main>
      </>
    );
  }
}
export default ResourceDetailComponent;
