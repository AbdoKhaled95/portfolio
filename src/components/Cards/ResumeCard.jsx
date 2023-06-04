import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import SectionSubtitle from "../Section/SectionSubtitle";

const ResumeCard = ({ title, items }) => {
  const theme = useTheme();
  const { boxShadowColor } = theme?.palette?.custom;
  return (
    <Box>
      <SectionSubtitle title={title} />
      <Stack spacing={4}>
        {items.map((item, index) => (
          <Card
            sx={{
              p: {
                xs: "2px",
                md: "4px",
                lg: "8px",
                boxShadow: `0 0 15px ${boxShadowColor}`,
                height: 230,
              },
            }}
            key={index}
          >
            <CardContent>
              <Typography
                variant="caption"
                component={"p"}
                sx={{ fontSize: { xs: 12, md: 14, lg: 16 } }}
              >
                {item?.duration}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.main",
                  fontSize: { xs: 12, md: 18, lg: 24 },
                  py: { xs: "4px", md: "6px", lg: "8px" },
                }}
              >
                {item?.cardTitle}
              </Typography>
              <Typography
                variant="caption2"
                component={"p"}
                sx={{ fontSize: { xs: 10, md: 16, lg: 18 } }}
              >
                {item?.cardDescription}
              </Typography>
              <Typography
                variant="caption2"
                component={"p"}
                sx={{
                  fontSize: { xs: 12, md: 16, lg: 18 },
                  py: { xs: "2px", md: "4px", lg: "6px" },
                  fontWeight: 700,
                }}
              >
                {item?.place}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ResumeCard;
