import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from './components/ShowProduct';
import ProductDeTails from './components/Product.details';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <ProductDeTails />
        </Route>
      </Router>
    </>
  );
}

export default App;
