import React, { Component } from "react";
import { connect } from "react-redux";
import "./SignUp.scss";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="container-form">
        <div className="title">Registration</div>
        <div className="content-form">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>

              <div className="input-box">
                <div className="form-group">
                  <label htmlFor="sel1">Thành Phố:</label>
                  <select className="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="input-box">
                <div className="form-group">
                  <label htmlFor="sel2">Tỉnh:</label>
                  <select className="form-control" id="sel2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="input-box">
                <div className="form-group">
                  <label htmlFor="sel3">Huyện Xã:</label>
                  <select className="form-control" id="sel3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="button">Đăng ký</button>
          </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
