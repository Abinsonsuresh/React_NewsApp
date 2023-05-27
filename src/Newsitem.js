import React, { Component } from "react";

export default class Newsitem extends Component {


  render() {
    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgurl}
            className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">ReadMore</a>
          </div>
        </div>
      </div>
    )
  }
}
