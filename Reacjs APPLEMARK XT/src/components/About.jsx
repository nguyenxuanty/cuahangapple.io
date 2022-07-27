import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        IPhone là một dòng điện thoại thông minh được thiết kế và tiếp thị bởi Apple Inc. Các thiết bị này sử dụng hệ điều hành di động iOS của Apple. Thế hệ iPhone đầu tiên được công bố bởi Giám đốc điều hành của Apple lúc bấy giờ là Steve Jobs vào ngày 9 tháng 1 năm 2007. Kể từ đó, hàng năm Apple đều phát hành các mẫu iPhone mới và các bản cập nhật iOS. Tính đến ngày 1 tháng 11 năm 2018, hơn 2,2 tỷ iPhone đã được bán ra.

IPhone có giao diện người dùng được xây dựng xung quanh màn hình cảm ứng đa điểm. Nó kết nối với mạng di động hoặc Wi-Fi, và có thể thực hiện cuộc gọi, duyệt web, chụp ảnh, phát nhạc và gửi và nhận email cũng như tin nhắn văn bản. Kể từ khi iPhone ra mắt, nhiều tính năng khác đã được bổ sung, bao gồm kích thước màn hình lớn hơn, quay video, chống thấm nước, khả năng cài đặt ứng dụng di động của bên thứ ba thông qua cửa hàng ứng dụng và nhiều tính năng trợ năng. Lên đến iPhone 8 và 8 Plus, iPhone đã sử dụng bố cục với một nút duy nhất trên bảng điều khiển phía trước để đưa người dùng trở lại màn hình chính. Kể từ iPhone X, các mẫu iPhone đã chuyển sang thiết kế màn hình phía trước gần như không viền với tính năng chuyển đổi ứng dụng được kích hoạt bằng nhận dạng cử chỉ. Bố cục cũ hơn ngày nay vẫn được sử dụng cho dòng iPhone SE hiện đang được sản xuất của Apple.

IPhone là một trong hai nền tảng điện thoại thông minh lớn nhất thế giới cùng với Android, tạo thành một phần lớn của thị trường xa xỉ. IPhone đã mang lại lợi nhuận lớn cho Apple, khiến nó trở thành một trong những công ty giao dịch công khai có giá trị nhất thế giới. IPhone thế hệ đầu tiên được mô tả là "mang tính cách mạng" và là "kẻ thay đổi cuộc chơi" đối với ngành công nghiệp điện thoại di động và các mẫu điện thoại tiếp theo cũng đã nhận được nhiều lời khen ngợi. IPhone đã được ghi nhận là đã phổ biến điện thoại thông minh và hệ số dạng đá phiến, đồng thời tạo ra một thị trường rộng lớn cho các ứng dụng dành cho điện thoại thông minh hay còn gọi là "nền kinh tế ứng dụng". Tính đến tháng 1 năm 2017, App Store của Apple chứa hơn 2,2 triệu ứng dụng cho iPhone.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
