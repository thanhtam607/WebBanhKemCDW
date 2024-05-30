import React, {Component} from "react";
import {connect} from "react-redux";

class Error extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        const error = this.props.error;
        return (
            <>{error && <span className="error text-left">*{error}*</span>}</>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Error);
