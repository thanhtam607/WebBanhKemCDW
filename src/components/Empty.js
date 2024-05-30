import React, { Component } from 'react';
import { connect } from 'react-redux';
class Empty extends Component {

    constructor(props){
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
    }
    render() {
        return (<>
            <div className="cartEmpty" name="cartEmpty">
                <img src="../img/null.png" alt="Giỏ hàng của bạn đang trống" className="d-block m-auto" width="250"/>
                <p className="text-center font-weight-bold" style={{ opacity: 0.6 }}>{this.props.message}</p>
            </div>
        <div className="col-lg-12">
            <div className="shoping__cart__btns"style={{ textAlign: 'center' }}>
                <a href="./shop" className="primary-btn cart-btn">Xem thêm sản phẩm </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Empty);
