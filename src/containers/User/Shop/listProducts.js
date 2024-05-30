import React, { Component, useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import Product from "../../../components/Product/Product";
import {
  getListProducts,
  getPageCount,
} from "../../../services/productService";
// import ReactPaginate from "react-paginate";
import ReactPaginate from "react-paginate";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProducts: [],
    };
  }

  async componentDidMount() {
    let response = await getListProducts();
    if (response && response.errCode === 0) {
      this.setState({
        listProducts: response.listProducts,
      });
    }
  }

  render() {
    return (
      <div className="col-lg-9">
        <PaginatedItems items={this.state.listProducts} itemsPerPage={12} />
      </div>
    );
  }
}

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-md-6 col-lg-6 col-xl-4 ">
            <Product key={item.id} product={item} />
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row g-4 justify-content-center">
        <Items currentItems={currentItems} />
        <div className="col-12">
          <div className="pagination d-flex justify-content-center mt-5">
            <ReactPaginate
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="<<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
