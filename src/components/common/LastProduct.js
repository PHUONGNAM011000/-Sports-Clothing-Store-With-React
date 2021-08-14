import Product5 from '../../assets/images/product-5.jpg';
import Product6 from '../../assets/images/product-6.jpg';
import Product7 from '../../assets/images/product-7.jpg';
import Product8 from '../../assets/images/product-8.jpg';
import Product9 from '../../assets/images/product-9.jpg';
import Product10 from '../../assets/images/product-10.jpg';
import Product11 from '../../assets/images/product-11.jpg';
import Product12 from '../../assets/images/product-12.jpg';


const LastProduct = () => {
  return (
    <div id="product">
      <div className="small-container">
        <h2 className="title">Latest Products</h2>

        {/* row 1 */}
        <div className="row">
          <div className="col-4">
            <img src={Product5} alt="" />
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
            <img src={Product6} alt="" />
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
            <img src={Product7} alt="" />
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
            <img src={Product8} alt="" />
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

        {/* row 2 */}
        <div className="row">
          <div className="col-4">
            <img src={Product9} alt="" />
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
            <img src={Product10} alt="" />
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
            <img src={Product11} alt="" />
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
            <img src={Product12} alt="" />
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
  );
};

export default LastProduct;
