import React from "react";

const Category = () => {
  return (
    <>
      <div class="container card">
        <form action="/category/edit/<%= categoryId %>" method="post">
          <h1>Category Name</h1>
          <input type="text" value="category name" name="category" />
          <button type="submit" name="button">
            Update
          </button>
        </form>
        <form action="/category/delete/<%= categoryId %>" method="post">
          <h1>Are you sure you want to delete this category ?</h1>
          <br />
          <button type="submit" class="remove-btn" name="button">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default Category;
