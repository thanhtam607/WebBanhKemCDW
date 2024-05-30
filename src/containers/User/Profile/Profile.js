import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from "../breadcrumb";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        const breadcrumbItems = [
            { title: "Trang chủ", link: "/", active: false },
            { title: "Tài khoản của tôi", link: "/profile", active: true }
        ];
        return (
<div>
                <Header pageActive={"Trang chủ"}> </Header>
                <Breadcrumb items={breadcrumbItems}/>
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card card-profile col-10 mb-4">
                <h5 className="card-header">Thông tin chi tiết</h5>

                <div className="card-body">
                    <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                            src="../img/avatars/1.png"
                            alt="user-avatar"
                            className="d-block rounded"
                            height="100"
                            width="100"
                            id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                            <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex="0">
                                <span className="d-none d-sm-block">Upload new photo</span>
                                <i className="bx bx-upload d-block d-sm-none"></i>
                                <input
                                    type="file"
                                    id="upload"
                                    className="account-file-input"
                                    hidden
                                    accept="image/png, image/jpeg"
                                />
                            </label>
                            <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                <i className="bx bx-reset d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                    </div>
                </div>
                <hr className="my-0"/>
                <div className="card-body">
                    <form id="formAccountSettings" method="POST" onSubmit="return false">
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value="John"
                                    autoFocus
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input className="form-control" type="text" name="lastName" id="lastName" value="Doe"/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="email" className="form-label">E-mail</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value="john.doe@example.com"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="organization" className="form-label">Organization</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="organization"
                                    name="organization"
                                    value="ThemeSelection"
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                <div className="input-group input-group-merge">
                                    <span className="input-group-text">US (+1)</span>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="form-control"
                                        placeholder="202 555 0111"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" name="address"
                                       placeholder="Address"/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="state" className="form-label">State</label>
                                <input className="form-control" type="text" id="state" name="state"
                                       placeholder="California"/>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="231465"
                                    maxLength="6"
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="country">Country</label>
                                <select id="country" className="select2 form-select">
                                    <option value="">Select</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="language" className="form-label">Language</label>
                                <select id="language" className="select2 form-select">
                                    <option value="">Select Language</option>
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="pt">Portuguese</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="timeZones" className="form-label">Timezone</label>
                                <select id="timeZones" className="select2 form-select">
                                    <option value="">Select Timezone</option>
                                    <option value="-12">(GMT-12:00) International Date Line West</option>
                                    <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                    <option value="-10">(GMT-10:00) Hawaii</option>
                                    <option value="-9">(GMT-09:00) Alaska</option>
                                    <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                                    <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                                    <option value="-7">(GMT-07:00) Arizona</option>
                                    <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                    <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Central America</option>
                                    <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                                    <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                    <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                                    <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="currency" className="form-label">Currency</label>
                                <select id="currency" className="select2 form-select">
                                    <option value="">Select Currency</option>
                                    <option value="usd">USD</option>
                                    <option value="euro">Euro</option>
                                    <option value="pound">Pound</option>
                                    <option value="bitcoin">Bitcoin</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn btn-primary me-2 "> Lưa thay đổi </button>
                            <button type="reset" className="btn btn-outline-secondary">Hủy</button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
