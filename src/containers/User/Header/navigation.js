import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../../utils";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { head } from "lodash";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  // handle click event to show dropdown menu
  handleClickShowDropdown = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const pageActive = this.props.pageActive;
    return (
      <nav className="navbar navbar-light bg-white navbar-expand-xl">
        <Link to={"/"} className="navbar-brand">
          <h1 className="text-primary-cake display-6">Peace Bakery</h1>
        </Link>
        <button
          className="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars text-primary"></span>
        </button>
        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <Link
              to="/"
              className={`nav-item nav-link ${
                pageActive === "Trang chủ" ? "active" : ""
              }`}
            >
              <FormattedMessage id="header.page_home" />
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link ${
                pageActive === "Giới thiệu" ? "active" : ""
              }`}
            >
              <FormattedMessage id="header.page_about_us" />
            </Link>
            <Link
              to="/shop"
              className={`nav-item nav-link ${
                pageActive === "Sản phẩm" ? "active" : ""
              }`}
            >
              <FormattedMessage id="header.page_product" />
            </Link>
            <Link
              to="/contact"
              className={`nav-item nav-link ${
                pageActive === "Liên hệ" ? "active" : ""
              }`}
            >
              <FormattedMessage id="header.page_contact" />
            </Link>
          </div>
          <div className="d-flex m-3 me-0">
            <button
              className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search text-primary"></i>
            </button>
            <Link to={path.CART} className="position-relative me-4 my-auto">
              <i className="fa fa-shopping-bag fa-2x"></i>

              <span
                className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center px-1"
                style={{
                  top: "-5px",
                  left: "15px",
                  height: "20px",
                  minWidth: "20px",
                }}
              >
                {this.props.user.carts ? this.props.user.carts.length : 0}
              </span>
            </Link>
            <div className="my-auto" style={{ position: "relative" }}>
              <div onClick={() => this.handleClickShowDropdown()}>
                <i className="fas fa-user fa-2x"></i>
              </div>
              {/* create a dropdown menu login and register show*/}
              <div
                style={{ position: "absolute", left: "-100px" }}
                className={`dropdown-menu ${this.state.isShow ? "show" : ""}`}
              >
                {this.props.user.isLoggedIn ? (
                  <div>
                    <Link to="/profile" className="dropdown-item">
                      <FormattedMessage id="header.profile" />
                    </Link>
                    <Link to="/orders" className="dropdown-item">
                      Đơn hàng của tôi
                    </Link>
                    <a href="/logout" className="dropdown-item">
                      <FormattedMessage id="header.logout" />
                    </a>
                  </div>
                ) : (
                  <div>
                    <a href="/login" className="dropdown-item">
                      <FormattedMessage id="header.login" />
                    </a>
                    <a href="/register" className="dropdown-item">
                      <FormattedMessage id="header.signin" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
