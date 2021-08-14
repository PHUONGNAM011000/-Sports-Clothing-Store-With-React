import Exclusive from '../../assets/images/exclusive.png';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div id="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={Exclusive} alt="Exclusive" className="offer-img" />
          </div>
          <div className="col-2">
            <p>Exclusive Available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              fuga enim. Repellendus accusantium amet facere! Illum quos quis
              autem pariatur dignissimos voluptates vero dolores animi?
            </small>
            <br />
            <Link className="btn" to="#">
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
