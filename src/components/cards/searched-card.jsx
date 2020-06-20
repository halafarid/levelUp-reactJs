import React from "react";

const SearchedCard = (props) => {
  return (
    <React.Fragment>
      <div className="search-card">
        <div className="row">
          <div >
            <img className="search-img" src={require("../../images/instructor/photo.jpg")} alt="" />
          </div>
          <div className="col">
            <h6 className="search-name">{props.instructor.fullName}</h6>
            <p className="search-job">{props.instructor.job}</p>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default SearchedCard;