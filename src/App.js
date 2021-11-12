
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashbord from './Pages/Dashbord/Dashbord/Dashbord';
import AddedProduct from './Pages/Home/AddedProduct/AddedProduct';
import Explore from './Pages/Home/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Sheard/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <PrivateRoute path="/dashbord">
              <Dashbord></Dashbord>
            </PrivateRoute>
            <Route path="/purchase/:productId">
              <Purchase></Purchase>
            </Route>
            <Route path="/addedProduct">
              <AddedProduct></AddedProduct>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
