import Product1 from '../../assets/images/product-1.jpg';
import Product2 from '../../assets/images/product-2.jpg';
import Product3 from '../../assets/images/product-3.jpg';
import Product4 from '../../assets/images/product-4.jpg';

const Product = () => {
  return (
    <div id="product">
      <div className="small-container">
        <h2 className="title">Feature Products</h2>
        <div className="row">
          <div className="col-4">
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
  );
};

export default Product;
