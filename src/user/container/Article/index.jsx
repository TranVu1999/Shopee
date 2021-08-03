import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import Hero from "./../../feature/Article/Hero";
import Sidebar from "./../../feature/Article/Sidebar";
import ListPost from "./../../feature/Article/ListPost";
import Post from "../../feature/Article/Post";

ArticlePage.propTypes = {};

function ArticlePage(props) {
  const [listTopic] = useState([
    {
      id: 1,
      title: "Tài Khoản & Mục Khác",
      url: "#/",
    },
    {
      id: 2,
      title: "Đơn Hàng & Thanh Toán",
      url: "#/",
    },
    {
      id: 3,
      title: "Trả Hàng & Hoàn Tiền",
      url: "#/",
    },
    {
      id: 4,
      title: "Bán Hàng & Đối Soát",
      url: "#/",
    },
    {
      id: 5,
      title: "Vận Chuyển",
      url: "#/",
    },
    {
      id: 6,
      title: "Shopee Mall",
      url: "#/",
    },
  ]);

  const [listPost] = useState([
    {
      id: 1,
      title: "Làm Thế Nào Để Xem Trước Các Khung Giờ Và Sản Phẩm Flash Sale?",
    },
    {
      id: 2,
      title: "Làm Sao Để Kích Hoạt Ví ShopeePay Trên Shopee?",
    },
    {
      id: 3,
      title: "Có Thể Trả Góp Bằng Thẻ Tín Dụng Trong Thời Gian Bao Lâu?",
    },
    {
      id: 4,
      title: "Hướng Dẫn Nhận E-Voucher Sau Khi Đã Mua Thành Công",
    },
    {
      id: 5,
      title: "Các Câu Hỏi Liên Quan Đến Mã Miễn Phí Vận Chuyển (Mã Freeship)",
    },
    {
      id: 6,
      title: "Khi Nào Tôi Nhận Được Mã Miễn Phí Vận Chuyển?",
    },
    {
      id: 7,
      title: "Tại Sao Tôi Không Đặt Hàng Được Trên Shopee ?",
    }
  ]);

  return (
    <div className="article-page-content mt-80">
      <Hero />
      <div className="mt-4 mb-5 container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar items={listTopic} />
          </div>
          <div className="col-lg-9">
            {/* <ListPost items={listPost} /> */}
            <Post/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
