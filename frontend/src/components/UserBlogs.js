import React, { useState, useEffect } from "react";
import { getUserBlogs } from "../apis";
import { Blog } from "./Blog";

const UserBlogs = () => {
  const [userBlog, setUserBlog] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (userId) {
      getUserBlogs(userId).then((blog) => {
        if (blog) setUserBlog(blog);
      });
    }
  }, []);

  return (
    <>
      {userBlog.length ? (
        userBlog.map((blog) => {
          return <Blog blog={blog} />;
        })
      ) : (
        <div style={{ margin: "50px" }}>You have not posted any blog yet</div>
      )}
    </>
  );
};

export default UserBlogs;
