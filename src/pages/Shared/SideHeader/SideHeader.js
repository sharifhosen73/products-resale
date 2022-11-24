import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SideHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div>
      {/* {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))} */}
    </div>
  );
};

export default SideHeader;
