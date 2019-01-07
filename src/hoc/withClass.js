import React, { Component } from 'react';

// first varik
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass forwardedRef={ref} {...props} />
  });
}

export default withClass;
