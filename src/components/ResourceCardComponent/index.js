import {
  CardDiv,
  Border,
  CardImage,
  CardBorder,
  CardName,
} from "./sytledComponent";

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
          <p>{tag}</p>
        </div>
      </Border>
      <a href={link}> {link}</a>
      <p>{description}</p>
    </CardDiv>
  );
};

export default ResourceCardComponent;
