import React, { Component } from "react";
import loading from "./loading.gif";
export class Spinner extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="text-center">
        <img  style={{height:"60px",width:"60px"}} className="my-3" src={loading} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
