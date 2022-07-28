import React, { useState, useEffect } from "react";
import Loader from "./Loader";
// import axios from "axios";
import BlogCard from "./BlogCard";

export default function BlogCategories() {
  const [Blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateBlog = async () => {
    const url = `https://logibricks.com/api/blogCategories`;
    setLoading(true);
    const data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setBlog(parsedData.data);
    console.log(parsedData.data[0]);
    setLoading(false);
  };
  useEffect(() => {
    updateBlog();
  }, []);
  return (
    <div className="container">
      <div className="top-container">
        <h1 className="heading text-centre">Blog Categories</h1>
      </div>
      <div className="container">
      {loading && Loader}
        <div className="row container">
          {Blog && Blog.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <BlogCard
                  src={el.image}
                  title={el.title}
                  desc={el.detail}
                  link={el.slug}
                  key={el.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};