import NavBar from './NavBar';
import backgroundImage from '../../assets/images/image1.png';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <NavBar />
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br /> A New Style!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sunt
              excepturi voluptates doloribus quisquam culpa. Qui a at aspernatur
              ad?
            </p>
            <Link className="btn" to=''>
                Explore Now &#8594;
            </Link>
          </div>
          <div className="col-2">
            <img src={backgroundImage} alt="backgroundImage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
