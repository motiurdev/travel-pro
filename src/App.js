import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './compoments/Header/Header';
import Home from './compoments/Home/Home/Home';
import NotFound from './compoments/NotFound/NotFound';
import BookingDetail from './compoments/BookingDetail/BookingDetail';
import Login from './compoments/Login/Login';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/bookingDetail/:id">
          <BookingDetail></BookingDetail>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
