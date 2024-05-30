import React, { Component } from "react";
import { connect } from "react-redux";
import "./Shop.scss";
import Breadcrumb from "../breadcrumb";
import Header from "../Header/Header";
import ListProduct from "./listProducts";
import Footer from "../Footer/Footer";
import { FormattedMessage } from "react-intl";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    const breadcrumbItems = [
      { title: <FormattedMessage id="page.home" />, link: "/", active: false },
      {
        title: <FormattedMessage id="page.product" />,
        link: "/shop",
        active: true,
      },
    ];

    return (
      <div>
        <Header pageActive={"Sản phẩm"}> </Header>
        {/* Single Page Header start */}
        <Breadcrumb items={breadcrumbItems} />
        {/* Single Page Header End */}
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Peace Bakery</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input
                        type="search"
                        className="form-control p-3"
                        placeholder="Tìm kiếm"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                  <div className="col-6" />
                  <div className="col-xl-3">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                      <label htmlFor="fruits">Sắp xếp:</label>
                      <select
                        id="fruits"
                        name="fruitlist"
                        className="border-0 form-select-sm bg-light me-3"
                        form="fruitform"
                      >
                        <option value="volvo">Mặc định</option>
                        <option value="saab">Popularity</option>
                        <option value="opel">Organic</option>
                        <option value="audi">Fantastic</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Danh mục loại bánh</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2" />
                                  Apples
                                </a>
                                <span>(3)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2" />
                                  Oranges
                                </a>
                                <span>(5)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2" />
                                  Strawbery
                                </a>
                                <span>(2)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2" />
                                  Banana
                                </a>
                                <span>(8)</span>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <a href="#">
                                  <i className="fas fa-apple-alt me-2" />
                                  Pumpkin
                                </a>
                                <span>(5)</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4 className="mb-2">Giá</h4>
                          <input
                            type="range"
                            className="form-range w-100"
                            id="rangeInput"
                            name="rangeInput"
                            min={0}
                            max={500}
                            defaultValue={0}
                            oninput="amount.value=rangeInput.value"
                          />
                          <output
                            id="amount"
                            name="amount"
                            min-velue={0}
                            max-value={500}
                            htmlFor="rangeInput"
                          >
                            0
                          </output>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Khác</h4>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-1"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-1"> Organic</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-2"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-2"> Fresh</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-3"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-3"> Sales</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-4"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-4"> Discount</label>
                          </div>
                          <div className="mb-2">
                            <input
                              type="radio"
                              className="me-2"
                              id="Categories-5"
                              name="Categories-1"
                              defaultValue="Beverages"
                            />
                            <label htmlFor="Categories-5"> Expired</label>
                          </div>
                        </div>
                      </div>
                      {/*<div className="col-lg-12">*/}
                      {/*  <h4 className="mb-3">Top bán chạy</h4>*/}
                      {/*  <div className="d-flex align-items-center justify-content-start">*/}
                      {/*    <div*/}
                      {/*      className="rounded me-4"*/}
                      {/*      style={{ width: "100px", height: "100px" }}*/}
                      {/*    >*/}
                      {/*      <img*/}
                      {/*        src="img/featur-1.jpg"*/}
                      {/*        className="img-fluid rounded"*/}
                      {/*        alt=""*/}
                      {/*      />*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*      <h6 className="mb-2">Big Banana</h6>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star" />*/}
                      {/*      </div>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <h5 className="fw-bold me-2">2.99 $</h5>*/}
                      {/*        <h5 className="text-danger text-decoration-line-through">*/}
                      {/*          4.11 $*/}
                      {/*        </h5>*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*  <div className="d-flex align-items-center justify-content-start">*/}
                      {/*    <div*/}
                      {/*      className="rounded me-4"*/}
                      {/*      style={{ width: "100px", height: "100px" }}*/}
                      {/*    >*/}
                      {/*      <img*/}
                      {/*        src="img/featur-2.jpg"*/}
                      {/*        className="img-fluid rounded"*/}
                      {/*        alt=""*/}
                      {/*      />*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*      <h6 className="mb-2">Big Banana</h6>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star" />*/}
                      {/*      </div>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <h5 className="fw-bold me-2">2.99 $</h5>*/}
                      {/*        <h5 className="text-danger text-decoration-line-through">*/}
                      {/*          4.11 $*/}
                      {/*        </h5>*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*  <div className="d-flex align-items-center justify-content-start">*/}
                      {/*    <div*/}
                      {/*      className="rounded me-4"*/}
                      {/*      style={{ width: "100px", height: "100px" }}*/}
                      {/*    >*/}
                      {/*      <img*/}
                      {/*        src="img/featur-3.jpg"*/}
                      {/*        className="img-fluid rounded"*/}
                      {/*        alt=""*/}
                      {/*      />*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*      <h6 className="mb-2">Big Banana</h6>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star text-secondary" />*/}
                      {/*        <i className="fa fa-star" />*/}
                      {/*      </div>*/}
                      {/*      <div className="d-flex mb-2">*/}
                      {/*        <h5 className="fw-bold me-2">2.99 $</h5>*/}
                      {/*        <h5 className="text-danger text-decoration-line-through">*/}
                      {/*          4.11 $*/}
                      {/*        </h5>*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*  <div className="d-flex justify-content-center my-4">*/}
                      {/*    <a*/}
                      {/*      href="#"*/}
                      {/*      className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"*/}
                      {/*    >*/}
                      {/*      Vew More*/}
                      {/*    </a>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="col-lg-12">
                        <div className="position-relative">
                          <img
                            src="img/banner-fruits.jpg"
                            className="img-fluid w-100 rounded"
                            alt=""
                          />
                          <div
                            className="position-absolute"
                            style={{
                              top: "50%",
                              right: "10px",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <h3 className="text-yellow text-center fw-bold">
                              Tạo nên
                              <br />
                              sự ngọt ngào
                              <br /> cho mỗi dịp đặc biệt
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ListProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* Fruits Shop End*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
