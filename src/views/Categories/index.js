import React, {Component} from 'react'
import Category from 'components/Category'
import Layout from 'components/Layout'
import categoriesService from 'services/categories'
import { bindActionCreators } from 'redux'
import * as CategoriesActions from 'reducers/categories/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => (
  {
    categories: state.categories
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(CategoriesActions, dispatch)
  }
)

class Home extends Component {
  componentDidMount() {
    if (!this.props.categories.loaded) {
      categoriesService.getCategories().then(
        categories => {
          this.props.actions.setCategories(categories.data)
        }
      )
    }
  }

  render() {
    return (
      <Layout>
        {this.props.categories.loaded && (
          <ul>
            {
              this.props.categories.items.map(
                category => (
                  <li>
                    <Category data={category}></Category>
                  </li>
                )
              )
            }
          </ul>
        )}

      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
