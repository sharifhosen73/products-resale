import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SideHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="mt-28 bg-gray-300 h-96 p-3 mr-3">
      <h1 className="text-3xl mb-8">Categories</h1>
      {categories.map((category) => (
        <Link
          style={{ display: "block" }}
          className="text-xl py-2"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default SideHeader;
