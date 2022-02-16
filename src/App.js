import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './compoments/Header/Header';
import Home from './compoments/Home/Home/Home';
import NotFound from './compoments/NotFound/NotFound';
import BookingDetail from './compoments/BookingDetail/BookingDetail';
import Login from './compoments/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './compoments/PrivateRoute/PrivateRoute';
import MyBooking from './compoments/MyBooking/MyBooking';
import AllBooking from './compoments/AllBooking/AllBooking';
import AddBooking from './compoments/AddBooking/AddBooking';
import Footer from './compoments/Footer/Footer';
import About from './compoments/Home/About/About';
import Contact from './compoments/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allbooking">
            <AllBooking></AllBooking>
          </Route>
          <Route path="/addbooking">
            <AddBooking></AddBooking>
          </Route>
          <PrivateRoute path="/bookingDetail/:id">
            <BookingDetail></BookingDetail>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
