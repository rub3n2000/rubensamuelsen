import React from "react";

import "./Filter.scss";
import Select from "react-select";

const Filter = (props) => {
  let filterdivContent;
  let projects = props.projects;
  const tags = [];

  if (projects !== null && projects !== undefined && Array.isArray(projects)) {
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].tags.length; j++) {
        if (tags.includes(projects[i].tags[j].name) == false) {
          tags.push(projects[i].tags[j].name);
        }
      }
    }
  }

  let options = [];

  if (tags.length != 0 && options.length < 1) {
    for (let i = 0; i < tags.length; i++) {
      options.push({ value: tags[i], label: tags[i] });
    }
  }

  filterdivContent = (
    <div className="FilterDivContent">
      <label>Tags:</label>
      <Select
        placeholder="All tags"
        options={options}
        isMulti
        onChange={props.onFilterChange}
        classNamePrefix="rs"
        className="rs__custom-style"
      />
    </div>
  );

  return <div className={"Filter"}>{filterdivContent}</div>;
};

export default Filter;
