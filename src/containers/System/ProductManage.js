// import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import {getListProducts} from "../../services/productService";
// class ProductManage extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state= {
//             listProducts:[]
//         }
//     }
//
//     async componentDidMount() {
//         let response = await getListProducts();
//         if(response && response.errCode ===0){
//             this.setState({
//                 listProducts = response.listProducts
//             })
//         }
//     }
//
//
//     render() {
//         return (
//             <div className="text-center" >Manage products</div>
//         )
//     }
//
// }
//
// const mapStateToProps = state => {
//     return {
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
