import React from "react";
import Navbar from "../Navbar";

const Admin = () => {
  return (
    <>
      <h1 class="admin-head">Welcome to Admin Panel</h1>
      <div class="container admin-pp admin-pp-img">
        <h1>No components</h1>
      </div>
      <div class="container admin-pp">
        <h1>All Components</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th scope="col">Component Name</th>
              <th scope="col">Type</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Component Name">
                <a href="/detail/<%= components[i]._id %>">Component Name</a>
              </td>
              <td data-label="Type">Component Type</td>
              <td data-label="Category">Component Category</td>
              <td data-label="Date">Formatted Date</td>
              <td data-label="Edit/Delete">
                <div class="row">
                  <div class="col-xs-6 mod-btn">
                    <a href="/edit/<%= components[i]._id %>">
                      <button type="button" name="button" class="edit-button">
                        <i class="fa fa-edit"></i>
                      </button>
                    </a>
                  </div>
                  <div class="col-xs-6">
                    <a href="/delete/<%= components[i]._id %>">
                      <button type="button" name="button" class="delete-button">
                        <i class="fa fa-trash"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="container admin-pp admin-pp-img">
        <h1>No categories</h1>
      </div>
      <div class="container admin-pp">
        <h1>All Categories</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th scope="col">Category Name</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Component Name">Component Name</td>
              <td data-label="Edit/Delete">
                <div class="row">
                  <div class="col-xs-6 mod-btn">
                    <a href="/category/edit/<%= categories[i]._id %>">
                      <button type="button" name="button" class="edit-button">
                        <i class="fa fa-edit"></i>
                      </button>
                    </a>
                  </div>
                  <div class="col-xs-6">
                    <a href="/category/delete/<%= categories[i]._id %>">
                      <button type="button" name="button" class="delete-button">
                        <i class="fa fa-trash"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <form action="/category/add" method="post">
          <input
            type="text"
            name="category"
            value=""
            placeholder="Enter Category"
          />
          <button type="submit" class="btn-primary" name="button">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
