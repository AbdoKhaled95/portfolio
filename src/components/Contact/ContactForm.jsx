import React from "react";
import SectionSubtitle from "../Section/SectionSubtitle";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import MainInput from "../Inputs/MainInput";
import contactSchema from "../../assets/formsSchema/contactSchema";
import { Formik } from "formik";
import sendMessage from "../../apis/sendMessage";
import MainButton from "../Buttons/MainButton";

const ContactForm = () => {
  const theme = useTheme();
  const { boxShadowColor } = theme?.palette?.custom;
  const initialValues = {
    email: "",
    name: "",
    phone: "",
    message: "",
  };

  return (
    <Box>
      <SectionSubtitle title={"Send me a message"} />
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => sendMessage(values, actions)}
      >
        {(props) => (
          <Stack spacing={2} component={"form"} onSubmit={props.handleSubmit}>
            <MainInput inputKey="name" placeholder="Your Name" />
            <MainInput inputKey="email" placeholder="Your E-mail" />
            <MainInput inputKey="phone" placeholder="Your Phone" />
            <MainInput
              inputKey="message"
              placeholder="Write a Message"
              multiline
              rows={5}
            />
            {props.isSubmitting ? (
              <CircularProgress />
            ) : (
              <MainButton text={"Send Message"} />
            )}
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
