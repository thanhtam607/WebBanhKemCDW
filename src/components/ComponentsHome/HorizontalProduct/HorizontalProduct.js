import React, { Component } from "react";
import { connect } from "react-redux";
import "./HorizontalProduct.scss";
import { addCart, getAllCartsByIdUser } from "../../../services/cartService";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
class HorizontalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleAddToCart = async () => {
    if (!this.props.user.isLoggedIn) {
      this.props.history.push("/login");
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

  render() {
    const product = this.props.product;
    return (
      <div className="p-4 rounded bg-light">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              src={product.Images[0].img}
              className="img-fluid rounded-circle w-100"
              alt=""
            />
          </div>
          <div className="col-6">
            <div style={{ height: "42px" }}>
              <Link to={`/product-detail/${product.id}`} className="h5">
                {product.name}
              </Link>
            </div>
            <div className="d-flex my-3">
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star text-primary" />
              <i className="fas fa-star" />
            </div>
            <h4 className="mb-3">
              {product.price}
              <span>vnđ</span>
            </h4>
            <div
              onClick={() => this.handleAddToCart()}
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary" />
              <FormattedMessage id="text.add_cart" />
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

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalProduct);
