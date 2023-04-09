import React from "react";

const Post = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-6">
          <a href="">
            <div class="card">
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
                  <p>By Author</p>
                </div>
                <div class="col-xs-6 l1-left">
                  <p>Formatted date</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-6 mod-btn">
                  <a href="/edit/<%= components[i+j]._id %>">
                    <button type="button" name="button" class="edit-button">
                      <i class="fa fa-edit"></i>
                    </button>
                  </a>
                </div>
                <div class="col-xs-6">
                  <a href="/delete/<%= components[i+j]._id %>">
                    <button type="button" name="button" class="delete-button">
                      <i class="fa fa-trash"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Post;
