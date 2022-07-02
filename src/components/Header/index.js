import React, { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { routes } from "../../constants";
import Button from "../Button";
import "./style.scss";
export default function Header() {
  const [searchValue, setSearchValue] = useState({});
  const history = useHistory();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleRedirectToSearch = (searchValue) => {
    history.push(
      generatePath(routes.search_task.path, {
        value: searchValue,
      })
    );
  };
  return (
    <>
      <header>
        <Button create />

        <div className="form-search">
          <input
            type={"text"}
            placeholder={"Type something to search"}
            onChange={(e) => handleSearch(e)}
          ></input>
          <Button
            btn
            content="Search"
            onClick={() => handleRedirectToSearch(searchValue)}
          />
        </div>
      </header>
    </>
  );
}
