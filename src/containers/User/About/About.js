import React, {Component} from "react";
import Header from "../Header/Header";
import Breadcrumb from "../breadcrumb";
import Footer from "../Footer/Footer";
import { connect } from 'react-redux';
class About extends Component{
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
            { title: "Giới thiệu", link: "/about", active: true }
        ];

        return (
            <div>
                <Header pageActive={"Giới thiệu"}/>
                <Breadcrumb items={breadcrumbItems}/>
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="container">
                            <div className="row">
                                <h1 className="text-center">Giới thiệu</h1>
                                <div className="about__text">
                                    <h4>1. Chúng tôi là Tiệm bánh Bình Yên</h4>
                                    <p className="text-justify">Được thành lập vào năm 2024 bởi một đội ngũ đầy nhiệt huyết, bánh sinh nhật của tiệm bánh chúng tôi
                                        là những chiếc bánh tươi ngon được nướng hàng ngày và chau chuốt tỉ mỉ đến từng chi tiết.
                                        Với mong muốn mang đến những chiếc bánh không chỉ ngon miệng mà còn đẹp mắt,
                                        với nguồn nguyên liệu chất lượng cao,
                                        công thức chế biến điều chỉnh phù hợp với thị hiếu, và một vẻ ngoài hợp xu hướng và độc đáo.</p>
                                    <img src="img/about/anh2.jpg"/>
                                    <h4>2. Điểm khác biệt</h4>
                                    <p> Với thợ bếp đam mê và giàu kinh nghiệm, chúng tôi cũng đáp ứng những yêu cầu đặc biệt của khách hàng để tạo nên những chiếc bánh đặc biệt cho mỗi sự kiện quan trọng.
                                        Sản phẩm của Tiệm bánh hạnh phúc thích hợp cho mọi dịp đặc biệt như sinh nhật, khai trương, kỉ niệm, lễ cầu hôn, tiệc cưới,
                                        lễ đầy tháng, và cả những ngày thường bỗng dưng thèm một chút ngọt ngào và tươi tắn.</p>
                                    <img src="img/about/anh1.jpg"/>
                                    <h4>3. Trải nghiệm online và tại cửa hàng</h4>
                                    <p className="text-justify"> Website của chúng tôi luôn được cập nhật các mẫu bánh mới nhất và phù hợp với nhiều khách hàng.
                                        Chúng tôi mang đến trải nghiệm mua sắm và chọn bán tuyệt vời dù là bạn đang liên hệ với chúng tôi qua website.</p>

                                    <p className="text-justify">  Hiện tại, chúng tôi có cửa hàng tại Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP. HCM.
                                        Chúng tôi nhận đặt hàng trước với các loại bánh sinh nhật, giao trực tiếp tại cửa hàng
                                        hoặc giao hàng tận nơi và một số loại bánh có thể mua trực tiếp.</p>
                                    <p>Hãy ghé thăm cửa hàng hoặc liên hệ Hotline +84 987654321 để chúng tôi tư vấn bạn nhanh nhất nhé!</p>
                                    <p className="text-primary">Xin trân trọng cảm ơn!</p>
                                    <p>Cảm ơn quý khách đã lựa chọn và đồng hành cùng chúng tôi trong những chặng đường qua!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )}
}
const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);