import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./navigation";
import "./Header.scss";
import { languages } from "../../../utils";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getProductsByKeyword } from "../../../services/productService";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      products: [],
    };
  }

  handleChangeLanguage = (language) => {
    this.props.changeLanguage(language);
  };

  handleChangeKeyword = async (keyword) => {
    console.log(keyword);
    keyword = keyword.trim();
    if (keyword === "") {
      this.setState({ products: [] });
    } else {
      const res = await getProductsByKeyword(keyword);
      if (res.errCode === 0) {
        this.setState({ products: res.data });
      }
    }
  };

  render() {
    return (
      <div>
        {/* Navbar start */}
        <div className="container-fluid fixed-top">
          <div className="container topbar bg-primary-cake d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3">
                  <i className="fas fa-map-marker-alt me-2 text-secondary-cake" />{" "}
                  <span className="text-white">
                    Thủ Đức, Thành phố Hồ Chí Minh
                  </span>
                </small>
                <small className="me-3">
                  <i className="fas fa-envelope me-2 text-secondary-cake" />
                  <span className="text-white">tiembanhbinhyen@gmail.com</span>
                </small>
              </div>
              <div className="top-link pe-2">
                {/* // change language VN , En */}
                <div
                  className={`text-white flag  ${
                    this.props.language === languages.VI ? "action" : ""
                  }`}
                >
                  <span onClick={() => this.handleChangeLanguage(languages.VI)}>
                    VN
                  </span>
                </div>
                <div
                  className={`text-white flag  ${
                    this.props.language === languages.EN ? "action" : ""
                  }`}
                >
                  <span onClick={() => this.handleChangeLanguage(languages.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-0">
            <Navigation pageActive={this.props.pageActive} />
          </div>
        </div>
        {/* Navbar End */}
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tìm kiếm{" "}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="col-12 modal-body ">
                <div className=" input-group w-75 mx-auto ">
                  <input
                    type="search"
                    onChange={(e) => this.handleChangeKeyword(e.target.value)}
                    className="form-control p-3"
                    placeholder="Nhập vào từ khóa tìm kiếm..."
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
                <div className=" col-12 w-75 mx-auto">
                  {/* // list product search */}
                  {this.state.products.length > 0 && (
                    <div className="list-product-search">
                      {this.state.products.map((item, index) => {
                        return (
                          <div
                            className="d-flex justify-content-between align-items-center border-bottom py-2"
                            key={index}
                          >
                            <div className="d-flex">
                              <img
                                style={{ width: "50px", height: "50px" }}
                                src={`../${item.Images[0].img}`}
                                className="img-fluid"
                                alt=""
                              />
                              <div className="ms-2">
                                <a href={`/product-detail/${item.id}`}>
                                  <h6 className="mb-0">{item.name}</h6>
                                </a>
                                <p className="mb-0"> {item.price} vnđ</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal ngay End */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // change language
    changeLanguage: (language) => dispatch(actions.changeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
