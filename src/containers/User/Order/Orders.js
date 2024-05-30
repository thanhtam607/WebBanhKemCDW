import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from "../../../components/ComponentOrder/Order";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumb from "../breadcrumb";
import Empty from "../../../components/Empty";
import {getBillByUser} from "../../../services/billService";
import Product from "../../../components/Product/Product";
import {getListProducts} from "../../../services/productService";
import {getDependsOnOwnProps} from "react-redux/lib/connect/wrapMapToProps";


class Orders extends Component {

    constructor(props){
        super(props);

        this.state = {
            listOrders:[]
        }
    }

    async componentDidMount() {
        let response = await getBillByUser(this.props.user.userInfo.id);
        console.log(response)
        if (response && response.errCode === 0) {
            this.setState({
                listOrders: response.data,
            });
        }
    }
    render() {
        const breadcrumbItems = [
            { title: "Trang chủ", link: "/", active: false },
            { title: "Đơn hàng của tôi", link: "/odders", active: true }
        ];
        const {listOrders} = this.state
        console.log(listOrders)
        return (
            <>
            <Header pageActive={"Trang chủ"}/>
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container-91 mx-auto">
                <div className="row">
                    <div className="tab-content-order flex-sm-row mt-2">
                        {listOrders && listOrders.length > 0 ?
                            listOrders.map((item) => (

                                    <Order  order={item} />

                            )):(
                                 <Empty message={"Không có đơn hàng nào"}/>
                            )}



                    </div>
                </div>
            </div>
                <Footer/>
            </>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
