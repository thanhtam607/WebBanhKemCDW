import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
    const orderDetail = this.props.orderDetail;
    return (
        <>
            <div className="row my-3 pb-3 mx-2" style={{ borderBottom: "1px solid #eee" }}>
                <div className="col-2">
                    <div className="vertical-center">
                        <img className="d-block mx-auto" src={orderDetail.ProductData.Images[0].img} width="100" />
                    </div>
                </div>
                <div className="col-7">
                    <div className="card-body my-0">
                        <div className="card-text text-dark">
                            <a href="#" className="text-decoration-none text-dark text-uppercase">
                                {orderDetail.ProductData.name}
                            </a>
                        </div>
                        <div className="text-dark" style={{ fontSize: "14px" }}
                        >x {orderDetail.amount}</div>
                        <div className="text-dark" style={{ fontSize: "14px" }}>Ghi chú cho bánh: {orderDetail.notes}</div>
                    </div>
                </div>
                <div className="col-3 mt-3">
                    <small className="text-dark">{orderDetail.price} VND</small>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);