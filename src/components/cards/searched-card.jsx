import React from "react";

const SearchedCard = () => {
  return (
    <React.Fragment>
      <div className="search-card">
        <div className="row">
          <div >
            <img className="search-img" src={require("../../namrata-parmar.jpg")} alt="" />
          </div>
          <div className="col">
            <h6 className="search-name">bella</h6>
            <p className="search-job">Photographer, Travel Bloger</p>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default SearchedCard;