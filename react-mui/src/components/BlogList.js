import React, { useState, useEffect } from "react";
import BlogListItem from "./BlogListItem";
import Pagination from "./Pagination";
import Loader from "./Loader"
import Navbar from "./Navbar";

export default function BlogList(props) {
  const [List, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)

  const getList = async () => {
    const url = `https://logibricks.com/api/blogs/${props.categories}?page=${page}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    setList(parsedData.blogs.data);
    setLoading(false)
    console.log(parsedData.blogs.data);
  };

  const handleNext = async () => {
    setPage(page + 1);
    const url = `https://logibricks.com/api/blogs/${props.categories}?page=${page}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setList(parsedData.blogs.data);
    console.log(parsedData.blogs.data);
    setLoading(false)
    console.log(url);
  };

  const handlePrev = async () => {
   
    setPage(page - 1);
    const url = `https://logibricks.com/api/blogs/${props.categories}?page=${page}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setList(parsedData.blogs.data);
    // console.log(parsedData.blogs.data);
    setLoading(false)
    console.log(url);
  };
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Navbar/>
      <div className="container">
        <h1 className="blog-head text-center">Blog List</h1>
        <div className="container">
        {loading && <Loader/>}
          {List.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <BlogListItem
                  title={el.title}
                  time={el.created_at}
                  desc={el.detail}
                  key={el.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <Pagination next={handleNext} prev={handlePrev} />
        </div>
      </div>
    </>
  );
}
