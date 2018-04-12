import React, {PureComponent} from 'react';
import storeprovider from './storeprovider';

class Timestamp extends PureComponent {
  render() {
    return (
      <div>
        {this.props.timestamp}
      </div>
    );
  }

  componentWillUpdate() {
    console.log('updating timestamp');
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeprovider(extraProps)(Timestamp);
