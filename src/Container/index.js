import React from 'react'
import {Route, Switch} from 'react-router'
// Views
import Home from '../views/Home'
import Categories from '../views/Categories'
import Post from '../views/Post'
import NotFound from '../views/NotFound'

const Container = props => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/:category/:post_id" component={Post}/>
      <Route path="/:category" component={Categories}/>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default Container;
