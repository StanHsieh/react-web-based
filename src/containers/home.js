import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchHomeData } from '../actions/home'

class Home extends Component {
  componentDidMount() {
    if(Object.keys(this.props.homeData).length < 1) {
      this.props.fetchHomeData()
    }
  }
  render() {
    const {
      homeData
    } = this.props

    return (
      <div>
        {
          Object.keys(homeData).length > 0 &&
            <div>
              {JSON.stringify(homeData)}
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    homeData: state.homeData
  }
}
 
const mapDispatchToProps = {
  fetchHomeData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)