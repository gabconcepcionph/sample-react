import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <div>
        {this.props.children} my age is {this.props.age}
      </div>
    );
  }
}

export default Person