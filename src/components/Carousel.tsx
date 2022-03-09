import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import firstDuck from "../assets/CarouselPictures/firstDuck.jpg";
import secondDuck from "../assets/CarouselPictures/secondDuck.jpg";
import "../App.css";

interface Item {
  image: string;
}

interface Props {
  item: Item;
}

function ShowCarousel() {
  let images = [
    {
      image: firstDuck,
    },
    {
      image: secondDuck,
    },
  ];

  return (
    <Carousel
      interval={2000}
      indicators={false}
      sx={{ width: "70%", height: "700px", margin: "auto" }}
    >
      {images.map((item, i) => (
        <ShowImages key={i} item={item} />
      ))}
    </Carousel>
  );
}

function ShowImages(props: Props) {
  return (
    <Paper style={{ height: "700px", width: "100%" }}>
      <img
        style={{ height: "100%", width: "100%" }}
        src={props.item.image}
        alt=""
      />
    </Paper>
  );
}

export default ShowCarousel;
