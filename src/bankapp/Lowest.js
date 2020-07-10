import React, { Component } from 'react'

export class Lowest extends Component {
    render() {
        if (this.props.length === 0) { 
            return (
                <div>
                    <h3>No accounts!</h3>
                </div>
            )
        }

        else {
            return (
                <div>
                    <h3>Lowest account: {this.props.lowest()}</h3>
                </div>
            )
        }
    }
    
}

export default Lowest
