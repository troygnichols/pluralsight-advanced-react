import React, {Component} from 'react';
import storeprovider from './storeprovider';

class Timestamp extends Component {
  render() {
    return (
      <div>
        {this.props.timestamp.toString() || '...'}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeprovider(extraProps)(Timestamp);
