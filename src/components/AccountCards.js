import React, { Component } from 'react'

class AccountCards extends Component {
    render() {

        console.log(this.props);

        return (
            <div myaccount={this.props.account.name}>
               AccountCards {this.props.account.name} {this.props.account.balance}
               <button todo="deposit">Deposit</button>
               <button todo="withdraw">Withdraw</button>

            </div>
        )
    }
}

export default AccountCards
