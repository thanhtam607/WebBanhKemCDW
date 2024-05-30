import React, { Component } from 'react';
import { connect } from 'react-redux';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">

                        <div className="card">
                            <div className="card-body">

                                <div className="app-brand justify-content-center">
                                    <a href="/" className="app-brand-link gap-2">

                                        <span className="app-brand-text demo text-primary-cake fw-bolder">Peace Bakery</span>
                                    </a>
                                </div>

                                <h4 className="mb-2 text-black">Đăng ký</h4>

                                <form id="formAuthentication" className="mb-3" action="/" method="POST">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Nhập vào email của bạn..."
                                            autoFocus
                                        />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Mật khẩu</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                            <span className="input-group-text cursor-pointer"><i
                                                className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Nhập lại mật khẩu</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="repassword"
                                                className="form-control"
                                                name="repassword"
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="repassword"
                                            />
                                            <span className="input-group-text cursor-pointer"><i
                                                className="bx bx-hide"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="terms-conditions"
                                                   name="terms"/>
                                            <label className="form-check-label" htmlFor="terms-conditions">
                                                Đồng ý với
                                                <a href="javascript:void(0);"> điều khoản và chính sách của chúng tôi.</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary-cake text-white  w-100">Đăng ký</button>
                                </form>

                                <p className="text-center">
                                    <span>Bạn đã có tài khoản?</span>
                                    <a href="/login">
                                        <span className=" text-primary-cake">Đăng nhập tại đây.</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
