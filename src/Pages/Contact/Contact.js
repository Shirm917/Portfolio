import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_publicKey
    );

    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
    });

    document.getElementById("contact-form").reset();
  };

  const handleChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value });
  };

  return (
    <div className="contact-form">
      <h1 className="contactTitle">Contact Me</h1>
      <Box
        onSubmit={handleSubmit}
        onChange={handleChange}
        id="contact-form"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "50%",
          alignContent: "center"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ m: 1 }}
          id="user_name"
          name="user_name"
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          sx={{ m: 1 }}
          id="user_email"
          name="user_email"
          type="email"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          sx={{ m: 1 }}
          id="user_message"
          name="user_message"
          label="Message"
          multiline
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </div>
  );
};

export default Contact;
