import React, { Component } from 'react'

class AccountCards extends Component {
    constructor() {
        super();

        // this.counter = 0;
        this.newAccount = {
            balance: Number(0),
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.newAccount[e.target.id] = parseInt(e.target.value);
        console.log(this.newAccount);
        console.log(typeof (this.newAccount.balance));
    }

    render() {

        // console.log(this.props);

        return (
            <div myaccount={this.props.account.name}>
                {this.props.account.name} {this.props.account.balance}<br />
                <input type="number" id="balance" placeholder="Transaction Value" onChange={this.handleChange} /><br />
                <button todo="deposit" onClick={() => this.props.deposit(this.newAccount.balance, this.props.account.name)}>Deposit</button>
                <button todo="withdraw" onClick={() => this.props.withdraw(this.newAccount.balance, this.props.account.name)}>Withdraw</button>
                <button todo="delete" onClick={() => this.props.delete(this.props.account.name)}>Delete Account</button>
            </div>
        )
    }
}

export default AccountCards
