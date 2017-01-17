import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

import NavigationBar from '../components/navigation-bar'

import { fetchAppData } from '../actions/app'

class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  render () {
    const {
      appData,
      children,
      location,
      fetchAppData
    } = this.props
    
    return (
      <div 
        className='flex-row absolute extend'
      >
        <NavigationBar 
          pathname={location.pathname} 
        />
        <div>
          <input 
            type='button' 
            value='click'
            onClick={(e) => {
              fetchAppData()
            }}
          />
          {
            Object.keys(appData).length > 0 &&
              <div>
                {JSON.stringify(appData, null, 2)}
              </div>
          }
        </div>
          
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state.appData
  }
}

const mapDispatchToProps = {
  fetchAppData
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)