import Logo1 from '../../assets/images/logo-godrej.png';
import Logo2 from '../../assets/images/logo-oppo.png';
import Logo3 from '../../assets/images/logo-coca-cola.png';
import Logo4 from '../../assets/images/logo-paypal.png';
import Logo5 from '../../assets/images/logo-philips.png';

const Brands = () => {
  return (
    <div id="brands">
      <div className="small-container">
        <div className="row">
          <div className="col-5">
            <img src={Logo1} alt="logo1" />
          </div>
          <div className="col-5">
            <img src={Logo2} alt="logo2" />
          </div>
          <div className="col-5">
            <img src={Logo3} alt="logo3" />
          </div>
          <div className="col-5">
            <img src={Logo4} alt="logo4" />
          </div>
          <div className="col-5">
            <img src={Logo5} alt="logo5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
