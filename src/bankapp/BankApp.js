import React from 'react';
import './bankapp.css';
import AcctOutput from '../components/AcctOutput.js';
import Account from '../components/Account.js';
import AcctControls from '../components/AcctControls';

class BankApp extends React.Component {
    constructor() {
        super();
        this.state = {
            acctArray: [],
        }
    }

    render() {
        return (
            <div>
            <div className="AccountOps">
                <span id="idAccountOpen">Account Creation</span><br />
                <h6><input name= "acctName" type="text" value={this.state.name} onChange={this.handleChange}placeholder="New account name"
                /></h6>
                <h6><input type="number" value={this.state.balance} onChange={this.handleChange} placeholder="Starting balance"
                /></h6>
                 <button onClick={this.addAcct}>Create Account</button><br /><br />
                 <span id="idAccountManage">Account Management</span><br />
                 <button>Deposit</button> <button>Withdraw</button> <button>Delete Acct</button><br /><br />
                 <span id="idAccountStats">Account Stats</span><br />
                 
            </div>
            <div className="RightPanel">
            <AcctOutput />
            </div>
            </div>
        )
    }
}

export default BankApp;