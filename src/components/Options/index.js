import React from "react";
import { FaSearch } from 'react-icons/fa'
import "./style.css";

const Options = ({ searchCards }) => {
  return (
    <div className="optionsWrapper">
      <div className="optionsRow">
                <div className="searchBar">
                    <input className="searchQueryInput" type="text" placeholder="Search" onChange={searchCards}/>
                    <button className="searchQuerySubmit" type="submit">
                        <FaSearch />
                    </button>
                </div>
            </div>
    </div>
  );
};

export default Options;
