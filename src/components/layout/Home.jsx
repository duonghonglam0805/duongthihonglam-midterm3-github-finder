import React from 'react'
import { Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import User from '../users/User';
import Search from '../users/Search';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
const Home = () => {
  return (
    <div className="container">
    <h1>GitHub Users Data</h1>
    <Switch>
      <Route exact path= "/" component={Search} />
      <Route exact path= "/about" component={About} />
      {/* Add this line to specify the routing */}
      <Route exact path="/user/:id" component={User} />
      <Route exact path= "/*" component={NotFound} />
    </Switch>
  </div>
  )
}

export default Home
