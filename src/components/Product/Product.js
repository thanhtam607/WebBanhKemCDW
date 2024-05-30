import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart, getAllCartsByIdUser } from "../../services/cartService";
import "./Product.scss";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddToCart = async () => {
    if (!this.props.user.isLoggedIn) {
      return;
    }

    const { product } = this.props;
    const res = await addCart(this.props.user.userInfo.id, product.id, 1);
    if (res.errCode === 0) {
      const resCart = await getAllCartsByIdUser(this.props.user.userInfo.id);
      this.props.addCartSuccess(resCart.data);
    } else {
      alert("Add to cart failed");
    }
  };

  componentDidMount() {}
  render() {
    const product = this.props.product;
    return (
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img
            src={product.Images[0].img}
            style={{ height: "270px" }}
            className="img-fluid w-100 rounded-top"
            alt=""
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          {product.category.name}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom product-name">
          <Link className="text-center " to={`/product-detail/${product.id}`}>
            <h4>{product.name}</h4>
          </Link>

          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              {product.price} <span>vnđ</span>
            </p>
            <div
              onClick={() => this.handleAddToCart()}
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary-cake"></i>{" "}
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
