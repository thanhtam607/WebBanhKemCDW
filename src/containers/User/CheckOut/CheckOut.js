import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./CheckOut.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumb from "../breadcrumb";
import Error from "../../../components/Error/Error";
import {createBill, getCommunes, getDistricts} from "../../../services/billService";
import {deleteCart} from "../../../services/cartService";
import * as actions from "../../../store/actions";
import Swal from 'sweetalert2';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    const {user} = this.props;
    if (!user || !user.userInfo || user.userInfo.id == null) {
      // Chuyển hướng đến trang lỗi nếu id_user là null
      window.location.href = '/error';
      return;
    }
    const {carts, userInfo} = this.props.user;
    const selectedItems = carts.filter(item => item.status === 1);
    const pro_bill = selectedItems.reduce((total, item) => {
      return total + (item.ProductData.price * item.quantity);
    }, 0);
    const billDetail = selectedItems.map(item => ({
      id_product: item.id_product,
      amount: item.quantity,
      notes: '',
      price: item.ProductData.price,
      productname: item.ProductData.name,
      img: item.ProductData.Images[0].img,
    }));

    this.state = {
      listDistricts: [],
      listWards: [],
      selectedPaymentMethod: null,
      error: {},
      district: '',
      city: '',
      ward: '',
      addDetail: '',
      billingInfo: {
        id_user: userInfo.id,
        fullname: '',
        email: '',
        address: '',
        phone_number: '',
        notes: '',
        pro_bill: pro_bill,
        fee_bill: 0,
        payment: 0,
        billDetail: billDetail,
      },
    };
  }

  handlePaymentMethodChange = (method, value) => {

    this.setState({selectedPaymentMethod: method});
    this.setState(prevState => ({
      error: {
        ...prevState.error,
        erSelectPayment: null // Đặt giá trị mới cho erSelectPayment, các trường hợp khác sẽ giữ nguyên
      }
    }));
    this.setState(prevState => ({
      billingInfo: {
        ...prevState.billingInfo,
        payment: value
      }
    }));
  }

  handleChangeInput = async (e, type) => {
    const value = e.target.value
    const keys = type.split('.');
    if (type === "district") {
      this.setState({
        ward: ''
      })
      this.updateAddress()
      const selectedDistricts = e.target.options[e.target.selectedIndex].getAttribute("data-name");
      let response = await getCommunes(selectedDistricts)
      if (response) {
        this.setState({
          listWards: response.results,
        });
      }
    }
    if (keys.length === 1) {

      this.setState({[type]: value}, () => {
        if (type === "addDetail" || type === "ward" || type === "city" || type === "district") {
          this.updateAddress();
        }

      });
      this.checkError(type, value)
    } else if (keys.length === 2) {

      this.setState(prevState => ({
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }))
      this.checkError(type, value)
    } else if (keys.length === 3) {
      this.setState(prevState => ({
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: {
            ...prevState[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }))
    }

  };

  updateAddress = async (e) => {
    this.setState(prevState => ({
      billingInfo: {
        ...prevState.billingInfo,
        address: `${this.state.addDetail}, ${this.state.ward}, ${this.state.district}, ${this.state.city}`
      }
    }));
    this.checkSelect()
  };

  updatedBillDetail = (value, productId) => {
    // Tìm sản phẩm trong mảng chi tiết hóa đơn dựa vào productId
    const updatedBillDetail = this.state.billingInfo.billDetail.map(item => {
      if (item.id_product === productId) {
        // Cập nhật trường note cho sản phẩm tương ứng
        return {...item, notes: value};
      }
      return item;
    });

    // Cập nhật state với mảng chi tiết hóa đơn đã cập nhật
    this.setState(prevState => ({
      billingInfo: {
        ...prevState.billingInfo,
        billDetail: updatedBillDetail,
      },
    }));
  };
  handlePlaceOrder = async () => {
    this.checkInfoNull()
    const errorsNull = Object.values(this.state.error).every(error => error === null);

    if (errorsNull) {
      console.log("gdfh")

      await createBill(this.state.billingInfo);

      this.handleDeleteCart(this.props.user.carts.filter(item => item.status === 1))
      Swal.fire({
        title: "Đặt hàng thành công",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Xem đơn hàng",
        cancelButtonText: "Xem thêm sản phẩm"
      }).then((result) => {
        if (result.isConfirmed) {
          this.props.history.push("/orders");
        }
        else{
          this.props.history.push("/shop");
        }
      });


    }
  }


  handleDeleteCart = async (cartsSelect) => {
    for (const item of cartsSelect) {
      const res = await deleteCart(item.id);

      if (res.errCode === 0) {
        const carts = this.props.user.carts.filter(cart => cart.id !== item.id);
        // console.log(carts)
        this.props.updateCartSuccess(carts);
      }
    }
  }


  async componentDidMount() {
    let response = await getDistricts(79);
    if (response) {
      this.setState({
        listDistricts: response.results,
      });
    }
  }

  render() {
    const selectedItems = this.state.billingInfo.billDetail
    const breadcrumbItems = [
      {title: "Trang chủ", link: "/", active: false},
      {title: "Thanh toán", link: "/checkout", active: true}
    ];
    const {selectedPaymentMethod, error, listDistricts, listWards} = this.state;
    // console.log(listWards)
    return (<div>
          <Header pageActive={"Trang chủ"}/>
          <Breadcrumb items={breadcrumbItems}/>
          {/* Single Page Header End */}
          {/* Checkout Page Start */}
          <div className="container-fluid py-5 bg-checkout">
            <div className="container py-5">
              <h1 className="mb-4">Chi tiết mua hàng</h1>
              <form action="#">
                <div className="row g-5">
                  <div className="col-md-12 col-lg-6 col-xl-7">
                    <div className="form-item">
                      <label className="form-label">Họ tên<sup>*</sup></label>
                      <input type="text" className="form-control" value={this.state.billingInfo.fullname}
                             onChange={(e) =>
                                 this.handleChangeInput(e, "billingInfo.fullname")
                             }/>
                      <Error error={this.state.error.erFullname}/>
                    </div>
                    <div className="form-item">
                      <label className="form-label my-3">Địa chỉ<sup>*</sup></label>
                      <input type="text" className="form-control" placeholder="Số nhà, toà nhà, tên đường..."
                             value={this.state.addDetails}
                             onChange={(e) =>
                                 this.handleChangeInput(e, "addDetail")
                             }/>
                      <Error error={this.state.error.erAddress}/>
                    </div>
                    <div className="form-item">
                      <label className="form-label my-3">Tỉnh/thành phố<sup>*</sup></label>
                      <select className="form-control form-select" value={this.state.city}
                              onChange={(e) =>
                                  this.handleChangeInput(e, "city")
                              }>
                        <option selected={true} value="TP HCM">TP HCM</option>

                        {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                      </select>
                    </div>
                    <div className="form-item">
                      <label className="form-label my-3">Quận/huyện<sup>*</sup></label>
                      <select className="form-control form-select" value={this.state.district}
                              onChange={(e) =>
                                  this.handleChangeInput(e, "district")
                              }>
                        <option value="" disabled selected hidden>Chọn quận/huyện</option>
                        {listDistricts.map((item) => (
                            <option value={item.name} data-name={item.code}>{item.name}</option>
                        ))}


                        {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                      </select>
                      <Error error={this.state.error.erDistrict}/>
                    </div>
                    <div className="form-item">
                      <label className="form-label my-3">Phường/xã<sup>*</sup></label>
                      <select className="form-control form-select" value={this.state.ward}
                              onChange={(e) =>
                                  this.handleChangeInput(e, "ward")
                              }>
                        <option value="" disabled selected hidden>Chọn phường/xã</option>
                        {listWards.map((item) => (
                            <option value={item.name}>{item.name}</option>
                        ))}
                        {/* Thêm các lựa chọn khác tùy thuộc vào nhu cầu của bạn */}
                      </select>
                      <Error error={this.state.error.erWard}/>
                    </div>


                    <div className="form-item">
                      <label className="form-label my-3">Số điện thoại<sup>*</sup></label>
                      <input type="tel" value={this.state.billingInfo.phone_number} className="form-control"
                             onChange={(e) =>
                                 this.handleChangeInput(e, "billingInfo.phone_number")
                             }/>
                      <Error error={this.state.error.erPhone}/>
                    </div>
                    <div className="form-item">
                      <label className="form-label my-3">Email<sup>*</sup></label>
                      <input type="text" className="form-control" value={this.state.billingInfo.email}
                             onChange={(e) =>
                                 this.handleChangeInput(e, "billingInfo.email")
                             }/>
                      <Error error={this.state.error.erEmail}/>
                    </div>
                    <hr/>
                    <div className="form-item">
                      <input type="text" className="form-control" placeholder="Ghi chú cho đơn hàng..."
                             value={this.state.billingInfo.notes}
                             onChange={(e) =>
                                 this.handleChangeInput(e, "billingInfo.notes")
                             }/>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-5">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Tên</th>
                          <th scope="col">Giá</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Tổng cộng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {selectedItems.map((item, index) => (
                            <React.Fragment key={index}>
                              <tr>
                                <th scope="row">
                                  <div className="d-flex align-items-center mt-2">
                                    <img src={item.img} className="img-fluid rounded-circle"
                                         style={{width: '80px', height: '70px', marginTop: '10px'}} alt=""/>
                                  </div>
                                </th>
                                <td className="py-5">{item.productname}</td>
                                <td className="py-5">{item.price}</td>
                                <td className="py-5">{item.amount}</td>
                                <td className="py-5">{item.price * item.amount}</td>
                              </tr>
                              <tr className="border-black">
                                <td colSpan="5">
                                  <div className="form-item">
                                    <input
                                        type="text"
                                        className="form-control no-border"
                                        placeholder="Ghi chú cho từng bánh..."
                                        value={item.notes}
                                        onChange={(e) => this.updatedBillDetail(e.target.value, item.id_product)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </React.Fragment>
                        ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">

                      <div className="col-12">
                        <h4 className="text-primary-cake text-left">Phương thức thanh toán</h4>
                        <div className="form-check text-start my-3">
                          <label className="form-check-label" id="Payments-1">
                            Thanh toán bằng thẻ nội địa
                            <input className="form-check-input bg-primary border-0" htmlFor="Payments-1"
                                   type="radio"
                                   name="paymentMethod"
                                   value="credit_card"
                                   checked={selectedPaymentMethod === 'credit_card'}
                                   onChange={() => this.handlePaymentMethodChange('credit_card', 1)}/>
                          </label>

                        </div>
                        <div className="form-check text-start my-3">
                          <label className="form-check-label" id="Payments-2">
                            Thanh toán khi nhận hàng
                            <input className="form-check-input bg-primary border-0" htmlFor="Payments-2"
                                   type="radio"
                                   name="paymentMethod"
                                   value="cash_on_delivery"
                                   checked={selectedPaymentMethod === 'cash'}
                                   onChange={() => this.handlePaymentMethodChange('cash', 2)}/>
                          </label>

                        </div>
                      </div>
                      <Error error={this.state.error.erSelectPayment}/>

                    </div>
                    <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                      <h4 className="text-primary-cake text-left">Tổng cộng:</h4>
                      <div className="col-12">
                        <div className="flex-container">
                          <p className="flex-item">Thành tiền:</p>
                          <p className="flex-item">{this.state.billingInfo.pro_bill} VND</p>
                        </div>
                        <div className="flex-container">
                          <p className="flex-item">Phí giao hàng:</p>
                          <p className="flex-item">{this.state.billingInfo.fee_bill}
                          </p>
                        </div>
                        <div className="flex-container">
                          <p className="flex-item">Tổng thanh toán:</p>
                          <p className="flex-item">{this.state.billingInfo.pro_bill + this.state.billingInfo.fee_bill} VND</p>
                        </div>


                      </div>
                    </div>
                    <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                      <button type="button" onClick={this.handlePlaceOrder}
                              className="btn bg-primary-cake border-secondary text-uppercase w-100 text-white">Đặt hàng
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Checkout Page End */}
          <Footer/>
        </div>
    )
  }

  checkInfoNull = () => {
    const {fullname, email, phone_number} = this.state.billingInfo;
    const {addDetail, district, ward, selectedPaymentMethod} = this.state;

    const checks = [
      {condition: !fullname, errorKey: 'erFullname', errorMsg: 'Họ tên không được để trống.'},
      {condition: !addDetail, errorKey: 'erAddress', errorMsg: 'Địa chỉ không được để trống.'},
      {condition: !district, errorKey: 'erDistrict', errorMsg: 'Vui lòng chọn quận/huyện.'},
      {condition: !ward, errorKey: 'erWard', errorMsg: 'Vui lòng chọn xã/phường.'},
      {condition: !email, errorKey: 'erEmail', errorMsg: 'Email không được để trống.'},
      {condition: !phone_number, errorKey: 'erPhone', errorMsg: 'Số điện thoại không được để trống.'},
      {
        condition: !selectedPaymentMethod,
        errorKey: 'erSelectPayment',
        errorMsg: 'Vui lòng chọn phương thức thanh toán.'
      }
    ];
    for (let check of checks) {
      if (check.condition) {
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            [check.errorKey]: check.errorMsg
          }
        }));
      }
    }
  };
  checkSelect = () => {
    const {district, ward, address} = this.state;
    if (district) {
      this.setState(prevState => ({
        error: {
          ...prevState.error,
          erDistrict: null,
        }
      }));
    }
    if (ward) {
      this.setState(prevState => ({
        error: {
          ...prevState.error,
          erWard: null,
        }
      }));
    }
  }


  checkError = (type, value) => {

    const errorMessages = {
      'billingInfo.fullname': {
        regex: /^[A-Za-z\sÀ-ỹ]+$/,
        errorMsg: 'Họ tên không hợp lệ.'
      },
      'billingInfo.email': {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMsg: 'Email không đúng định dạng.'
      },
      'billingInfo.phone_number': {
        regex: /^0\d{9}$/,
        errorMsg: 'Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số.'
      },
      'addDetail': {
        regex: /^(?!.*null).*$/,
        errorMsg: 'Địa chỉ không hợp lệ.'
      }

    };
    const fieldInfo = errorMessages[type];
    if (!fieldInfo) return;

    const isValid = value && fieldInfo.regex.test(value);
    let errorKey;
    if (type === 'billingInfo.fullname') {
      errorKey = 'erFullname';
    } else if (type === 'billingInfo.email') {
      errorKey = 'erEmail';
    } else if (type === 'billingInfo.phone_number') {
      errorKey = 'erPhone';
    }
    else if (type === 'addDetail') {
      errorKey = 'erAddress';
    }

      if (!isValid) {

        this.setState(prevState => ({
          error: {
            ...prevState.error,
            [errorKey]: fieldInfo.errorMsg
          }
        }));
      } else {
        // Nếu dữ liệu hợp lệ, đặt error thành null
        this.setState(prevState => ({
          error: {
            ...prevState.error,
            [errorKey]: null
          }
        }));
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
