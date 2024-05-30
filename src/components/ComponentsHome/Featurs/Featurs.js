import React, { Component } from "react";
import { connect } from "react-redux";
import "./Featurs.scss";
class Featurs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="featurs-item text-center rounded bg-light p-4">
        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
          {<i className={this.props.icon} />}
        </div>
        <div className="featurs-content text-center">
          <h5>{this.props.name}</h5>
          <p className="mb-0">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Featurs);
