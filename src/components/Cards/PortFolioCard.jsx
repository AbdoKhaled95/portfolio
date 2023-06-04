import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, useTheme } from "@mui/material";
import imgMycash from "../../assets/images/mycash.svg";
import imgAgras from "../../assets/images/agras.svg";
import imgMubashir from "../../assets/images/mubashir.svg";
import imgegLas from "../../assets/images/egLas.png";
import imgAlMuhara from "../../assets/images/alMuhara.png";
import imgMarsRover from "../../assets/images/mars-rover.svg";
import imgBakery from "../../assets/images/bakery.png";
import imgYajhz from "../../assets/images/yajhz.png";

function PortFolioCard() {
  const theme = useTheme();
  const { boxShadowColor } = theme?.palette?.custom;
  const projects = [
    {
      img: imgMycash,
      title: "MyCash",
      content:
        "MyCash is a unique and integrated world for your sales management, You only need a smart electronic device to manage your sales with the most appropriate and best solutions within minutes and anywhere",
      link: "https://mycash.sa",
    },
    {
      img: imgAgras,
      title: "Agras",
      content:
        "Agras allow users to buy and sell items through an auction-style bidding system, it is provide a range of tools and features to help users browse and bid on items, communicate with sellers, and track their purchases.",
      link: "https://ajras.sa",
    },
    {
      img: imgMubashir,
      title: "Mobashir",
      content:
        "Mobasher is a website that shows users updated prices of food products and communicates with the merchant via WhatsApp.",
      link: "https://mountasher.online/",
    },
    {
      img: imgegLas,
      title: "EG-LAS",
      content:
        "EG-LAS is a non-profit organization established in 2010. The main goal of EG-LAS is to increase scientific knowledge of the use, care and welfare of laboratory animals in research, testing, education and other scientific activities in Egypt.",
      link: "http://las.emir.life",
    },
    {
      img: imgAlMuhara,
      title: "Al-Mahra",
      content:
        "Al-Mahra activities include holding public auctions for real estate and movables, in addition to real estate marketing, property management and administrative consulting, and providing several diverse and unique real estate services.",
      link: "https://almaharh.com",
    },
    {
      img: imgMarsRover,
      title: "Mars Rover Application",
      content:
        "This is an application that simulates the movement of a rover on the surface of Mars. The rover can move forward, move backward, turn left, and turn right. The application takes a string of commands as input and returns the final position and direction of the rover.",
      link: "https://github.com/AbdoKhaled95/Mars-Rover",
    },
    {
      img: imgBakery,
      title: "Bakery Template",
      content:
        "Bakery is a template for a website built by (www.engage.veented.com/bakery), and I rebuilt it with React.",
      link: "https://github.com/AbdoKhaled95/bakery",
    },
    {
      img: imgYajhz,
      title: "Yajhz",
      content:
        "Yajiz is an landing page website for a mobile application to order goods online, Merchants register through the website.",
      link: "https://github.com/AbdoKhaled95/bakery",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        flexWrap: "wrap",
      }}
    >
      {projects?.map((item, index) => (
        <Card
          sx={{
            width: 350,
            boxShadow: `0 0 15px ${boxShadowColor}`,
          }}
          key={index}
        >
          <CardActionArea
            sx={{ height: "100%" }}
            component="a"
            href={item?.link}
            target="_blank"
          >
            <CardMedia
              component="img"
              height="160px"
              image={item?.img}
              alt=""
              sx={{ bgcolor: "white", objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
export default PortFolioCard;
