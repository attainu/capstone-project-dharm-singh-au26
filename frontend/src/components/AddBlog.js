import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import { addBlog } from "../apis";
import { createBrowserHistory } from "history";

const AddBlog = () => {
  const history = createBrowserHistory();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setBlogData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("userId");
    if (user) {
      addBlog({
        title: blogData.title,
        description: blogData.description,
        user: user,
        image: blogData.image,
      });
    } else {
      console.log("Something went wrong!S");
    }
    alert("Your blog has been posted, go and share with friends");
    history.push("/myBlogs");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        maxWidth={400}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        margin="auto"
        marginTop={5}
        borderRadius={5}
      >
        <Typography variant="h2" padding={3} textAlign="center">
          Add Blog
        </Typography>

        {
          <TextField
            name="title"
            value={blogData.title}
            onChange={handleChange}
            placeholder="Title"
            margin="normal"
          />
        }
        {
          <TextField
            name="image"
            value={blogData.image}
            onChange={handleChange}
            placeholder="Image Link"
            margin="normal"
          />
        }
        <TextareaAutosize
          name="description"
          value={blogData.description}
          onChange={handleChange}
          placeholder="Description"
          margin="normal"
          style={{ width: 218 }}
          minRows={4}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ borderRadius: 3, marginTop: 3 }}
          color="warning"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default AddBlog;
