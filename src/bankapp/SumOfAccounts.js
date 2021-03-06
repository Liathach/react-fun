import React, { Component } from 'react'

export class SumOfAccounts extends Component {

    render(props) {


        if (this.props.length === 0) { 
            return (
                <div>
                    <h3>Account Total: Zero</h3>
                </div>
            )
        }

        else {
            return (
                <div>
                    <h3>Account Total: {this.props.sum()}</h3>
                </div>
            )
        }

    }
}

export default SumOfAccounts;
