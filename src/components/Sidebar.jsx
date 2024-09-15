import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "./Sidebar.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className={`category-btn ${category.name === selectedCategory ? 'selected' : ''}`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span className="icon">
          {React.createElement(category.icon)}
        </span>
        <span className="category-name">
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;