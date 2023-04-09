import React from "react";
import Post from "./Post";

const SearchBody = () => {
  return (
    <>
      <div class="container">
        <form class="search-form" action="/search" method="post">
          <div class="row">
            <div class="col-xs-8 search-bar">
              <input
                type="text"
                name="name"
                value=""
                placeholder="Search Component"
              />
            </div>
            <div class="col-xs-4 author-bar">
              <input
                type="text"
                name="author"
                value=""
                placeholder="Search Author"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-xs-6">
              <select class="dropdown-bar" name="type">
                <option>Select Type</option>
                <option>Application Software</option>
                <option>System Software</option>
              </select>
            </div>
            <div class="col-md-3 col-xs-6">
              <select class="dropdown-bar" name="category">
                <option>Select Category</option>
              </select>
            </div>
            <div class="col-md-3 col-xs-6">
              <select class="dropdown-bar" name="sort">
                <option>Sort By</option>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
            <div class="col-md-3 col-xs-6">
              <button type="submit" name="button" class="search-button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="container">
        <Post />
        <div class="card">
          <h1>No components found</h1>
        </div>
      </div>
    </>
  );
};

export default SearchBody;
