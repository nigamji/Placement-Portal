import './App/App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Component/Auth/Login'
import PrivateRoute from './Component/routing/PrivateRoute'
import Home from './Component/Layout/Home'
import React, { useEffect } from 'react'
import setAuthToken from './utils/setAuthToken'
import { loadAdmin } from './Redux/actions/auth'
import Drives from './Component/Drives/Drives'
import NewDrive from './Component/Drives/NewDrive'
import Records from './Component/Records/Records'
import AddNew from './Component/Records/AddNew'
import StudentDetail from './Component/Records/StudentDetail';
if (localStorage.token) {
  setAuthToken(localStorage.token)
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadAdmin())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        {/* <NavBar /> */}
        <Route exact path='/' component={Login} />

        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/drives' component={Drives} />
          <PrivateRoute exact path='/new-drive' component={NewDrive} />
          <PrivateRoute exact path='/records' component={Records} />
          <PrivateRoute exact path='/records/:id' component={StudentDetail} />
          <PrivateRoute exact path='/add-new-record' component={AddNew} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
