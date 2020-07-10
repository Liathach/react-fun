import React, { Component } from 'react'

export class Highest extends Component {
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
                    <h3>Highest account: {this.props.highest()}</h3>
                </div>
            )
        }
    }
}

export default Highest
