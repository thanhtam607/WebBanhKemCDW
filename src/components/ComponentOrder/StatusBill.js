import React, { Component } from 'react';
import { connect } from 'react-redux';


class StatusBill extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    getStatus = (status)=>{
        if(status ==1){
            return "Đang chờ duyệt"
        }else if(status ==3){
            return "Đặt hàng thành công"
        }else if(status ==2){
            return "Đã hủy"
        }
    }
    render() {
        const status = this.props.status;
        return ( <div className="col-6 text-right  my-2 pt-2 ">
            <small className="d-inline text-secondary">Trạng thái |</small>
            <div id="statusName<%=r.getId()%>" className="d-inline pr-3 text-uppercase"
                 style={{ color: "#ee4d2d", fontSize: "14px" }}>
                <span>{this.getStatus(status)}</span>
            </div>
        </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(StatusBill);