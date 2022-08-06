import { Link } from "react-router-dom";

import {
  CardDiv,
  Border,
  CardImage,
  CardBorder,
  CardName,
  Gray,
} from "./styledComponent";

const ResourceCardComponent = (props) => {
  const { eachFilteredCard, getDetailsPage } = props;
  const { title, icon_url, link, description, category, id } = eachFilteredCard;
  const resourceCardCliked = () => {
    getDetailsPage(id);
  };

  return (
    <Link to={`/resourcepage/${id}`} style={{ textDecoration: "none" }}>
      <CardDiv onClick={() => resourceCardCliked()}>
        <Border>
          <CardBorder>
            <CardImage src={icon_url} alt="icon url" />
          </CardBorder>
          <div>
            <CardName>{title}</CardName>
            <Gray>{category}</Gray>
          </div>
        </Border>
        <a href={link} style={{ color: "#0B69FF", fontWeight: "bold" }}>
          {link}
        </a>
        <Gray>
          {description.length < 40
            ? description
            : description.substring(0, 35) + "..."}
        </Gray>
      </CardDiv>
    </Link>
  );
};

export default ResourceCardComponent;
