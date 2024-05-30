import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../../utils";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as actions from "../../../store/actions";
import {
  updateCart,
  updateStatusCart,
  deleteCart,
} from "../../../services/cartService";
import { FormattedMessage } from "react-intl";
import Empty from "../../../components/Empty";
import Breadcrumb from "../breadcrumb";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  // update cart
  handleUpdateQuantityCart = async (id, quantity) => {
    const res = await updateCart(id, quantity);
    if (res.errCode === 0) {
      const carts = this.props.user.carts.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }
        return item;
      });

      this.props.updateCartSuccess(carts);
    }
  };

  handleUpdateStatusCart = async (id, status) => {
    const res = await updateStatusCart(id, status);
    if (res.errCode === 0) {
      console.log("status", status);
      const carts = this.props.user.carts.map((item) => {
        if (item.id === id) {
          return { ...item, status: status };
        }
        return item;
      });

      this.props.updateCartSuccess(carts);
    }
  };

  handleDeleteCart = async (id) => {
    const res = await deleteCart(id);
    if (res.errCode === 0) {
      const carts = this.props.user.carts.filter((item) => item.id !== id);
      this.props.updateCartSuccess(carts);
    }
  };
  handleCheckout = () => {
    this.props.history.push("/checkout");
  };


  render() {
    const { carts } = this.props.user;
    const {  selectedItems } = this.state;
    const breadcrumbItems = [
      { title: <FormattedMessage id="page.home" />, link: "/", active: false },
      {
        title: <FormattedMessage id="page.cart" />,
        link: "/cart",
        active: true,
      },
    ];
    let total = 0;
    return (
      <>
        <Header pageActive={"Trang chủ"} />
        <Breadcrumb items={breadcrumbItems} />

        {carts && carts.length > 0 ? (
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">
                        <FormattedMessage id="cart.product" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="cart.name" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="cart.price" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="cart.quantity" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="cart.total" />
                      </th>
                      <th scope="col">
                        <FormattedMessage id="cart.handle" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item, index) => (

                      <tr key={index}>
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={item.status === 1}
                            onChange={() =>
                              this.handleUpdateStatusCart(
                                item.id,
                                item.status === 1 ? 0 : 1
                              )
                            }
                          />
                        </th>
                        <td>
                          <img
                            src={`${item.ProductData.Images[0].img}`}
                            alt=""
                            style={{ width: "70px" }}
                          />
                        </td>
                        <td>{item.ProductData.name}</td>
                        <td>{item.ProductData.price}</td>
                        <td>
                          <div
                            className="input-group quantity "
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  this.handleUpdateQuantityCart(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="btn btn-sm btn-minus rounded-circle bg-light border"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <i className="fa fa-minus" />
                              </button>
                            </div>
                            <input
                              value={item.quantity}
                              type="text"
                              className="form-control form-control-sm text-center border-0"
                            />
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  this.handleUpdateQuantityCart(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="btn btn-sm btn-plus rounded-circle bg-light border"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>{item.ProductData.price * item.quantity}</td>

                        <td>
                          <button
                            className="btn btn-danger"
                            style={{ width: "32px", height: "32px" }}
                            onClick={() => this.handleDeleteCart(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>

                    ))}
                  </tbody>
                </table>
              </div>
              <Link className="text-primary-cake read-more" to="/shop">
                <FormattedMessage id="cart.see_products" />
              </Link>
              <div className="row g-4 justify-content-end">
                <div className="col-8" />
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                  <div className="bg-light rounded">
                    <div className="p-4">
                      <h1 className="display-6 mb-4">
                        <span className="fw-normal">
                          {" "}
                          <FormattedMessage id="cart.total" />
                        </span>
                      </h1>
                    </div>
                    <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                      <h5 className="mb-0 me-4">
                        <FormattedMessage id="cart.subtotal" />:
                      </h5>
                      <p className="mb-0">
                        {
                          carts
                              .filter(item => item.status === 1)
                              .reduce((total, item) => total + item.ProductData.price * item.quantity, 0)
                              .toFixed(0)
                        } VND
                      </p>
                    </div>
                    <button
                      className="btn border-secondary btn_checkout"
                      type="button"  onClick={this.handleCheckout}
                    >
                      <FormattedMessage id="cart.order" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Empty message={"Không có sản phẩm nào trong giỏ hàng."} />
        )}
        {/* Cart Page End */}
        <Footer />
      </>
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
    updateCartSuccess: (carts) => {
      dispatch(actions.updateCartSuccess(carts));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
