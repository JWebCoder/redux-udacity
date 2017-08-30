import React, {Component} from 'react'
import Layout from 'components/Layout'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => (
  {
    posts: state.posts
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)

class PostsCategory extends Component {
  render() {
    return (
      <Layout>
        <div>
          Category<br/>
          {this.props.match.params.category}
        </div>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory)
