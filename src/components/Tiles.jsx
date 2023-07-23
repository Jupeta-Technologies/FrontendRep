import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";

const CardItem = ({ title, description, image, customWidth, customHeight }) => (
  <Card sx={{ maxWidth: customWidth, maxHeight: customHeight }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const CardBox = ({ children }) => (
  <Card sx={{ padding: 2 }}>
    <CardContent>{children}</CardContent>
  </Card>
);

const Tiles = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the content for Card 1.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "300px",
      customHeight: "800px",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the content for Card 2.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "300px",
      customHeight: "800px",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the content for Card 3.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "200px",
      customHeight: "300px",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the content for Card 4.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "200px",
      customHeight: "300px",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is the content for Card 5.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "200px",
      customHeight: "300px",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is the content for Card 6.",
      image: "/static/images/cards/contemplative-reptile.jpg",
      customWidth: "200px",
      customHeight: "300px",
    },
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={6}>
        <CardBox>
          <Grid container spacing={3}>
            {cardData.slice(0, 2).map((card) => (
              <Grid item key={card.id} xs={12} sm={6}>
                <CardItem {...card} />
              </Grid>
            ))}
          </Grid>
        </CardBox>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <CardBox>
          <Grid container spacing={3}>
            {cardData.slice(2).map((card) => (
              <Grid item key={card.id} xs={12} md={6}>
                <CardItem {...card} />
              </Grid>
            ))}
          </Grid>
        </CardBox>
      </Grid>
    </Grid>
  );
};

export default Tiles;