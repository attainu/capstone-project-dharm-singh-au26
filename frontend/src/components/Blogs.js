import React, { useState, useEffect } from "react";
import { Blog } from "./Blog";
import { getAllBlogs } from "../apis";

const Blogs = () => {
  const [allBlogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      {allBlogs.length ? (
        allBlogs.map((blog) => {
          return <Blog blog={blog} />;
        })
      ) : (
        <div style={{ margin: "50px" }}>No Blogs as of now</div>
      )}
    </>
  );
};

export default Blogs;
