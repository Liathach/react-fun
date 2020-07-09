import React, { Component } from 'react';
import './bankapp.css';
import SumOfAccounts from './SumOfAccounts';


class AcctControls extends Component {
    constructor() {
    super();
        this.state = {
            acctArray: [
               
            ], }

        this.newAccount = {
            name: "",
            balance: 0,
            }
    
        
        this.addAcct = this.addAcct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.totalAcctBalance = this.totalAcctBalance.bind(this);
        this.lengthCheck = this.lengthCheck.bind(this);
    }

    addAcct(name, balance) {
        let addedAccount = this.newAccount;
        this.setState({acctArray: [...this.state.acctArray, addedAccount]});
        
        this.newAccount = {
            name: "",
            balance: 0,
            }

        return this.state.acctArray;

    }

    handleChange(e) {
        this.newAccount[e.target.id] = e.target.value;
        console.log(this.newAccount);
    }

    lengthCheck() {
        return this.state.acctArray.length;
    };
            
    

    totalAcctBalance() {
        console.log(this.state.acctArray.length);
        
        
        let totalBalance = 0;
        for (let i = 0; i < this.state.acctArray.length; i++) {
            totalBalance += Number(this.state.acctArray[i].balance);
        }
        console.log(totalBalance);
        // idAcctSum.innerText = `The total balance of all acounts is $${totalBalance}`;

        return totalBalance;
    }

    highestAcctBalance() {
        let highestAcctBal = 0;
        let highestAcctName;
        for (let i = 0; i < this.acctArray.length; i++) {
            let highBalance = Number(this.acctArray[i].balance);
            let acctName = this.acctArray[i].name;
            if (highestAcctBal < highBalance) {
                highestAcctBal = highBalance;
                highestAcctName = acctName;
            }
        }
        return `${highestAcctName}: $${highestAcctBal}`;
    } 


    render() {
        return (
            <div>
                <div className="AccountOps"> 
                    <span id="idAccountOpen">Account Creation</span><br />
                    <input type="text" id="name" placeholder="Input Account Name" onChange={this.handleChange}/>
                    <input type="number" id="balance" placeholder="Input Initial Balance" onChange={this.handleChange}/><br />
                    <button onClick={this.addAcct}>Create Account</button>
                   </div>
                   <div>
                   <br /><br />
                    {/* {span id="idAccountManage">Account Management</span><br />
                    <button>Deposit</button> <button>Withdraw</button> <button>Delete Acct</button><br /><br /> */}
                    <span id="idAccountStats">Account Stats</span><br />
                    <button id="acctTotal" onClick={this.totalAcctBalance}>Total Account Balance</button>
                    <button id="highestAcc" onClick={this.highestAcctBalance}>Highest Account Balance</button>

                </div>
                <div>
                <h3>Accounts Summary</h3>
                <p>Highest Account:</p>
                <p>Lowest Account:</p>
                    <SumOfAccounts sumFunction={this.totalAcctBalance} lengthCheck={this.lengthCheck}/>
                <p id="idAcctSum">Sum of Accounts:{this.totalBalance}</p>

                </div>
                <div className="RightPanel">
                </div>
            </div>
        )
    }
}


export default AcctControls;