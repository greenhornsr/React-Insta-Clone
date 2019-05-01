import React from 'react'

const withAuthenticate = (Arg) => 
    class extends React.Component {
        render() {
            return <Arg />;
        }
        };

export default withAuthenticate