import React from "react";

const Edit = () => {
  return (
    <>
      <form action="/edit/<%= component._id %>" method="post">
        <div>
          <label class="desc" id="title1" for="Field1">
            Component Name
          </label>
          <div>
            <input
              id="Field1"
              name="name"
              type="text"
              class="field text fn"
              value="Component Namenmdibdw"
              size="8"
              tabindex="1"
              required
            />
          </div>
        </div>

        <div>
          <label class="desc" id="title106" for="Field106">
            Select a Type
          </label>
          <div>
            <select
              id="Field106"
              name="type"
              class="field select medium"
              tabindex="11"
            >
              <option>Application Software</option>
              <option>System Software</option>
            </select>
          </div>
        </div>

        <div>
          <label class="desc" id="title106" for="Field106">
            Select a Category
          </label>
          <div>
            <select
              id="Field106"
              name="category"
              class="field select medium"
              tabindex="11"
            >
              <option>Category Name</option>
            </select>
          </div>
        </div>

        <div>
          <label class="desc" id="title4" for="Field4">
            Description
          </label>

          <div>
            <textarea
              id="Field4"
              name="description"
              spellcheck="true"
              rows="10"
              cols="10"
              tabindex="4"
              required
            >
              Component Description
            </textarea>
          </div>
        </div>

        <div>
          <div>
            <input id="saveForm" name="saveForm" type="submit" value="Update" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Edit;
