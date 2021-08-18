import Category1 from '../../assets/images/category-1.jpg';
import Category2 from '../../assets/images/category-2.jpg';
import Category3 from '../../assets/images/category-3.jpg';

const Category = () => {
  return (
    <div id="category">
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={Category1} alt="Category1" />
              <div className="layer">
                <h3>Good Price</h3>
              </div>
            </div>
            <div className="col-3">
              <img src={Category2} alt="Category2" />
              <div className="layer">
                <h3>Good Price</h3>
              </div>
            </div>
            <div className="col-3">
              <img src={Category3} alt="Category3" />
              <div className="layer">
                <h3>Good Price</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
