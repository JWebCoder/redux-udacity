import React from 'react'
import {Route, Switch} from 'react-router'
// Views
import Home from 'views/Home'
import PostsCategory from 'views/PostsCategory'
import Categories from 'views/Categories'
import Post from 'views/Post'
import PostEdit from 'views/PostEdit'
import NotFound from 'views/NotFound'

const Container = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/:category/:post_id/edit" component={PostEdit}/>
      <Route path="/:category/:post_id" component={Post}/>
      <Route path="/:category" component={PostsCategory}/>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default Container;
