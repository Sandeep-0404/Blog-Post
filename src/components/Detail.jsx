import React from "react";

const Detail = () => {
  return (
    <>
      <div class="container">
        <div class="detail-card">
          <h1>Component Name</h1>
          <div class="row">
            <div class="col-xs-6 l1-left">
              <h4>Component Type</h4>
            </div>
            <div class="col-xs-6 l1-left">
              <h4>Component Category</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 l1-left">
              <h4>By Component Author</h4>
            </div>
            <div class="col-xs-6 l1-left">
              <h4>Formated date</h4>
            </div>
          </div>
          <p>Component Description</p>
          <div class="row">
            <div class="col-xs-6 mod-btn">
              <a href="/edit/<%= component._id %>">
                <button type="button" name="button" class="edit-button">
                  <i class="fa fa-edit"></i>
                </button>
              </a>
            </div>
            <div class="col-xs-6">
              <a href="/delete/<%= component._id %>">
                <button type="button" name="button" class="delete-button">
                  <i class="fa fa-trash"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
