import axios from "axios";

const baseURL = process.env.baseURL || "http://localhost:5000";

const axiosReq = axios.create({
  baseURL,
});

export const userAuth = async (type, inputs) => {
  try {
    const res = await axiosReq.post(`/api/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    });
    return res.data;
  } catch (error) {
    console.log("Login error");
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await axiosReq.get("/api/blog");
    return res.data.blogs;
  } catch (error) {
    console.log("Something went wrong!");
  }
};

export const getUserBlogs = async (userId) => {
  try {
    const res = await axiosReq.get(`/api/blog/user/${userId}`);
    console.log(res.data.user.blogs);
    return res.data.user.blogs;
  } catch (error) {
    console.log("Something went wrong!");
  }
};

export const addBlog = async (blogData) => {
  try {
    await axiosReq.post(`/api/blog/add`, {
      title: blogData.title,
      user: blogData.user,
      description: blogData.description,
      image: blogData.image,
    });
    return "Blog added successfully";
  } catch (error) {
    console.log("Something went wrong!");
  }
};
