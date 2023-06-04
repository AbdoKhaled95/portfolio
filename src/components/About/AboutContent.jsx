import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import MainButton from "../Buttons/MainButton";
const details = [
  { title: "Name:", description: "Abdo Khaled" },
  { title: "Job Title:", description: "Front End Developer" },
  { title: "E-mail:", description: "abdokhaled270619@gmail.com" },
  { title: "Age:", description: "28" },
  { title: "Location:", description: "Cairo, Egypt" },
  { title: "Freelance:", description: "Available" },
];
const AboutContent = () => {
  const Details = () => {
    return (
      <>
        <List disablePadding>
          {details.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                disablePadding
                sx={{ fontSize: { xs: 14, md: 16, lg: 18, xl: 20 } }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16, lg: 18, xl: 20 },
                    fontWeight: 700,
                    paddingInlineEnd: "6px",
                    py: { xs: "8px", md: "12px", lg: "16px" },
                  }}
                >
                  {item?.title}
                </Typography>
                {item?.description}
              </ListItem>
              <Divider sx={{ borderBottomWidth: 3 }} />
            </React.Fragment>
          ))}
        </List>
      </>
    );
  };

  return (
    <Box>
      <Grid alignItems={"center"} container spacing={{ xs: 2, xl: 8 }}>
        <Grid item xs={12} lg={8}>
          <Stack spacing={2}>
            <Typography
              variant="h2"
              sx={{ fontSize: { md: 32, lg: 42, xl: 52 } }}
            >
              I'm{" "}
              <Typography
                variant="h2"
                component={"strong"}
                sx={{
                  color: "primary.main",
                  fontSize: { md: 32, lg: 42, xl: 52 },
                }}
              >
                Abdo Khaled,
              </Typography>{" "}
              Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { md: 16, lg: 18, xl: 20 } }}
            >
              Hi, I'm <strong>Abdo Khaled,</strong> a front-end developer with a
              passion for creating beautiful and engaging user experiences, I
              have developed a wide range of skills and expertise that allow me
              to create high-quality websites and applications that meet the
              needs of my clients. <br /> As a front-end developer, I'm
              proficient in a variety of programming languages, frameworks, and
              tools, including (HTML, CSS, JavaScript, TypeScript, React.Js,
              Bootstrap, Material UI, Framer Motion, and many more). I'm always
              eager to learn new skills and stay up-to-date with the latest
              trends and best practices in front-end development.
              <br /> What I love most about front-end development is the ability
              to bring ideas to life and create experiences that users love.
              Whether it's designing a custom layout, optimizing website
              performance, or enhancing user experience, I'm always looking for
              ways to make a positive impact through my work.
              <br /> In addition to my technical skills, I'm also a team player
              with excellent communication skills. I enjoy collaborating with
              designers, back-end developers, and other stakeholders to deliver
              projects on time and within budget. I'm also committed to
              providing exceptional customer service and ensuring that my
              clients are satisfied with the end result.
              <br /> If you're looking for a front-end developer who is
              passionate, skilled, and dedicated to delivering exceptional
              results, please feel free to contact me, I look forward to hearing
              from you.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack spacing={2}>
            <Details />
            <Box
              sx={{
                display: "flex",
                gap: "16px",
              }}
            >
              <MainButton
                text={"Download CV"}
                component={"a"}
                href={
                  "https://drive.google.com/drive/folders/1XIHVJAcpUOU4WjRCdOzuxCGdgG6qI0EQ"
                }
                target="_blank"
              />
              {/* <MainButton text={"Hire Me"} variant="outlined" /> */}

              <SocialLinks />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutContent;
