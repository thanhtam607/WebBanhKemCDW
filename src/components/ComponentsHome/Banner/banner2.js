import React from "react";
const Banner2 = ()=>{
    return(
        <div className="container-fluid banner bg-secondary my-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-white">Thăng hoa trong vị ngọt</h1>
                            <p className="fw-normal display-3 text-dark mb-4">cùng chúng tôi</p>
                            <p className="mb-4 text-dark">Khám phá bộ sưu tập bánh kem đa dạng và phong phú của chúng tôi để làm cho mọi dịp đặc biệt hơn.</p>
                            <a href="Frontend-React.JS/src/containers/User/Home#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">Mua ngay</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="img/baner-1.png" className="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner2