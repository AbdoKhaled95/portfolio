import { Link, Stack } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const SocialLinks = () => {
  const socialLinks = [
    { link: "https://www.linkedin.com/in/abdo-khaled95", icon: LinkedInIcon },
    { link: "https://github.com/AbdoKhaled95", icon: GitHubIcon },
  ];
  return (
    <Stack direction="row" spacing={2}>
      {socialLinks?.map((socialLink, index) => (
        <Link
          sx={{ display: "flex", alignItems: "center" }}
          key={index}
          target="_blank"
          href={socialLink?.link}
        >
          <socialLink.icon fontSize="large" />
        </Link>
      ))}
    </Stack>
  );
};

export default SocialLinks;
