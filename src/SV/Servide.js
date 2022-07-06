import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

// import "//getbootstrap.com/dist/css/bootstrap.css"
function Svice() {
  const clickbutton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div class="container-fluid">
      <div>
        <img
          src="https://hyundai.thanhcong.vn/images/technical-service/home.png"
          alt=""
          style={{ width: '100%' }}
        ></img>
        <p className="myCarousel">
          <h1>
            Before Service đặc
            <br /> trưng của Hyundai
          </h1>
          <h5>
            Hyundai đang cung cấp nhiều chương trình dịch vụ khác nhau,
            <br /> đem lại trải nghiệm tốt, sự hài lòng cho khách hàng
          </h5>
        </p>
        <div class="container">
          <div class="box1 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home1.png"
                alt="responsive webite"
                class="img-fluid"
                style={{ width: '100%' }}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <Link to="/baohanh" onClick={() => clickbutton()}>
                  <p>
                    <h2>
                      <strong>Bảo hành</strong>
                    </h2>
                  </p>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Chính sách bảo hành</p>
                <p> Bảo hành điện tử</p>
              </p>
            </div>{' '}
          </div>
        </div>

        <div class="container">
          <div class="box2 row">
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <h2>
                  <strong>Bảo dưỡng định kì & sửa chữa</strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Bảo dưỡng định kì</p>
                <p>Sửa chữa chung & đồng sơn </p>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home2.png"
                alt="responsive webite"
                class="img-fluid"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box3 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home3.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' }}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <h2>
                  <strong>Phụ tùng & phụ kiện chính hãng</strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Phụ tùng chính hãng</p>
                <p>Phụ kiện chính hãng</p>
              </p>
            </div>{' '}
          </div>
        </div>

        <div class="container">
          <div class="box1 row">
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <h2>
                  <strong>Chương trình dịch vụ</strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p> Chương trình khuyến mại Dịch vụ</p>
                <p> Chương trình giao nhận xe theo yêu cầu khách hàng</p>
                <p>Chương trình hỗ trợ thiên tai, bão lũ</p>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home4.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box2 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home5.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' }}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <h2>
                  <strong>Triệu hồi </strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Trách nhiệm của HTV </p>
                <p>Trách nhiệm của đại lý và khách hàng </p>
                <p>Tra cứu thông tin triệu hồi</p>
              </p>
            </div>{' '}
          </div>
        </div>
        <div class="container">
          <div class="box3 row">
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <h2>
                  <strong>Bảo hiểm liên kết</strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Xem chi tiết</p>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home6.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box4 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home7.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' }}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <h2>
                  <strong>Chương trình giao xe tại nhà</strong>
                </h2>
                <br /> <br />
                <br />
                <br />
                <br />
                <p>Xem chi tiết</p>
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Svice;
