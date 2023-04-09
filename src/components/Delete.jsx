import React from "react";

const Delete = () => {
  return (
    <>
      <div class="container">
        <form class="card" action="/delete/<%= componentId %>" method="post">
          <h1>Are you sure you want to delete this component ?</h1>
          <br />
          <button type="submit" class="remove-btn" name="button">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};

export default Delete;
