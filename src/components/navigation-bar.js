import React, { PropTypes, Component } from 'react'

import Link from './link'

import merge from '../utils/merge'

import styles from '../styles/components/navigation-bar'


const NavigationBar = ({ pathname }) => (
  <div 
    className='white flex-column size20'
    style={styles.container} 
  >
    <NavigationItem
      active={pathname === '/'}
      path="/"
      title={`H`}
    />
    <NavigationItem
      active={pathname === '/foo'}
      path="/foo"
      title={`F`}
    />
    <NavigationItem
      active={pathname === '/bar'}
      path="/bar"
      title={`B`}
    />
  </div>
)

class NavigationItem extends Component {
  state = {
    hover: false
  }
  _onMouseEnter = () => {
    this.setState({
      hover: true
    });
  }
  _onMouseLeave = () => {
    this.setState({
      hover: false
    });
  }
  render() {
    let {
      path,
      title,
      active
    } = this.props;
    return (
      <div
        className='border-box'
        style={merge(
          styles.item,
          active && styles.itemActive,
          this.state.hover && styles.itemHover,
        )}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        <Link to={path} >{title}</Link>
      </div>
    );
  }
}

export default NavigationBar;
