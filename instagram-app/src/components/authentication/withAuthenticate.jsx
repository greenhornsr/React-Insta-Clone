import React from 'react'

const withAuthenticate = (Component1) => (Component2) =>
    class extends React.Component {
        render() {
            return this.props.user ?<Component1 {...this.props} />:
            <Component2 {...this.props}/>; 
        }
    };

export default withAuthenticate