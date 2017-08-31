import React from 'react'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => (
  {
    orderType: state.posts.orderType
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)



const Order = (props) => {
  const updateOrder = (selected) => {
    const selectedIndex = selected.target.options.selectedIndex
    props.actions.setOrder(selected.target.options[selectedIndex].value)
  }

  return (
    <select onChange={updateOrder} defaultValue={props.orderType}>
      <option value='timestamp'>
        Time
      </option>
      <option value='voteScore'>
        Vote
      </option>
    </select>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
