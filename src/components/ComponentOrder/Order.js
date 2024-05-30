import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderDetail from "./OrderDetail";
import Swal from 'sweetalert2'
import {updateStatusBill} from "../../services/billService";
import StatusBill from "./StatusBill";


class Order extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: this.props.order.status
        }
    }
    formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng tính từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    handleCancelOrder= (id)=>{
        Swal.fire({
            title: "Bạn có chắc chắn muốn hủy đơn hàng?",
            icon: "question",
            confirmButtonText: "OK",
            cancelButtonText: "Thoát",
            showCancelButton: true,
            showConfirmButton: true
        }).then(async (result) => {

            if (result.isConfirmed) {
                const res = await updateStatusBill(id, 2);
                if (res.errCode === 0) {
                    this.setState({status: 2})
                    Swal.fire({
                        title: "Hủy đơn hàng thành công",
                        icon: "success"
                    });
                }
            }
        })

}

    componentDidMount() {
    }
    render() {
        const order = this.props.order;
        return (
            <>
                <div className="my-2 center overflow-hidden">
                    <div className="row">
                        <div className="col-6">
                            <small className="text-secondary d-inline-block pt-3 pl-3">Ngày đặt hàng: </small>
                            <small className="text-secondary d-inline-block pt-3 " style={{ padding: 0, margin: 0 }}
                            >{this.formatDate(order.createdAt)}</small>
                        </div>
                       <StatusBill status={this.state.status}/>
                    </div>
                    <div className="card border-left-0 border-right-0 border-bottom-0 mx-3">

                        {order.billDetailData.map((item)=>(
                            <OrderDetail  orderDetail={item}/>
                            ))}




                    </div>
                    <div className="row mb-2 flex-row-reverse" style={{ marginTop: "6px" }}>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Tổng tiền hàng: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>{order.pro_bill} VND</span>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Phí vận chuyển: </h6>
                                <span className="d-inline" style={{ fontWeight: 400 }}>{order.fee_bill} VND</span>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2 mt-2" style={{ marginTop: "0px" }}>
                        <div className="col-6 pt-2 pb-3">
                            <div className="text-left mr-3">
                                <button type="button" onClick={() => this.handleCancelOrder(order.id)} className="btn text-dark btn-cancel-order">Hủy đơn hàng</button>

                            </div>
                        </div>
                        <div className="col-6 my-2">
                            <div className="text-right pr-5">
                                <h6 className="d-inline text-dark">Tổng thanh toán: </h6>
                                <h3 className="d-inline" style={{ color: "#ee4d2d" }}>{order.pro_bill}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-2">
                        <div className="card-body my-0">
                            <div className="card-text text-dark border-bottom pb-2">
                                <span className=" text-dark">GHI CHÚ CHUNG: {order.notes}</span>
                            </div>
                            <div className="card-text text-dark pt-2">
                                <span className=" text-dark text-uppercase">ĐỊA CHỈ GIAO HÀNG: {order.address}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
