import Brands from "./Brands";
import Category from "./Category";
import LastProduct from "./LastProduct";
import Offer from "./Offer";
import Product from './Product';
import Testimonial from "./Testimonial";

const Feature = () => { 
    return ( 
        <>
            <Category />
            <Product />
            <LastProduct />
            <Offer />
            <Testimonial />
            <Brands />
        </>
    );
}
 
export default Feature;