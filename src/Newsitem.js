import React, { Component } from "react";

export default class Newsitem extends Component {


  render() {
    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgurl ? imgurl:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202305/tialakvarma-sixteen_nine.jpg?VersionId=mLEnARZR0_GqzPaVcMvQXaEMk8JJOXZF"}
            className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">ReadMore</a>
          </div>
        </div>
      </div>
    )
  }
}
