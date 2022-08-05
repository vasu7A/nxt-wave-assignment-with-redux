import {
  CardDiv,
  Border,
  CardImage,
  CardBorder,
  CardName,
  Gray,
} from "./styledComponent";

const ResourceCardComponent = () => {
  const resource = {
    title: "Nickelson and Sons",
    icon_url: "http://loremflickr.com/640/480",
    link: "https://gaseous-pod.net",
    description: "Eligendi cum eligendi nemo accusamus natus vero dolor.",
    category: "Automotive",
    tag: "request",
    id: "1",
  };
  const { title, icon_url, link, description, category, tag, id } = resource;
  return (
    <CardDiv>
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
      <Gray>{description}</Gray>
    </CardDiv>
  );
};

export default ResourceCardComponent;
