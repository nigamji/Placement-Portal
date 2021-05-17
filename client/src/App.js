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
        <Route exact path='/' component={Login} />
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
