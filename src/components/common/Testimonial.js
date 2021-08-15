import User1 from '../../assets/images/user-1.png';
import User2 from '../../assets/images/user-2.png';
import User3 from '../../assets/images/user-3.png';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="small-container">
        <div className="row">
          {/* User 1 */}
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              dolorem nesciunt accusantium alias facilis expedita ab possimus
              amet quo!
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <img src={User1} alt="User1" />
            <h3>Sean Parker</h3>
          </div>

          {/* User 2 */}
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              dolorem nesciunt accusantium alias facilis expedita ab possimus
              amet quo!
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <img src={User2} alt="User2" />
            <h3>Mike Smith</h3>
          </div>

          {/* User 3 */}
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
              dolorem nesciunt accusantium alias facilis expedita ab possimus
              amet quo!
            </p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <img src={User3} alt="User3" />
            <h3>Mabel Joe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
