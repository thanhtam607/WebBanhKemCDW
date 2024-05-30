import React from 'react';
import Product from "../../Product/Product";

const ProductList = ({ products }) => {
    return (
        <div className="row g-4">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            {products && products.map(item => (
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <Product key={item.id} product={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ProductList;