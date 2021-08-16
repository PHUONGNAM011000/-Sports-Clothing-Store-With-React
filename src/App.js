import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from './components/ShowProduct';

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
      </Router>
    </>
  );
}

export default App;
