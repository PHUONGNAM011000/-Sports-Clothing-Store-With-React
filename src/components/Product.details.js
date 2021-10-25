import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import Product1 from "../assets/images/product-1.jpg";
import Product2 from "../assets/images/product-2.jpg";
import Product3 from "../assets/images/product-3.jpg";
import Product4 from "../assets/images/product-4.jpg";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import { useState } from "react";

const ShowProduct = () => {
  const nameImages = [gallery1, gallery2, gallery3, gallery4];
  const sizeProduct = ["S", "M", "L", "XL"];
  const [pice, setPice] = useState(1);
  const [sizeCloths, setSizeCloths] = useState("");
  const [like, setLike] = useState(false);
  const [images, setImages] = useState(gallery1);

  return (
    <>
      <div id="show-product">
        <NavBar />
      </div>

      {/* details product  */}
      <div id="show-product-details">
        <div className="small-container single-product">
          <div className="row row-2">
            <div className="col-2">
              <img src={images} alt={images} />

              <div className="small-img-row">
                {nameImages.map((img) => (
                  <div
                    key={img}
                    className="small-img-col"
                    onClick={() => setImages(img)}
                  >
                    <img src={img} alt={img} width="100%" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-2 col-2-flex">
              <div className="br">
                <p>Home / T-Shirt</p>
                <h1>Red Printd T-Shirt by HRX</h1>
              </div>
              <h4>$50.00</h4>
              <div id="size">
                <div className="header">Size</div>
                {sizeProduct.map((size) => (
                  <div
                    style={
                      size === sizeCloths
                        ? { color: "#fff", background: "#fa7664" }
                        : {}
                    }
                    key={size}
                    className="size"
                    onClick={() => setSizeCloths(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="quantity" id="size">
                <div className="header">Số lượng</div>
                <button
                  className="decrease"
                  onClick={() =>
                    setPice((prevPrice) =>
                      prevPrice === 1 ? prevPrice : prevPrice - 1
                    )
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={pice}
                  onChange={(e) => setPice(e.currentTarget.value)}
                />
                <button
                  className="increase"
                  onClick={() => setPice((prevPrice) => prevPrice + 1)}
                >
                  +
                </button>
              </div>
              <div id="buy">
                <button className="buy">
                  <span>MUA NGAY</span>
                </button>
                <button className="buy">
                  <span>THÊM VÀO GIỎ HÀNG</span>
                </button>
                <i
                  className={like ? "fa fa-heart" : "fa fa-heart-o"}
                  aria-hidden="true"
                  onClick={() => setLike(!like)}
                ></i>
              </div>
            </div>
          </div>
        </div>

        {/* title */}
        <div className="small-container">
          <div className="row row-2">
            <h2>Related Products</h2>
            <p>View more</p>
          </div>
        </div>

        <div id="product">
          <div className="small-container">
            <div className="row">
              <div className="col-4 hover">
                <img src={Product1} alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <p>%50.00</p>
              </div>
              <div className="col-4">
                <img src={Product2} alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <p>%50.00</p>
              </div>
              <div className="col-4">
                <img src={Product3} alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <p>%50.00</p>
              </div>
              <div className="col-4">
                <img src={Product4} alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <p>%50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* details product  */}

      <Footer />
    </>
  );
};

export default ShowProduct;
