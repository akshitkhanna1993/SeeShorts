import React, { Component } from "react";
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {

      let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
 
    return (
      <div className="my-3">
        <div className="card" style={{height:'20%'}}> 
        <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img
            src={!imageUrl?"https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on { new Date(date).toLocaleDateString}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-secondary">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
