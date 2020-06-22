import React from "react";
import { Link } from "react-router-dom";

const SearchedCard = (props) => {
  console.log(props.data._id)
  return (
    <React.Fragment>
      <Link to={`/profile/${props.data._id}`}>

      <div className="search-card">
        <div className="row">
          <div >
            <img className="search-img" src={require("../../images/instructor/photo.jpg")} alt="" />
          </div>
          <div className="col">
            <h6 className="search-name">{props.data[props.searchBy]}</h6>
            {props.searchBy==="fullName"&&<p className="search-job">{props.data.job.title}</p>}
          </div>
        </div>
      </div>
      </Link>

    </React.Fragment>
  );
}

export default SearchedCard;