import React, {PureComponent} from 'react';
import storeprovider from './storeprovider';

class Timestamp extends PureComponent {

  static timeDisplay = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }

}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

export default storeprovider(extraProps)(Timestamp);
