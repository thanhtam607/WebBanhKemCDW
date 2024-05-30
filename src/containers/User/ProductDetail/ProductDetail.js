import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProductDetail.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  getProductById,
  getAllProductsByIdCategory,
} from "../../../services/productService";
import { addCart, getAllCartsByIdUser } from "../../../services/cartService";
import { getAllCategories } from "../../../services/categorySerive";
import * as actions from "../../../store/actions";
import Breadcrumb from "../breadcrumb";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      categories: [], // Thêm mảng category
      listProduct: [],
      quantity: 1,
    };
  }

  handleAddToCart = async () => {
    if (!this.props.user.isLoggedIn) {
      this.props.history.push("/login");
      return;
    }

    const { product } = this.state;
    const res = await addCart(
      this.props.user.userInfo.id,
      product.id,
      this.state.quantity
    );
    if (res.errCode === 0) {
      const resCart = await getAllCartsByIdUser(this.props.user.userInfo.id);
      this.props.addCartSuccess(resCart.data);
    } else {
      alert("Add to cart failed");
    }
  };

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      let response = await getProductById(id);

      if (response && response.errCode === 0) {
        if (response.product === null) {
          this.props.history.push("/error");
        } else
          this.setState({
            product: response.product,
          });
      }

      // Lấy danh sách category
      let responsecategories = await getAllCategories();
      if (responsecategories && responsecategories.errCode === 0) {
        this.setState({
          categories: responsecategories.data,
        });
      }

      // Lấy danh sách sản phẩm liên quan
      let responseListProduct = await getAllProductsByIdCategory(
        this.state.product.category.id
      );
      if (responseListProduct && responseListProduct.errCode === 0) {
        this.setState({
          listProduct: responseListProduct.data,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handleChangeQuantity = (quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity,
      });
    }
  };

  render() {
    const p = this.state.product;
    console.log("user", this.props.user);

    const breadcrumbItems = [
      { title: <FormattedMessage id="page.home" />, link: "/", active: false },
      {
        title: <FormattedMessage id="page.product" />,
        link: "/shop",
        active: false,
      },
      {
        title: <FormattedMessage id="page.product_detail" />,
        link: "/product-detail",
        active: true,
      },
    ];
    return (
      <div>
        <Header pageActive={"Sản phẩm"}> </Header>
        {/* Single Page Header start */}
        <Breadcrumb items={breadcrumbItems} />
        {/* Single Page Header End */}
        {/* Single Product Start */}
        <div className="container-fluid py-5 mt-5">
          <div className="container py-5">
            <div className="row g-4 mb-5">
              <div className="col-lg-8 col-xl-9">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                      <div className="product__details__pic__item">
                        {p.Images &&
                          p.Images.length > 0 && ( // Kiểm tra nếu mảng tồn tại và không rỗng
                            <img
                              className="product__details__pic__item--large"
                              src={"../" + p.Images[0].img}
                              alt=""
                            />
                          )}
                      </div>
                      <div className="product__details__pic__slider owl-carousel">
                        {p.Images &&
                          p.Images.map((image, index) => (
                            <img
                              key={index}
                              data-imgbigurl={"../" + image.img}
                              src={"../" + image.img}
                              alt=""
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="fw-bold mb-3">{p.name}</h4>
                    {p.category && (
                      <p className="mb-3">
                        <FormattedMessage id="product_detail.category" />:{" "}
                        {p.category.name}
                      </p>
                    )}

                    <h5 className="fw-bold mb-3">{p.price} VND</h5>
                    <div className="d-flex mb-4">
                      <i className="fa fa-star " />
                      <i className="fa fa-star " />
                      <i className="fa fa-star " />
                      <i className="fa fa-star " />
                      <i className="fa fa-star" />
                    </div>
                    <p className="mb-4">{p.introduction}</p>
                    {/*<p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>*/}
                    <div
                      className="input-group quantity mb-5"
                      style={{ width: "100px" }}
                    >
                      <div className="input-group-btn">
                        <button
                          style={{ height: "32px", width: "32px" }}
                          className="btn btn-sm btn-minus rounded-circle bg-light border"
                          onClick={() =>
                            this.handleChangeQuantity(this.state.quantity - 1)
                          }
                        >
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        value={this.state.quantity}
                      />
                      <div className="input-group-btn">
                        <button
                          style={{ height: "32px", width: "32px" }}
                          className="btn btn-sm btn-plus rounded-circle bg-light border"
                          onClick={() =>
                            this.handleChangeQuantity(this.state.quantity + 1)
                          }
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                    <div
                      onClick={() => this.handleAddToCart()}
                      className="btn border-secondary border rounded-pill rounded-pill-atc  px-4 py-2 mb-4 text-primary-cake"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary-cake" />{" "}
                      <FormattedMessage id="product_detail.add_cart" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <nav>
                      <div className="nav nav-tabs mb-3">
                        <button
                          className="nav-link active border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-about"
                          aria-controls="nav-about"
                          aria-selected="true"
                        >
                          Mô tả
                        </button>
                        <button
                          className="nav-link border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-mission-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-mission"
                          aria-controls="nav-mission"
                          aria-selected="false"
                        >
                          Đánh giá
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mb-5">
                      <div
                        className="tab-pane active"
                        id="nav-about"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                      >
                        <p>{p.description}</p>
                        <div className="px-2">
                          <div className="row g-4">
                            <div className="col-6">
                              <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Khối lượng</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">{p.weight}</p>
                                </div>
                              </div>
                              <div className="row text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Kích thước</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">{p.size}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="nav-mission"
                        role="tabpanel"
                        aria-labelledby="nav-mission-tab"
                      >
                        <div className="d-flex">
                          <img
                            src="img/avatar.jpg"
                            className="img-fluid rounded-circle p-3"
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                          />
                          <div className>
                            <p className="mb-2" style={{ fontSize: "14px" }}>
                              April 12, 2024
                            </p>
                            <div className="d-flex justify-content-between">
                              <h5>Jason Smith</h5>
                              <div className="d-flex mb-3">
                                <i className="fa fa-star " />
                                <i className="fa fa-star " />
                                <i className="fa fa-star " />
                                <i className="fa fa-star " />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <p>
                              The generated Lorem Ipsum is therefore always free
                              from repetition injected humour, or
                              non-characteristic words etc. Susp endisse
                              ultricies nisi vel quam suscipit{" "}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <img
                            src="img/avatar.jpg"
                            className="img-fluid rounded-circle p-3"
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                          />
                          <div className>
                            <p className="mb-2" style={{ fontSize: "14px" }}>
                              April 12, 2024
                            </p>
                            <div className="d-flex justify-content-between">
                              <h5>Sam Peters</h5>
                              <div className="d-flex mb-3">
                                <i className="fa fa-star " />
                                <i className="fa fa-star " />
                                <i className="fa fa-star " />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="nav-vision" role="tabpanel">
                        <p className="text-dark">
                          Tempor erat elitr rebum at clita. Diam dolor diam
                          ipsum et tempor sit. Aliqu diam amet diam et eos
                          labore. 3
                        </p>
                        <p className="mb-0">
                          Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                          diam et eos labore. Clita erat ipsum et lorem et sit
                        </p>
                      </div>
                    </div>
                  </div>
                  <form action="#">
                    <h4 className="mb-5 fw-bold">Đánh giá của bạn</h4>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="text"
                            className="form-control border-0 me-4"
                            placeholder="Tên của bạn *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="email"
                            className="form-control border-0"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                          <textarea
                            name
                            id
                            className="form-control border-0"
                            cols={30}
                            rows={8}
                            placeholder="Đánh giá của bạn *"
                            spellCheck="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-3">Đánh giá:</p>
                            <div
                              className="d-flex align-items-center"
                              style={{ fontSize: "12px" }}
                            >
                              <i className="fa fa-star text-muted" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <Link
                            to="#"
                            className="btn border border-secondary text-primary rounded-pill px-4 "
                          >
                            {" "}
                            Gửi đánh giá
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="row g-4 fruite">
                  <div className="col-lg-12">
                    <div className="input-group w-100 mx-auto d-flex mb-4">
                      <input
                        type="search"
                        className="form-control p-3"
                        aria-describedby="search-icon-1"
                      />
                      <span id="search-icon-1" className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4>
                        <FormattedMessage id="text.categories" />
                      </h4>
                      <ul className="list-unstyled fruite-categorie">
                        {this.state.categories &&
                          this.state.categories.map((item, index) => (
                            <li key={index}>
                              <div className="d-flex justify-content-between fruite-name">
                                <Link to="#">{item.name}</Link>
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h4 className="mb-4">
                      <FormattedMessage id="text.outstanding_product" />
                    </h4>
                    {this.state.listProduct &&
                      this.state.listProduct.slice(0, 5).map((item, index) => (
                        <div
                          key={index}
                          className="d-flex align-items-center justify-content-start"
                        >
                          <div
                            className="rounded"
                            style={{ width: "100px", height: "100px" }}
                          >
                            <img
                              style={{ width: "80px", height: "80px" }}
                              src={"../" + item.Images[0].img}
                              className="img-fluid rounded"
                              alt="Image"
                            />
                          </div>
                          <div>
                            <Link
                              to={`/product-detail/${item.id}`}
                              className="mb-2"
                            >
                              {item.name}
                            </Link>
                            <div className="d-flex mb-2">
                              <i className="fa fa-star " />
                              <i className="fa fa-star " />
                              <i className="fa fa-star " />
                              <i className="fa fa-star " />
                              <i className="fa fa-star" />
                            </div>
                            <div className="d-flex mb-2">
                              <h5 className="fw-bold me-2">
                                {item.price} <span>vnđ</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Product End */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartSuccess: (carts) => {
      dispatch(actions.addCartSuccess(carts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
