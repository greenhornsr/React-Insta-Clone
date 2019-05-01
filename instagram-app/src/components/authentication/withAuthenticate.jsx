import React from 'react'

const withAuthenticate = (Arg) => 
    class extends React.Component {
        render() {
            return <Arg {...this.props}/>;
        }
    };

export default withAuthenticate