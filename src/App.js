import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return (
  <>
    <Router>
      <HomePage />
      <Switch>
        <Route path="/" exact/>
      </Switch>
    </Router>
  </>
  )
};

export default App;
