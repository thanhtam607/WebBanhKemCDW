import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Product from "../../../components/Product/Product";
import Featurs from "../../../components/ComponentsHome/Featurs/Featurs";
import HorizontalProduct from "../../../components/ComponentsHome/HorizontalProduct/HorizontalProduct";
import { getListProducts } from "../../../services/productService";
import { FormattedMessage } from "react-intl";
class HOME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAllProducts: [],
    };
  }
  shuffleArray(array) {
    // Xáo trộn mảng sử dụng thuật toán Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async componentDidMount() {
    let response = await getListProducts();
    const allProducts = response.listProducts;
    console.log(allProducts);
    this.setState({
      getAllProducts: allProducts,
    });
  }

  render() {
    return (
      <div>
        <Header pageActive={"Trang chủ"}> </Header>

        {/* Hero Start */}
        <div className="container-fluid py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12 col-lg-7">
                <h4 className="mb-3 text-secondary">
                  <FormattedMessage id="barner_home.phrase1" />
                </h4>
                <h1 className="mb-5 display-3 text-primary-cake">
                  <FormattedMessage id="barner_home.phrase2" />
                </h1>
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                    placeholder={`${
                      this.props.language == "vi"
                        ? "Nhập từ khóa tìm kiếm..."
                        : "Enter search keyword..."
                    }`}
                  />
                  <button
                    type="submit"
                    className="btn  btn-cake border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                    style={{ top: 0, right: "25%" }}
                  >
                    <FormattedMessage id="barner_home.search_now" />
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  id="carouselId"
                  className="carousel slide position-relative"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active rounded">
                      <img
                        src="img/hero-img-1.png"
                        className="img-fluid w-100 h-100 bg-secondary rounded"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item rounded">
                      <img
                        src="img/hero-img-2.jpg"
                        className="img-fluid w-100 h-100 rounded"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* <FormattedMessage id="support_home.free_delivery.title" />
   
           
          
            <FormattedMessage id="support_home.support_24_7.title" />
            <FormattedMessage id="support_home.support_24_7.description" /> */}
        {/* Featurs Section Start */}
        <div className="container-fluid featurs py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <Featurs
                  name={
                    <FormattedMessage id="support_home.free_delivery.title" />
                  }
                  description={
                    <FormattedMessage id="support_home.free_delivery.description" />
                  }
                  icon={"fas fa-car-side fa-3x text-white"}
                ></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
                <Featurs
                  name={
                    <FormattedMessage id="support_home.secure_payment.title" />
                  }
                  description={
                    <FormattedMessage id="support_home.secure_payment.description" />
                  }
                  icon={"fas fa-user-shield fa-3x text-white"}
                ></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
                <Featurs
                  name={
                    <FormattedMessage id="support_home.return_support.title" />
                  }
                  description={
                    <FormattedMessage id="support_home.return_support.description" />
                  }
                  icon={"fas fa-exchange-alt fa-3x text-white"}
                ></Featurs>
              </div>
              <div className="col-md-6 col-lg-3">
                <Featurs
                  name={
                    <FormattedMessage id="support_home.support_24_7.title" />
                  }
                  description={
                    <FormattedMessage id="support_home.support_24_7.description" />
                  }
                  icon={"fa fa-phone-alt fa-3x text-white"}
                ></Featurs>
              </div>
            </div>
          </div>
        </div>
        {/* Featurs Section End */}
        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <div className="tab-class text-center">
              <div className="row g-4">
                <div className="col-lg-4 text-start">
                  <h1>
                    {" "}
                    <FormattedMessage id="text.product" />
                  </h1>
                </div>
                <div className="col-lg-8 text-end">
                  <ul className="nav nav-pills d-inline-flex text-center mb-5">
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill active"
                        data-bs-toggle="pill"
                        href="#tab-1"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Ngẫu nhiên
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex py-2 m-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-2"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Bánh hoa
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Bánh trái cây
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-4"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Bánh socola
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-5"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Tất cả
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {this.state.getAllProducts &&
                          this.state.getAllProducts
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 8)
                            .map((item) => (
                              <div className="col-md-6 col-lg-4 col-xl-3">
                                <Product key={item.id} product={item} />
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {this.state.getAllProducts &&
                          this.state.getAllProducts
                            .filter((item) => item.category.name === "Bánh hoa")
                            .slice(0, 8)
                            .map((item) => (
                              <div className="col-md-6 col-lg-4 col-xl-3">
                                <Product key={item.id} product={item} />
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {this.state.getAllProducts &&
                          this.state.getAllProducts
                            .filter(
                              (item) => item.category.name === "Bánh trái cây"
                            )
                            .slice(0, 8)
                            .map((item) => (
                              <div className="col-md-6 col-lg-4 col-xl-3">
                                <Product key={item.id} product={item} />
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {this.state.getAllProducts &&
                          this.state.getAllProducts
                            .filter(
                              (item) =>
                                item.category.name === "Bánh maccaron và socola"
                            )
                            .slice(0, 8)
                            .map((item) => (
                              <div className="col-md-6 col-lg-4 col-xl-3">
                                <Product key={item.id} product={item} />
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        {this.state.getAllProducts &&
                          this.state.getAllProducts
                            .slice(0, 16)
                            .sort(() => Math.random() - 0.5)
                            .map((item) => (
                              <div className="col-md-6 col-lg-4 col-xl-3">
                                <Product key={item.id} product={item} />
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fruits Shop End*/}
        {/* Featurs Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-secondary rounded border border-secondary">
                    <img
                      src="img/hero-img-1.png"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary-cake text-center p-4 rounded">
                        <h5 className="text-white">
                          <FormattedMessage id="barner_home.banner_3_1" />
                        </h5>
                        <h3 className="mb-0">
                          <FormattedMessage id="barner_home.banner_3_2" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-dark rounded border border-dark">
                    <img
                      src="img/hero-img-1.png"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-light text-center p-4 rounded">
                        <h5 className="text-primary-cake">
                          <FormattedMessage id="barner_home.banner_3_3" />
                        </h5>
                        <h3 className="mb-0">
                          <FormattedMessage id="barner_home.banner_3_4" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary-cake rounded border border-primary">
                    <img
                      src="img/hero-img-1.png"
                      className="img-fluid rounded-top w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-secondary text-center p-4 rounded">
                        <h5 className="text-white">
                          <FormattedMessage id="barner_home.banner_3_5" />
                        </h5>
                        <h3 className="mb-0">
                          <FormattedMessage id="barner_home.banner_3_6" />
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section  */}
        <div className="container-fluid banner bg-secondary my-5">
          <div className="container py-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="py-4">
                  <h1 className="display-3 text-white">
                    <FormattedMessage id="barner_home.banner_2_1" />
                  </h1>
                  <p className="fw-normal display-3 text-dark mb-4">
                    <FormattedMessage id="barner_home.banner_2_2" />
                  </p>
                  <p className="mb-4 text-dark">
                    <FormattedMessage id="barner_home.banner_2_3" />
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src="img/baner-1.png"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}

        {/* Bestsaler Product Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "700px" }}
            >
              <h1 className="display-4">
                {" "}
                <FormattedMessage id="text.product_hot" />
              </h1>
            </div>
            <div className="row g-4">
              {this.state.getAllProducts &&
                this.state.getAllProducts
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 6)
                  .map((item) => (
                    <div className="col-lg-6 col-xl-4">
                      <HorizontalProduct
                        key={item.id}
                        product={item}
                      ></HorizontalProduct>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        {/* Bestsaler Product End */}
        <Footer />
        {/* Featurs End */}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HOME);
