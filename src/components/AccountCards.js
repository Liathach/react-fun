import React, { Component } from 'react'

class AccountCards extends Component {
    render() {
        
                // console.log(this.props);

        return (
            <div myaccount={this.props.account.name}>
               {this.props.account.name} {this.props.account.balance}<br />
               <input type="number" id="transaction" placeholder="Transaction Value" onChange={this.handleChange} /><br />
               <button todo="deposit">Deposit</button>
               <button todo="withdraw">Withdraw</button>
               <button todo="delete">Delete Account</button>
            </div>
        )
    }
}

export default AccountCards
